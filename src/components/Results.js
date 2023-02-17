import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import MovieCSS from './Movie.module.css'

export default function Results() {
   
    
    const [movies, setMovies] = useState ([]);
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const word = params.get('palabra');

    useEffect (() => {
        if (word.length >=3) {
            fetch(`https://api.themoviedb.org/3/search?api_key=d87c1b16903e53a32838c47af86924d8&q=${word}&language=en-US&page=1&include_adult=false`)
            .then ( res =>res.json())
            .then(data =>{
                setMovies (data.data);
            })
        }

    },[word])

  



  return (
    <div className={MovieCSS.containerMovie}>

    

    {movies.map((movie) => {
      return (
        <div className={MovieCSS.container} key={movie.id}>
          <img className={MovieCSS.imgposter} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" />
          <h4 className={MovieCSS.title} >{movie.original_title}</h4>
          <Link className={MovieCSS.link} to ={`/movies/${movie.id}`}>Movie Detail</Link>

        </div>
      );
    })}
    
    
  </div>
  )
}