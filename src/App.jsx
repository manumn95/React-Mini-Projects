import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Not Completed");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("All");
  const [editMode, setEditMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);

  const addTodo = () => {
    if (taskName.trim() === "" || description.trim() === "") {
      return;
    }

    if (editMode) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, taskName, description, status };
        }
        return todo;
      });
      setTodos(updatedTodos);
      setEditMode(false);
      setEditTodoId(null);
    } else {
      const newTodo = {
        id: todos.length + 1,
        taskName,
        description,
        status: "Not Completed",
      };
      setTodos([...todos, newTodo]);
    }

    setTaskName("");
    setDescription("");
    setStatus("Not Completed");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: newStatus };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTaskName(todoToEdit.taskName);
      setDescription(todoToEdit.description);
      setStatus(todoToEdit.status);
      setEditMode(true);
      setEditTodoId(id);
    }
  };

  const filterTodos = () => {
    switch (filter) {
      case "Completed":
        return todos.filter((todo) => todo.status === "Completed");
      case "Not Completed":
        return todos.filter((todo) => todo.status === "Not Completed");
      default:
        return todos;
    }
  };

  return (
    <div>
      <div>
        <h1 className="display-1 text-center mt-5">MY ToDo</h1>
        <form>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control mt-5 p-2 "
                  name="title"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="col-md-5">
                <input
                  name="description"
                  className="form-control mt-5 p-2"
                  type="text"
                  placeholder="Todo Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></input>
              </div>
              <div className="col-md-2">
                <div className="d-grid">
                  <button
                    className="btn btn-success  p-2 rounded-2 mt-5"
                    type="button"
                    onClick={addTodo}
                  >
                    {editMode ? "Update Todo" : "Add Todo"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
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
                      value={filter}
                      name="filter"
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="All">All</option>
                      <option value="Completed">Completed</option>
                      <option value="Not Completed">Not Completed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            {filterTodos().map((todo) => (
              <div className="col-md-4" key={todo.id}>
                <Cards
                  todo={todo}
                  updateStatus={updateStatus}
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
