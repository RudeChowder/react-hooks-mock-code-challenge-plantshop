import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  
  const plantsURL = "http://localhost:6001/plants"

  useEffect(() => {
    fetch(plantsURL)
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
