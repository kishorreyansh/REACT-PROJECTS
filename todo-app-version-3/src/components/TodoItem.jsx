import { MdDeleteOutline } from "react-icons/md";
function TodoItem({ name, date, onDeleteButton }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteButton(name)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
