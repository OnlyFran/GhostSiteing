import React from 'react'
import { Link } from 'react-router-dom'

const BackToMenu = () => {
  return (
    <>
    <Link to={'/'}>
        <button className="btn btn-outline-success">Volver Al Menu</button>
    </Link>        
    </>
  )
}

export default BackToMenu