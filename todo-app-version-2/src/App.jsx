import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    { name: "Buy Milk", date: "2/20/2025" },
    { name: "Learn React", date: "2/28/2025" },
    { name: "Learn Spring Boot", date: "2/28/2025" },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName name="Todo App" />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
