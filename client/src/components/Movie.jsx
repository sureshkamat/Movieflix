import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';


export const Movie = ({ movie }) => {
    return (

        <Link to={`/details/${movie.imdbID}`}>

            <div className='movieCard'>

                <img src={movie.Poster} alt={movie.Title} />

                <p>{movie.Title}</p>

            </div>
        </Link>
    );
};