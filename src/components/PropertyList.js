import React from 'react';
import PropertyCard from './PropertyCard';
import properties from '../assets/sample-properties.json';

function PropertyList({ addToCart, filters }) {
  const filteredProperties = properties.filter(property => 
    property.location.includes(filters.location) &&
    property.price >= filters.priceRange[0] &&
    property.price <= filters.priceRange[1] &&
    property.bedrooms >= filters.bedrooms
  );

  return (
    <div className="property-list">
      {filteredProperties.map(property => (
        <PropertyCard key={property.id} property={property} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default PropertyList;