import {useState} from 'react';
import {useContextt} from '../CreateContext/CreateContext'
const InsertData=()=>{
let [input,setInput]=useState("");
let {addTodo}=useContextt();

return(
    <>
    <input type="text"placeholder="enter item" onChange={(e)=>{
      setInput(e.target.value)
    }} value={input}/><button style={{marginLeft:0+"px"}} onClick={()=>{addTodo(input);setInput("");
          }}>addItem</button>
    </>
    )
  
}
export default InsertData;