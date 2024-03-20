const Cards = (Props) => {
  function handleDelete() {
    Props.onDelete(Props.id);
  }

  return (
    <div>
      <div className="container card-container mt-3">
        <div
          className="card card-div bg-opacity-50 bg-warning text-bg-light"
          style={{ width: "20rem" }}
        >
          <div className="card-body ">
            <p>
              Name:<span className="text-white"> {Props.title}</span>
            </p>
            <p>
              Description:<span className="text-white"> {Props.desc}</span>{" "}
            </p>
            <div className="d-flex gap-3 align-item-center justify-content-center">
              <p>Status:</p>
              <select
                className="form-select bg-danger"
                aria-label="Todo status options"
              >
                <option value="Notcompleted">Not Completed</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="mt-5 d-flex justify-content-end gap-3">
              <button className="btn btn-success">Edit</button>
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
