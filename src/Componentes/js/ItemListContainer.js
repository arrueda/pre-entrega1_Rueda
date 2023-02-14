import React from 'react';
import '../css/ItemListContainer.css';

function Saludos(props) {
  return (
    <div className='contenedor-saludos'>
      <img
      className='saludos-imagen'
      src={require(`../images/testimonio-${props.imagen}.png`)}
      alt='Foto' />
      <div>
        <p className='saludo-nombre'>Te saluda {props.nombre} en {props.idioma}</p>
        <p className='saludo-texto'>{props.texto}</p>
      </div>
    </div>
    
  )
};

export default Saludos;