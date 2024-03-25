const Cards = (Props) => {
  return (
    <div>
      <div className="container card-container mt-3">
        <div
          className="card card-div bg-opacity-50 bg-warning text-bg-light"
          style={{ minWidth: "100%", maxWidth: "100%" }}
        >
          <div className="card-body ">
            <p>
              Name:<span className="text-white">{Props.todo.taskName} </span>
            </p>
            <p>
              Description:
              <span className="text-white">{Props.todo.description} </span>
            </p>
            <div className="d-flex gap-3 align-item-center justify-content-center">
              <p>Status:</p>
              <select
                className={
                  Props.todo.status === "Completed"
                    ? "bg-success text-white"
                    : "bg-danger text-white"
                }
                value={Props.todo.status}
                name="status"
                onChange={(e) =>
                  Props.updateStatus(Props.todo.id, e.target.value)
                }
              >
                <option
                  value="Completed"
                  className={
                    Props.todo.status === "Completed" ? "bg-success" : ""
                  }
                >
                  Completed
                </option>
                <option
                  value="Not Completed"
                  className={
                    Props.todo.status !== "Completed"
                      ? "bg-danger text-white"
                      : ""
                  }
                >
                  Not Completed
                </option>
              </select>
            </div>
            <div className="mt-5 d-flex justify-content-end gap-3">
              <button
                className="btn btn-success"
                onClick={() => Props.editTodo(Props.todo.id)}
                type="button"
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => Props.deleteTodo(Props.todo.id)}
                type="button"
              >
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
