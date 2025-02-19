import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncrement = () => {
    console.log("Increment clicked");
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    console.log("Decrement clicked");
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  const handleAdd = () => {
    dispatch(
      counterActions.add({
        num: inputValue.current.value,
      })
    );
    inputValue.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputValue.current.value));
    inputValue.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleIncrement}
        >
          Increment By 1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          Decrement By -1
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          id="text"
          ref={inputValue}
          className="form-control"
          placeholder="Enter Number"
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
