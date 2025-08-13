import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./contexts/todosContext";
import { useState } from "react";
import { Snak } from "./contexts/SnakContext";
import { v4 as uuidv4 } from "uuid";
import SimpleSnackbar from "./components/Snak";
const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "تيسمبتيس يتسبميتس بيمستب",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "تيسمبتيس يتسبميتس بيمستب",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "تيسمبتيس يتسبميتس بيمستب",
    isCompleted: false,
  },
];




function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('')
  function ShowSnak(op){
    setOpen(true);
    setContent(op)
    setTimeout(()=>{
      setOpen(false)
    }, 3000)
  }
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#191b1f",
          height: "100vh",
          direction: "rtl",
        }}
      >
        <Snak.Provider value={ShowSnak}>
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
          <SimpleSnackbar open={open} content={content}/>
        </TodosContext.Provider>
        </Snak.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
