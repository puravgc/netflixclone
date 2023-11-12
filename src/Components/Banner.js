import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./Axios"
import requests from "./Request"
const Banner = () => {
  function truncate(string,n){
    return( string.length>n?string.substr(0,n-1)+"...":string)
  }
  const [movie, setmovie] = useState([])

  useEffect(() => {
  async function fetchdata(){
    const request = await axios.get(requests.fetchNetflixOriginals)
    setmovie(
      request.data.results[
        Math.floor(Math.random()*request.data.results.length-1)
      ]
    )
    return request
  }
  fetchdata()
  }, [])
  return (
    <div className='banner' style={{
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
    }}>
      <div className='contents'>
        <h1>{movie.name}</h1> 
        <div className='buttons'>
        <button><img src = "https://www.transparentpng.com/thumb/play-button/MF743g-play-button-amazing-image-download.png"/>Play</button>
        <button><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png"/>More Info</button>
      </div>
      <div className='description'>
        {truncate(`${movie.overview}`,250)}
        </div>   
      </div>  
      <div className='fade'></div> 
    </div>
  )
}

export default Banner