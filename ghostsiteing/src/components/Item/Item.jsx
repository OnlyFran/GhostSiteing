import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Item = memo(

  ({prod}) => {
    
  return (
    <div className="card">
        <img src={prod.imagen} className="card-img-top carts-objetos" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.nombre}</h5>
          <p className="card-text">{prod.descripcion}</p>
          <p className="card-text">{prod.stock}</p>
          <Link to={`/detalle/${prod.id}`} className="btn btn-primary">¡Lo quiero!</Link>
        </div>
      </div>
    );
  }
) 

export default Item