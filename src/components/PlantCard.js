import React, { useState } from "react";

function PlantCard( { id, name, image, price } ) {
  const [isInStock, setIsInStock] = useState(true)

  const handleClick = () => {
    setIsInStock(false)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
