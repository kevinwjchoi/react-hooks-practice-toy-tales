import React, {useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {
  const [selectedToy, setSelectedToy] = useState([]);

  const updatedToyListArray = toys.filter((toy) => {
    if(toy.id !== selectedToy) return true;  })

  const arrayOfToys = updatedToyListArray.map((toy) => {
     return <ToyCard name={toy.name} key={toy.id} image={toy.image} likes={toy.likes} id={toy.id} setSelectedToy={setSelectedToy} handleUpdatedToyLikes={handleUpdatedToyLikes}/>
    })  
  
  function handleUpdatedToyLikes(selectedToy){
    const updatedLikeList = toys.map((toy) => {
      if (toy.id === selectedToy.id) return selectedToy

      return toy;
    })
    setToys(updatedLikeList);
  }
  
  return (
    <div id="toy-collection">{arrayOfToys}</div>
  );
}

export default ToyContainer;
