import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '90px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'red',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className={'navbar'}>
      <NavLink to='/' style={link} activeStyle={{background: 'darkred'}}>Home</NavLink>
      <NavLink to='/movies' style={link} activeStyle={{background: 'darkred'}}>Movies</NavLink>
      <NavLink to='/directors' style={link} activeStyle={{background: 'darkred'}}>Directors</NavLink>
      <NavLink to='/actors' style={link} activeStyle={{background: 'darkred'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
