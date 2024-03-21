import { useState } from "react";

const Cards = (Props) => {
  //checking the status
  const [status, setstatus] = useState("Not completed");
  function handleChange(event) {
    const { value } = event.target;
    setstatus(value);
  }

  //Text color of the status
  let completed =
    status === "completed"
      ? "form-select  text-bg-success"
      : "form-select  text-bg-danger";

  //Delete Operation
  function handleDelete() {
    Props.onDelete(Props.id);
  }

  //Edit Operation
  function handleEdit() {
    Props.editHandler(Props.id);
  }

  return (
    <div>
      <div className="container card-container mt-3">
        <div
          className="card card-div bg-opacity-50 bg-warning text-bg-light"
          style={{ maxWidth: "30rem", maxHeight: "18rem" }}
        >
          <div className="card-body ">
            <p>
              Name:<span className="text-white">{Props.title} </span>
            </p>
            <p>
              Description:<span className="text-white">{Props.desc} </span>
            </p>
            <div className="d-flex gap-3 align-item-center justify-content-center">
              <p>Status:</p>
              <select
                className={completed}
                aria-label="Todo status options"
                onChange={handleChange}
              >
                <option value="Not completed">Not Completed</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="mt-5 d-flex justify-content-end gap-3">
              <button className="btn btn-success" onClick={handleEdit}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
