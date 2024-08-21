import React, { useState } from 'react';

function Filters({ updateFilters }) {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [bedrooms, setBedrooms] = useState(0);

  const handleFilterChange = () => {
    updateFilters({ location, priceRange, bedrooms });
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
      />
      <select value={bedrooms} onChange={(e) => setBedrooms(parseInt(e.target.value))}>
        <option value="0">All</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4+ Bedrooms</option>
      </select>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
}

export default Filters;