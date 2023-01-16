import React from 'react';
import '../App.css';
import logo from './third.png';

export default function Nav() {
  return (
    <div className='nav'>
      <img className='logo' src={logo} width='100' height='50'></img>
    </div>
  );
}
