const Filter = () => {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="d-flex justify-content-between">
          <p className="lead filterpara">My Todos</p>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-5 text-end">
                  <p>Status Filter:</p>
                </div>
                <div className="col-7">
                  <select
                    className="form-select bg-danger"
                    aria-label="Todo status options"
                  >
                    <option selected>All</option>
                    <option value="Completed">Completed</option>
                    <option value="Notcompleted">Not Completed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
