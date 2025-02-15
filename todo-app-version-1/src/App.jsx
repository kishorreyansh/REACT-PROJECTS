import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
          <TodoItem />
        </div>
      </center>
    </>
  );
}

export default App;
