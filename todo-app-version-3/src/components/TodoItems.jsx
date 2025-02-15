import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
function TodoItems({ todoItems, onDeleteButton }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((items) => (
          <TodoItem
            key={items.name}
            name={items.name}
            date={items.date}
            onDeleteButton={onDeleteButton}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
