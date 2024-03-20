import { useState } from "react";

const Forms = (Props) => {
  const [notes, setnotes] = useState({
    title: "",
    description: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setnotes((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    Props.onAdd(notes);
    setnotes({
      title: "",
      description: "",
    });
    event.preventDefault();
    console.log(event.target);
  }

  return (
    <div>
      <h1 className="display-1 text-center mt-5">MY ToDo</h1>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <input
                type="text"
                placeholder="Title"
                className="form-control mt-5 p-2"
                name="title"
                value={notes.title}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-md-5">
              <input
                name="description"
                className="form-control mt-5 p-2"
                type="text"
                placeholder="Todo Description"
                value={notes.description}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-md-2">
              <div className="d-grid">
                <button
                  className="btn btn-success  p-2 rounded-2 mt-5"
                  type="button"
                  onClick={addNote}
                >
                  Add Todo
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms;
