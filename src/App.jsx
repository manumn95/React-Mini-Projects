import { useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Form from "./components/Forms";

function App() {
  const [todo, settodo] = useState([]);

  function addNote(newNotes) {
    settodo((preVal) => {
      return [...preVal, newNotes];
    });
  }

  function onDelete(id) {
    settodo((preVal) => {
      return preVal.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Form onAdd={addNote}></Form>
      <Filter></Filter>
      <div className="container">
        <div className="row">
          {todo.map((notesItem, index) => {
            return (
              <div key={index} className="col-md-4">
                <Cards
                  key={index}
                  id={index}
                  title={notesItem.title}
                  desc={notesItem.description}
                  onDelete={onDelete}
                ></Cards>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
