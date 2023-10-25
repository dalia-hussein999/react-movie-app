import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./banner.css";

const Banner = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const url =  `https://api.themoviedb.org/3/movie/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`;
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      
  }, [url]);
  

 if (error) {
    return <div>Error</div>;
  }

  if (! movie) {
    return null;
  }
  return (
    <header>
      <figure className="banner-container">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="banner" className="banner-image" />
        <div className="overlay">
            <div className="overlay-content">
            <h3>{movie.release_date}</h3>
            <h1>{movie.original_title ? movie.original_title : movie.original_name}</h1>
            <p>{movie.overview}</p>
                
            </div>
            
        </div>
        <figure className='profile'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='profile' />
      </figure>
      </figure>
      

    </header>
  );
}

export default Banner;
