import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function WelcomeMessage() {
  const contextObject = useContext(TodoItemsContext);
  const todoItems = contextObject.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
}

export default WelcomeMessage;
