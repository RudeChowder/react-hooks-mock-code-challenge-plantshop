import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant }) {
  const plantComponents = plants.map( plant => {
    return(
      <PlantCard 
        key={plant.id}
        id={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        onDeletePlant={onDeletePlant}
      />
    )
  })

  return (
    <ul className="cards">{plantComponents}</ul>
  );
}

export default PlantList;
