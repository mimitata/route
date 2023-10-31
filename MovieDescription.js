import React from 'react'
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({movies}) => {  
  const param=useParams()
  const find=movies.find(el=>el.title==param.id)
  return (
    <div>
    <h2>{find.title}</h2>
    <p>{find.description}</p>
    <iframe
      width="560"
      height="315"
      src={find.trailerLink}
      title="Movie Trailer"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
    <Link to="/">Back to Home</Link>
  </div>
  )
}

export default MovieDescription