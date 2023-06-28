import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = []

const init = ()=>{
  return  JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo =  ()=>{

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])
      
      const handleNewTodo = ( todo )=> {
          const action = { 
              type: '[TODO] Add Todo',
              payload: todo
          };
      
          dispatch(action);
      }
      
      const handleRemoveTodo = ( todo )=> {
          const action = { 
              type: '[TODO] Remove Todo',
              payload: todo
          };
      
          dispatch(action);
      }
      
      const handleToggleTodo = ( id )=> {
           const action = { 
               type: '[TODO] Toggle Todo',
               payload: id
           };
      
          dispatch(action);
 
      }

      const pendingTodosCount = todos.filter(todo=>!todo.done).length;
    return {
       todos,
       todosCount: todos.length,
       handleRemoveTodo,
       handleToggleTodo,
       handleNewTodo,
       pendingTodosCount
    }
}