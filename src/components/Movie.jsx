import React from 'react'
import './movie.css';


function Movie({image,title,genre,released,duration,description,calification}) {
  return (
    <div className='movie-container'>
        <div className='image-continer'>
        <img src={image}  className='image'/>
        </div>
        <div className='info-container'>
        <h1 className='title'>{title}</h1>
        <strong className='genre'>Genre: {genre}</strong>
        <p className='duration'>duration: {duration}</p>
        <p className='duration'>released: {released}</p>
        <p className='description'>{description}</p>
        <strong className='calification'>calification: {calification}</strong>
        </div>
    </div>
  )
}

export default Movie