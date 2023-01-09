import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import torneosJSON from '../utils/torneos.json'
import partidosJSON from '../utils/matches.json'
import flagsJSON from '../utils/flags.json'
import { getCode, getFormation } from '../utils/extraFunctions.js'


function Partido({partidoid, torneoid}) {
    const partidos = partidosJSON
    const torneos = torneosJSON
    const [ id, setId ] = useState(0)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ torneo, setTorneo ] = useState({})
    const [ partido, setPartido ] = useState({})
    const [ isLocal, setIsLocal ] = useState(true)
    const [ vsCode, setVsCode ] = useState('ar')
    const [ formation, setFormation ] = useState('')
    const videoURL = 'https://drive.google.com/file/d/'
    const pelota = '⚽'
    const convierte = '✔️'
    const pifia = '❌'

    useEffect(()=>{
        const path = '/partido/'
        const url = window.location.pathname
        setId(url.substring(url.indexOf(path)+(path.length)))
    },[partidos])

    useEffect(()=>{
        setPartido(partidos?.filter(p=>p.id==id)[0])
    },[id])

    useEffect(()=>{
        setTorneo(torneos?.filter(t=>t.id==partido?.torneo_id)[0])
        setIsLocal(partido?.localia=='L'?true:false)
        setVsCode(getCode(partido?.vs, flagsJSON))
        setFormation(getFormation(partido))
        setIsLoading(false)
    },[torneos,partido])

    // console.log('LINK', getFormation(partido));

    return (
        <div className="container">
            {isLoading?<div>CARGANDO</div>:
            <div className='txt-trofeo mb-3'>
                <div className="row g-0">
                    {torneo?
                    <div className="col-sm-12 col-md-4 text-center">
                        <Link to={`/titulo/`+torneo.id}>
                            <img 
                                src={torneo.imagen} 
                                className="img-fluid rounded-start torneo-img p-3" 
                                alt={torneo.nombre} />
                        </Link>
                        <img
                            className='img-fluid my-3' 
                            src={`/images/competiciones/formaciones/${formation}.svg`}
                            alt="Formación" />
                    </div>
                    :''}
                
                    <div className="col-sm-12 col-md-8">
                        <h5 className="mb-1 text-center">{partido?.instancia} - {partido?.fecha}</h5>
                        <h5 className="mb-1 text-center">
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

                            <div className="row"><p className="text-center">Goles</p></div>
                            <div className="col-12 col-md-6">
                            {partido?.goles?.local? 
                                partido.goles.local.map(gol=>{
                                    return(
                                    <div key={(gol.autor?gol.autor:'')+(gol.minuto?gol.minuto:'')} 
                                        className="text-start txt-goles">{gol.autor? pelota:''} {gol.autor} {gol.minuto?gol.minuto+`'`:''}
                                    </div>)
                                })
                            :''}
                            </div>
                            <div className="col-12 col-md-6">
                            {partido?.goles?.visitante? 
                                partido.goles.visitante.map(gol=>{
                                    return(
                                    <div key={(gol.autor?gol.autor:'')+(gol.minuto?gol.minuto:'')} 
                                        className="text-end txt-goles">{gol.autor} {gol.minuto?gol.minuto+`'`:''} {gol.autor? pelota:''}
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