import axios from './Axios';
import React, { useEffect, useState } from 'react';
import requests from './Request';
import "./Row.css"
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {   
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        console.log(request.data.results);
    }

    fetchdata();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='content'>
        {movies.map((movie) => (
          <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default Row;
