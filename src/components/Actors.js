import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsRender = actors.map(actor => {
    const moviesLi = actor.movies.map(movie => <li key={actor.name + movie}>{movie}</li>)
    return(
      <div key={actor.name}>
        <h4>{actor.name}</h4>
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
      <h1>Actors Page</h1>
      {actorsRender}
    </div>
  );
};

export default Actors;
