import { BiMessageAdd } from "react-icons/bi";
import { useState } from "react";

function AddTodo({ handleAddItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    handleAddItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            id="text"
            className="form-control"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            id="date"
            className="form-control"
            value={dueDate}
            onChange={handleDueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClick}
          >
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
