import {useState,useEffect} from 'react';
import {ContextProvider} from '../CreateContext/CreateContext';
import InsertData from '../Components/InsertData'
const getData=()=>{
  let x=localStorage.getItem("list");
  if(x){
    return JSON.parse(x);
  }
  else{
    return [];
  }
}
const Provider=()=>{
 let [data,setData]=useState(getData());
 let [message,setMessage]=useState();
// let [element,setElement]=useState();
 const addTodo=(todo)=>{
let user={
    item:todo,
    id:Date.now(),
    complete:false,
    edit:false
  }
  if(todo){
  setData((prev)=> [...prev,user])
  }
  else{
    alert("please fill the input box");
  }
 }
 const deleteTodo=(id)=>{
   let x=data.filter((value)=>{
    return value.id !==id;
   })
   setData(x);
 }
 
 const updateTodo=(id)=>{
   let x = data.map((val)=>{
     return val.id===id;
   })
   setMessage(x[0].item)
   setData((prev)=> prev.map((value)=>
   (value.id===id)?{...value,item:message,edit:!value.edit}:value))
 }

 useEffect(()=>{
   localStorage.setItem("list",JSON.stringify(data));
 },[data]);
 
 const toggleComplete=(id,complete)=>{
   setData((prev)=> prev.map((value)=> value.id===id ?{...value,complete:!value.complete}:value));
 }
 
  return(
    <ContextProvider value={{data,addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <div className="header"><h3>Todo List application with context</h3></div>
    <InsertData />
    {
      data.map((value,index)=>{
      
       return <div className="items"key={value.id} style={{height:30+"px",width:90+"vw",backgroundColor:"#f1f1f1",paddingLeft:5+"px",marginTop:10+"px",paddingTop:10+"px"}}>{index+1}.
       <input type="checkbox" onClick={()=>{
        toggleComplete(value.id,value.complete);}} />
       <input
       type="text"value={value.edit!==true?value.item:message}
       onChange={(e)=>{setMessage(e.target.value)}}
       style={{position:"relative",top:-3+"px",border:'none',outline:'none',backgroundColor:'#f1f1f1',textDecoration:(value.complete===true)?"line-through":"none"}}
       readOnly={value.edit===false}/>
       <button style={{position:'absolute',left:180+"px"}} onClick={()=>{
         updateTodo(value.id);
       }} disabled={value.complete===true}>{(value.edit === true)?"UPDATE":"EDIT"}</button>
       <button style={{position:'absolute',left:250+"px"}} onClick={()=>deleteTodo(value.id)}>DELETE</button>
       </div>
      })
    }
    </ContextProvider>
    )
}
export default Provider;