import React from 'react';

function PropertyCard({ property, addToCart }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p><strong>${property.price}/night</strong></p>
      <button onClick={() => addToCart(property)}>Book Now</button>
    </div>
  );
}

export default PropertyCard;