import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleClick = (buttonText) => {
    console.log("Button Clicked " + buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={handleClick} />
      </div>
    </>
  );
}

export default App;
