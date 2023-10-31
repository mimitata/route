import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom';


const MovieCard = ({movie}) => {
  const navigate=useNavigate()
    const { title, description, posterURL, rating } = movie;

  return (
    <div className='cartet'>
      <Card style={{ width: '18rem', height:550}}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body style={{display:'flex',flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}>
        <Card.Title><h3>{title}</h3></Card.Title>
        <Card.Text style={{textAlign:'center'}}>
        <h5>Description</h5> {description}<br></br>
        <h5>rating</h5> {rating}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/movies/${movie.title}`)}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-card">
        <h1>....</h1>
      </div>
    </Link>
      </div>
      
  )
}

export default MovieCard