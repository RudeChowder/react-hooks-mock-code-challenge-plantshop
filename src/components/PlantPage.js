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
      />
    </main>
  );
}

export default PlantPage;
