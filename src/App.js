import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { SnakProvider } from "./contexts/SnakContext";
import { v4 as uuidv4 } from "uuid";
import SimpleSnackbar from "./components/Snak";
import { ReducerProvider } from "./contexts/todosContext";
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

  
  return (
    <ReducerProvider>
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
        <SnakProvider  > 
          <TodoList />
        </SnakProvider>
      </div>
    </ThemeProvider>
    </ReducerProvider>
  );
}

export default App;
