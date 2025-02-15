import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
function TodoItems({ todoItems }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((items) => (
          <TodoItem name={items.name} date={items.date}></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
