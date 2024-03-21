import { useEffect, useState } from "react";

const Filter = (Props) => {
  const [filter, setfilter] = useState("All");
  function handleChange(event) {
    const { value } = event.target;
    setfilter(value);
  }
  useEffect(() => {
    Props.filterval(filter);
  }, [filter]);

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
                    onChange={handleChange}
                  >
                    <option value="All">All</option>
                    <option value="completed">Completed</option>
                    <option value="Not completed">Not Completed</option>
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
