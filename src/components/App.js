import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [updatedToyList, setUpdatedToyList] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then ((res) => res.json())
    .then ((toyObj) => setToys(toyObj))
  }, []);

  function handleNewToy(toyObj){
    
    setToys([...toys, toyObj]);

  }




  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} handleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} updatedToyList={updatedToyList} setToys={setToys} />
    </>
  );
}

export default App;

