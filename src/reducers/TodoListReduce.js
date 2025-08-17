
import { v4 as uuidv4 } from "uuid";

export default function Reducer(todos, {type, params}){
    if (type == "Add"){
const newTodo = {
      id: uuidv4(),
      title: params.titleInput,
      details: "",
      isCompleted: false,
    };

    const updatedTodos = [...todos, newTodo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos;

    
    }
    else if (type == "Delete"){
        const updatedTodos = todos.filter((t) => {
      return t.id != params.passed.id;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos;
    }
    else if(type == "Update"){
        const updatedTodos = todos.map((t) => {
              if (t.id == params.passed.id) {
                return { ...t, title: params.passed.title, details: params.passed.details };
              } else {
                return t;
              }
            });
        
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
    }else if(type === "get"){
  const storageTodos = JSON.parse(localStorage.getItem("todos"));
  if (Array.isArray(storageTodos)) {
    return storageTodos;
    }
    return todos;
}else if(type === "Up"){
  const updatedTodos = todos.map((t) => {
      if (t.id == params.todo.id) {
       return {...t,isCompleted: !t.isCompleted};
      }
      return t;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos
}
}