import {createContext,useContext} from 'react';
export const CreateContext=createContext({
 data:[{
    id:1,
    todo:"data will come here",
    complete:false
  }],
  addTodo:(todo)=>{
    
  },
  deleteTodo:(id)=>{
    
  },
  updateTodo:(id,todo)=>{
    
  }
});
export const ContextProvider=CreateContext.Provider;
export const useContextt=()=>{
  return useContext(CreateContext);
}