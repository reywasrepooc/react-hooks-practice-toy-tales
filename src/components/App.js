import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(data => setToyList(data))
  }, [])

  const handleSubmit = (toyForm) => {
        fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(toyForm),
      })
      .then(response => response.json())
      .then(data => {
        setToyList([...toyList, data])
      })
  }

  const deleteToy = (id) => {
    const newToyList = toyList.filter(toy => toy.id !== id)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(setToyList(newToyList))
  }

  const handleLikes = (id, likes) => {
    const newToyCardObject = { likes: likes + 1 }
    fetch(`http://localhost:3001/toys/${id}`, {
      method:"PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newToyCardObject)
    })
    .then(response => response.json())
    .then(data => {
      const updatedList = toyList.map(toy => {
        if (toy.id === data.id) {
          return data
        } else {
          return toy
        }
      })
      setToyList(updatedList)
    })
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm onClickSubmit={handleSubmit} setToyList={setToyList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
      onClickLike={handleLikes}
      onClickDelete={deleteToy}
      setToyList={setToyList}
      toyList={toyList}
    />
    </>
  );
}

export default App;
