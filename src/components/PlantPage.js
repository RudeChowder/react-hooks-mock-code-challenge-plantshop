import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  
  const plantsURL = "http://localhost:6001/plants"

  useEffect(() => {
    fetch(plantsURL)
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])

  const handleFormSubmit = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleDeletePlant = (id) => {
    const configObj = {
      method: "DELETE"
    }

    const result = window.confirm("Are you sure you'd like to delete this plant?")

    if ( result === true ) {
      fetch(`${plantsURL}/${id}`, configObj)
        .then(() => {
          const updatedPlants = plants.filter( plant => {
            return plant.id !== id
          })
          setPlants(updatedPlants)
        })
        .catch(() => alert("Failed to delete the plant. Please try again"))
    }
  }

  const plantsToDisplay = plants.filter( plant => {
      if ( search === "" ) {
        return true
      } else {
        return plant.name.toLowerCase().includes(search.toLowerCase())
      }
    })
  

  return (
    <main>
      <NewPlantForm 
        onFormSubmit={handleFormSubmit}
        plantsURL={plantsURL}
      />
      <Search 
        search={search}
        onSearchChange={handleSearchChange}
      />
      <PlantList 
        plants={plantsToDisplay}
        onDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
