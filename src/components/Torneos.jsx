import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import partidosJSON from '../utils/matches.json'
import torneosJSON from '../utils/torneos.json'

function Torneos() {
    const partidos = partidosJSON
    const torneos = torneosJSON
    const [ id, setId ] = useState(0)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ currentTorneo, setCurrentTorneo ] = useState({})

    useEffect(()=>{
        const path = '/titulo/'
        const url = window.location.pathname
        console.log(partidos);
        console.log(url.substring(url.indexOf(path)+(path.length)))
        setId(url.substring(url.indexOf(path)+(path.length)))
        console.log(id);
    },[partidos])

    useEffect(()=>{
        setCurrentTorneo(torneos.filter(t=>t.id==id)[0])
        console.log('torneo',currentTorneo)
    },[id])

    return (
        <div className="container">
            {isLoading?<div>CARGANDO</div>:
            <div className='txt-trofeo text-center mb-3'>
                <div className="row g-0">
                    {currentTorneo?
                    <div className="col-md-4">
                        <Link to={`/titulo/`+currentTorneo.id}><img src={currentTorneo.imagen} className="img-fluid rounded-start torneo-img p-3" alt={currentTorneo.nombre} /></Link>
                    </div>
                    :''}
                
                    <div className="col-md-8">
                        <div className="card-body">
                            <ul className="list-group">
                            { partidos? partidos.filter(p=>p.torneo_id==id).map(
                                partido => {
                                    return (
                                        <Link to={`/partido/`+partido.id} className="list-group-item" aria-current="true" key={partido.id} torneoid={partido.torneo_id} partidoid={partido.id} >
                                            <div className="d-flex w-100 justify-content-between txt-trofeo">
                                                <h5 className="mb-1">{partido.localia=='L'?"Argentina "+partido.resultado+" "+partido.vs:partido.vs+" "+partido.resultado+" Argentina"}</h5>
                                                <small>{partido.fecha}</small>
                                            </div>
                                        </Link>
                                    )
                            }) :''}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Torneos