import React, {useState} from "react";

function ToyForm({toys, handleNewToy}) {
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");


  function handleToyName(event){  
   setToyName(event.target.value);
  }

  function handleToyImage(event){
  setToyImage(event.target.value);
  }
  
  function handleToySubmit(event){
    event.preventDefault();
    setToyName("")
    setToyImage("");

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({
        name: toyName,
        image: toyImage,
        likes: 0,
      }),
      })
      .then ((res) => res.json())
      .then ((toyObj) => handleNewToy(toyObj)) 
      


  }
 


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleToySubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={handleToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImage}
          onChange={handleToyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
