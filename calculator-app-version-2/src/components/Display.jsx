import styles from "./Display.module.css";
function Display({ displayValue }) {
  return (
    <input
      type="text"
      readOnly
      className={styles.display}
      value={displayValue}
    />
  );
}

export default Display;
