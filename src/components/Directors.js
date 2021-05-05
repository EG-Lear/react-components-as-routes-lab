import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsRender = directors.map(director => {
    const moviesLi = director.movies.map(movie => <li key={director.name + movie}>{movie}</li>)
    return(
      <div key={director.name}>
        <h4>{director.name}</h4>
        <ul>
          {moviesLi}
        </ul>
        <br></br>
        <br></br>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsRender}
    </div>
  );
}

export default Directors
