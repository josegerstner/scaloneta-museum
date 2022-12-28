import React from 'react'
import { Link } from "react-router-dom";

function Titulo({torneo, imagen, link}) {
  return (
    <Link to={link} className="text-center txt-trofeo">
        <img src={imagen} className="trofeo rounded-circle bg-white img-fluid" alt={torneo} />
        <p className='row'><span className=''>{torneo}</span></p>
    </Link>
  )
}

export default Titulo