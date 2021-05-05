import React from 'react';
import { movies } from '../data';


const Movies = () => {
  const movieRender = movies.map(movie => {
    const genreLi = movie.genres.map(genre => <li key={movie.title + genre}>{genre}</li>)
    return (
      <div key={movie.title}>
        <h4>{movie.title}</h4>
        <p>Runtime: {movie.time} minutes</p>
        <ul>
          <li>Genres:</li>
          {genreLi}
        </ul>
        <br></br>
        <br></br>
      </div>
    )
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {movieRender}
    </div>
  );
};

export default Movies;
