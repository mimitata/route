import React, { useState } from 'react';

const Addmovie = ({onAddMovie}) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };
  const handleAddMovie = () => {
    onAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };
  return (
    <div>
    <h2>Add a New Movie</h2>
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={newMovie.title}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="description"
      placeholder="Description"
      value={newMovie.description}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="posterURL"
      placeholder="Poster URL"
      value={newMovie.posterURL}
      onChange={handleInputChange}
    />
    <input
      type="number"
      name="rating"
      placeholder="Rating"
      value={newMovie.rating}
      onChange={handleInputChange}
    />
    <button onClick={handleAddMovie}>Add Movie</button>
  </div> 
  )
}

export default Addmovie