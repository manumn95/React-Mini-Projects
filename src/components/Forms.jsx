import { useEffect, useState } from "react";
import Filter from "./Filter";
import Cards from "./Cards";

const Forms = () => {
  const [id, setid] = useState(-1);
  const [notes, setnotes] = useState({
    title: "",
    description: "",
    status: "Not completed",
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

  const [todo, settodo] = useState([]);
  const [filtertodo, setfiltertodo] = useState([]);
  function addNote(event) {
    event.preventDefault();
    if (id === -1) {
      settodo([...todo, notes]);
    } else {
      todo[id] = notes;
      settodo([...todo]);
      setid(-1);
    }
    setnotes({
      title: "",
      description: "",
      status: "Not completed",
    });
  }

  function filterchange(filtervalue) {
    if (filtervalue === "completed") {
      setfiltertodo(todo.filter((item) => item.status === "completed"));
    } else if (filtervalue === "Not completed") {
      setfiltertodo(todo.filter((item) => item.status === "Not completed"));
    } else {
      setfiltertodo([...todo]);
    }
  }
  useEffect(() => {
    setfiltertodo(todo);
  }, [todo]);

  function editHandler(editId) {
    setnotes(todo[editId]);
    setid(editId);
  }
  function onDelete(id) {
    settodo(todo.filter((task, index) => index !== id));
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
      <Filter filterval={filterchange}></Filter>
      <div className="conatiner mx-5">
        <div className="row">
          {filtertodo.map((notes, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Cards
                  value={notes}
                  id={index}
                  key={index}
                  title={notes.title}
                  desc={notes.description}
                  onDelete={onDelete}
                  editHandler={editHandler}
                ></Cards>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Forms;
