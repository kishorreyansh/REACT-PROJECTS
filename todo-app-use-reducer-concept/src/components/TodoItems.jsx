import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext); // object destructuring
  //above line and below 2 lines both are same
  /*const contextObject = useContext(TodoItemsContext);
  const todoItems = contextObject.todoItems;*/
  console.log(todoItems);
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            name={items.name}
            date={items.date}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
