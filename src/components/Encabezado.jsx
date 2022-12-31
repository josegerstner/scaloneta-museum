import React from 'react'
import { Link } from "react-router-dom";

function Encabezado() {
  return (
    <header className="bg-celeste">
        <h3 className='row py-md-4 py-2 anulo-gutter-x'></h3>
        <Link to='/'><img className='img-fluid' src="/images/scalonetamuseum.png" alt="header" /></Link>
        <h3 className='row py-md-4 py-2 anulo-gutter-x'></h3>
    </header>
  )
}

export default Encabezado