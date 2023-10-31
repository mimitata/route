import React, { useState } from 'react';

function Filter({ onFilterChange }) {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      title: titleFilter,
      rating: parseFloat(ratingFilter),
    });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
}

export default Filter;