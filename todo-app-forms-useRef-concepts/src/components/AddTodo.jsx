import { BiMessageAdd } from "react-icons/bi";
import { useState } from "react";
import { useRef } from "react";

function AddTodo({ handleAddItem }) {
  /*const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");*/

  const todoItemNameElement = useRef(0);
  const dueDateElement = useRef(0);

  /*const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };*/

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoItemNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoItemNameElement.current.value = "";
    dueDateElement.current.value = "";
    handleAddItem(todoName, dueDate);
    /*setTodoName("");
    setDueDate("");*/
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            id="text"
            className="form-control"
            placeholder="Enter Todo Here"
            ref={todoItemNameElement}
            /*value={todoName}
            onChange={handleTodoName}*/
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            id="date"
            className="form-control"
            ref={dueDateElement}
            /*value={dueDate}
            onChange={handleDueDate}*/
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
