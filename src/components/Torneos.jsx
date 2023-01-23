import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { API_URL } from '../config';
import { fetchData } from '../utils/extraFunctions';
import torneosJSON from '../utils/tournaments.json'
import partidosJSON from '../utils/matches.json'

function Torneos() {
    const [ id, setId ] = useState(0)
    const [ torneo, setTorneo ] = useState({})
    const [ partidos, setPartidos ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    
    
    useEffect(()=>{
        const path = '/torneos/'
        const url = window.location.pathname
        setId(url.substring(url.indexOf(path)+(path.length)))
    },[])
    
    useEffect(()=>{
        if(id!==0){
            fetchData(`${API_URL}torneos/${id}`, setTorneo, torneosJSON)
        }
    },[id])

    useEffect(()=>{
        if(id!==0){
            if(!Array.isArray(torneo)){
                fetchData(`${API_URL}torneos/${id}/partidos`, setPartidos, partidosJSON)
                setIsLoading(false)
            } else {
                setTorneo(torneo.find(t => t.id == id))
            }
        }
    },[torneo])

    useEffect(()=>{
        // hago esto por me bajan la bbdd
        if(partidos.length>8){
            setPartidos(partidos.filter(p => p.torneo_id == id))
        }
    },[partidos])

    console.log('id', id);
    console.log('torneo', torneo)
    console.log('isArray', Array.isArray(torneo))

    return (
        <div className="container">
            {isLoading?<div>CARGANDO...</div>:
            <div className='txt-trofeo text-center mb-3'>
                <div className="row g-0">
                    {torneo?
                    <div className="col-md-4">
                        <Link to={`/torneos/`+id}>
                            <img
                                src={torneo.imagen}
                                className="img-fluid rounded torneo-img p-3"
                                alt={torneo.nombre} />
                        </Link>
                    </div>
                    :''}
                
                    <div className="col-md-8">
                        <div className="card-body my-3 mx-0 my-md-0 mx-md-3">
                            <ul className="list-group">
                            { partidos? partidos.map(
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