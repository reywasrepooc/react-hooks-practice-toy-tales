import React, { useState } from "react";

function ToyForm({ onClickSubmit }) {
const [toyForm, setToyForm] = useState({
  name: "",
  image: "",
  likes: 0
})

const handleChange = (event) => {
  setToyForm({
    ...toyForm, [event.target.name]: event.target.value
  })
}

const handleSubmitClick = (event) => {
event.preventDefault() 
  onClickSubmit(toyForm)
    }
      

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmitClick}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={toyForm.name}
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={toyForm.image}
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
