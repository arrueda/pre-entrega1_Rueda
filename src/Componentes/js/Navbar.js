import React from 'react';
import frigidairesLogo from '../images/frigidaires_logo.png';
import carrito from '../images/carrito.png';
import '../css/navbar.css';

const Navbar = () => (
  <nav className='nav'>
    <div className='logo-frigidaires'>
      <img 
      className='logo-frigidaires-logo'
      src={frigidairesLogo}
      alt='Logo de FrigidAires'
      /> 
      <p className='logo-frigidaires-texto'>FrigidAires</p>
    </div>
    <ul className='navbar-menu'>
      <a href='#' className='navbar-menu-link'>Home</a>
      <a href='#' className='navbar-menu-link'>Comerciales</a>
      <a href='#' className='navbar-menu-link'>Exhibidoras</a>
      <a href='#' className='navbar-menu-link'>Freezers</a>
      <a href='#' className='navbar-menu-link'>Camara Figorificas</a>
    </ul>
    <div className='carrito-compras'>
        <img
        className='carrito-compras-img'
        src={carrito}
        alt='Imagen de carrito de compras' />
        <p className='carrito-compras-num'>5</p>
    </div>
  </nav>
);

export default Navbar;