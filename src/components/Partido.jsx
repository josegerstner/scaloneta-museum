import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../config'
import flagsJSON from '../utils/flags.json'
import { fetchData, getCode, getFormation } from '../utils/extraFunctions.js'


function Partido({partidoid, torneoid}) {
    const [ id, setId ] = useState(0)
    const [ torneo, setTorneo ] = useState({})
    const [ partido, setPartido ] = useState({})
    const [ goles, setGoles ] = useState([])
    const [ penales, setPenales ] = useState([])
    const [ vsCode, setVsCode ] = useState('ar')
    const [ formation, setFormation ] = useState('cancha')
    const [ isLocal, setIsLocal ] = useState(true)
    const [ isLoading, setIsLoading ] = useState(true)
    const videoURL = 'https://drive.google.com/file/d/'
    const pelota = '⚽'
    const convierte = '✔️'
    const pifia = '❌'

    useEffect(()=>{
        const path = '/partido/'
        const url = window.location.pathname
        setId(url.substring(url.indexOf(path)+(path.length)))
    },[])

    useEffect(()=>{
        if(id!==0) {
            fetchData(`${API_URL}partidos/${id}`, setPartido)
            fetchData(`${API_URL}partidos/${id}/goles`, setGoles)
            fetchData(`${API_URL}partidos/${id}/penales`, setPenales)
        }
    },[id])

    useEffect(()=>{
        if(partido) {
            fetchData(`${API_URL}torneos/${partido.torneo_id}`, setTorneo)
            setIsLocal(partido?.localia=='L'?true:false)
            setVsCode(getCode(partido?.vs, flagsJSON))
            setFormation(getFormation(partido))
            setIsLoading(false)
        }
    },[partido])


    console.log('goles', goles);
    console.log('penales', penales);

    return (
        <div className="container">
            {isLoading?<div>CARGANDO</div>:
            <div className='txt-trofeo mb-3'>
                <div className="row g-0">
                    {torneo?
                    <div className="col-sm-12 col-md-4 text-center">
                        <Link to={`/torneos/`+torneo.id}>
                            <img 
                                src={torneo.imagen} 
                                className="img-fluid rounded torneo-img p-3" 
                                alt={torneo.nombre} />
                        </Link>
                        <img
                            className='img-fluid my-3' 
                            src={`/images/competiciones/formaciones/${formation}.svg`}
                            alt="Formación" />
                    </div>
                    :''}
                
                    <div className="col-12 col-md-8">
                        <h5 className="mb-1 text-center">{partido?.instancia} - {partido?.fecha}</h5>
                        <h5 className="m-3 text-center txt-trofeo">
                            {<img
                                src={`https://flagcdn.com/24x18/${isLocal?'ar':vsCode}.png`}
                                srcSet={`https://flagcdn.com/48x36/${isLocal?'ar':vsCode}.png 2x,
                                    https://flagcdn.com/72x54/${isLocal?'ar':vsCode}.png 3x`}
                                width="24"
                                height="18"
                                alt={isLocal?'Argentina':partido?.vs} />
                            }{isLocal?
                                " Argentina "+partido?.resultado+" "+partido?.vs+" "
                                :
                                " "+partido?.vs+" "+partido?.resultado+" Argentina "
                            }{<img
                                src={`https://flagcdn.com/24x18/${!isLocal?'ar':vsCode}.png`}
                                srcSet={`https://flagcdn.com/48x36/${!isLocal?'ar':vsCode}.png 2x,
                                    https://flagcdn.com/72x54/${!isLocal?'ar':vsCode}.png 3x`}
                                width="24"
                                height="18"
                                alt={!isLocal?'Argentina':partido?.vs} />
                            }
                        </h5>
                        <div className="container row text-center mx-auto">
                            <div className="col-12">
                            {goles?
                                goles.map(gol=>{
                                    return(
                                    <div key={(gol.autor?gol.autor:'')+(gol.minuto?gol.minuto:'')} 
                                        className={`text-${gol.localia=='L'?'start':'end'} txt-goles`}>
                                            {gol.localia=='L'? pelota:''} {gol.autor} {gol.minuto?gol.minuto+`'`:''} {gol.situacion?`(${gol.situacion})`:''} {gol.localia=='V'? pelota:''}
                                    </div>)
                                })
                            :''}
                            </div>
                            <div className="col-12">
                            {penales?
                                <h3 className='mt-5'>Tanda de penales</h3>
                            :''}
                            {penales?
                                penales?.map(penal=>{
                                    return(
                                    <div key={(penal.autor?penal.autor:'')} 
                                        className={`text-${penal.localia=='L'?'start':'end'} txt-goles`}>
                                            {penal.localia=='L'? penal.convierte?convierte:pifia:''} {penal.autor} {penal.localia=='V'? penal.convierte?convierte:pifia:''}
                                    </div>)
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