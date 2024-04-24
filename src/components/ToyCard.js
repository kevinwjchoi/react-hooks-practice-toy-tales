import React, {useEffect, useState} from "react";

function ToyCard({name, image, likes, id, setSelectedToy, handleUpdatedToyLikes}) {
const [likeCounts, setLikeCounts] = useState(likes);

  function handleDeleteToy(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(),
    })
    .then((res) => res.json())
    .then(() => setSelectedToy(id));
  }

  function handleLikeButton(){
    console.log(id);
      fetch(`http://localhost:3001/toys/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          likes: likes + 1,
        }),
      })
      .then((res) => res.json())
      .then((selectedToy) => handleUpdatedToyLikes(selectedToy));
  }  
  


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeButton}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
