import React, { useEffect, useState } from 'react'
import torneosJSON from '../utils/torneos.json'
import partidosJSON from '../utils/matches.json'
import { Link } from 'react-router-dom'

function Partido({partidoid, torneoid}) {
    const partidos = partidosJSON
    const torneos = torneosJSON
    const [ id, setId ] = useState(0)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ torneo, setTorneo ] = useState({})
    const [ partido, setPartido ] = useState({})
    const videoURL = 'https://drive.google.com/file/d/'
    const pelota = '⚽'

    useEffect(()=>{
        const path = '/partido/'
        const url = window.location.pathname
        console.log(partidos);
        console.log(url.substring(url.indexOf(path)+(path.length)))
        console.log('partidoid',partidoid);
        console.log('torneoid',torneoid);
        setId(url.substring(url.indexOf(path)+(path.length)))
        console.log(id);
    },[partidos])

    useEffect(()=>{
        console.log(id);
        setPartido(partidos?.filter(p=>p.id==id)[0])
        console.log('partido',partido)
    },[id])

    useEffect(()=>{
        setTorneo(torneos?.filter(t=>t.id==partido?.torneo_id)[0])
        console.log('torneo',torneo)
    },[torneos,partido])

    return (
        <div className="container">
            {isLoading?<div>CARGANDO</div>:
            <div className='txt-trofeo mb-3'>
                <div className="row g-0">
                    {torneo?
                    <div className="col-sm-12 col-md-4 text-center">
                        <Link to={`/titulo/`+torneo.id}><img src={torneo.imagen} className="img-fluid rounded-start torneo-img p-3" alt={torneo.nombre} /></Link>
                    </div>
                    :''}
                
                    <div className="col-sm-12 col-md-8">
                        <h5 className="mb-1 text-center">{partido?.instancia} - {partido?.fecha}</h5>
                        <h5 className="mb-1 text-center">{partido?.localia=='L'?"Argentina "+partido?.resultado+" "+partido?.vs:partido?.vs+" "+partido?.resultado+" Argentina"}</h5>
                        <div className="container row">
                            <div className="col col-md-6">
                            {partido?.goles?.local? 
                                partido.goles.local.map(gol=>{
                                    return(<div key={(gol.autor?gol.autor:'')+(gol.minuto?gol.minuto:'')} className="text-start txt-goles">{gol.autor} {gol.minuto?gol.minuto+`'`:''}</div>)
                                })
                            :''}
                            </div>
                            <div className="col col-md-6">
                            {partido?.goles?.visitante? 
                                partido.goles.visitante.map(gol=>{
                                    return(<div key={(gol.autor?gol.autor:'')+(gol.minuto?gol.minuto:'')} className="text-end txt-goles">{gol.autor} {gol.minuto?gol.minuto+`'`:''}</div>)
                                })
                            :''}
                            </div>
                        </div>
                        
                            {partido?
                        <div className="row embed-responsive embed-responsive-16by9 p-3">
                            <iframe src={videoURL+partido.video+`/preview`} width="640" height="480" allowFullScreen></iframe>
                        </div>
                            :''}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Partido