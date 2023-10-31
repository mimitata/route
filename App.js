import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './style.css';
import Addmovie from './Addmovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDescription from './MovieDescription';
function App() {
  const [movies, setMovies] = useState([
    {
      title: 'titanic',
      description: 'Le paquebot Titanic mesurait 269 mètres de long et 28 mètres de large et possédait une passerelle de navigation de 22 mètres',
      posterURL: 'https://gumlet.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2021%2F02%2FTitanic-and-12-best-Meet-Cutes_Lead.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true',
      rating: 4.8,
    },
    {
      title: 'the old guard',
      description: 'A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered',
      posterURL: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABekijdwSSKpmgY-tRTGq6Vl0X7D00BcXu2jPriJgVMD3cUcc4WdshBuLbMQPc997jMQwI1peMmMCTdS-kNCVv0p2hjmjgqe9wBGX.jpg?r=70a',
      rating: 4.4,
    },
    {
      title: 'hunger games',
      description: 'Synopsis. The nation of Panem is divided into 12 districts, ruled from the Capitol. As punishment for a failed revolt',
      posterURL: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/The-Hunger-Games-Movies-in-Order.jpg',
      rating: 3.7,
    },
    {
      title: 'dark desire',
      description: 'Married Alma spends a fateful weekend away from home that ignites passion, ends in tragedy and leads her to question the truth about those close to her. Watch all you want.',
      posterURL: 'https://cdn.whats-on-netflix.com/wp-content/uploads/2020/08/14094448/dark-desire-season-2-netflix.jpg',
      rating: 4.0,
    },
    {
      title: 'Nowhere',
      description: 'The plot follows a pregnant woman separated from her husband while trying to flee the country to Ireland. She then finds herself trying to survive inside a shipping container in the heart of the sea.',
      posterURL: 'https://i.ytimg.com/vi/d1S4KldJzTs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuCpXPhYXUt0pJuyZEprjIc7u4_A',
      rating: 4.9,
    },
    {
      title: 'À contre-sens',
      description: 'Description for Movie 6',
      posterURL: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dd042466518894cdb3848a017422df924f4fd6d92dbe6dc253423ff690e1da15._RI_TTW_SX720_FMjpg_.jpg',
      rating: 3.5,
    },
    
  ]);

  const [filteredMovies, setFilteredMovies] = useState([...movies]);
  const handleFilterChange = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        (title === '' || movie.title.toLowerCase().includes(title.toLowerCase())) &&
        (isNaN(rating) || movie.rating >= rating)
      );
    });
    setFilteredMovies(filtered);
  };
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies(movies)
  };
  return (
    <div className="app">
      <h1>Movie App</h1>
     
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <>
              <Addmovie onAddMovie={addMovie} />
         <Filter onFilterChange={handleFilterChange} />
          <MovieList movies={filteredMovies} /></>
      }>
         
        </Route>
        <Route path="/movies/:id" element={<MovieDescription movies={movies}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

