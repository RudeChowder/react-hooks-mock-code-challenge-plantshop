import React, { useState } from "react";

function NewPlantForm({ onFormSubmit, plantsURL }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch(plantsURL, configObj)
      .then(resp => resp.json())
      .then(data => {
        onFormSubmit(data)
        alert(`${data.name} was successfully added!`)
        setFormData({
          name: "",
          image: "",
          price: ""
        })
      })
      .catch((reason) => alert(`Something went wrong! ${reason}`))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
