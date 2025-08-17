import { createContext, useContext, useReducer } from "react";
import Reducer from "../reducers/TodoListReduce";
import userEvent from "@testing-library/user-event";
 
 const TodosContext = createContext([[], () => {}]);
export const ReducerProvider = ({children}) =>{
  const [todos, Dispatch] = useReducer(Reducer, [])
  return(
    <TodosContext.Provider value={[todos, Dispatch]}>
      {children }
    </TodosContext.Provider>
  )
}
export const useTodos = () => {
  return useContext(TodosContext);
}

