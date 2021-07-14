import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, onClickDelete, onClickLike }) {

  const toySpecificDetails = toyList.map(toy => (
    <ToyCard 
   toy={toy}
   key={toy.id}
   onClickDelete={onClickDelete}
   onClickLike={onClickLike}
      />

  ))

  return (
    <div id="toy-collection">
      {toySpecificDetails}
    </div>
  );
}

export default ToyContainer;
