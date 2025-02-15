import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  /*const initialTodoItems = [
    { name: "Buy Milk", date: "2/20/2025" },
    { name: "Learn React", date: "2/28/2025" },
    { name: "Learn Spring Boot", date: "2/28/2025" },
  ];*/

  const [todoItems, setTodoItems] = useState([]);
  const handleAddNewItem = (itemName, itemDueDate) => {
    /*console.log(
      `Add Button Clicked.  TodoName: ${itemName} -  Date: ${itemDueDate}`
    );*/
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoName) => {
    /*console.log(`Delete Button Clicked ${todoName}`);*/
    const newTodoItems = todoItems.filter((item) => item.name != todoName);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <center className="todo-container">
        <AppName name="Todo App" />
        <AddTodo handleAddItem={handleAddNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteButton={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;
