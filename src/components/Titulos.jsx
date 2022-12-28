import { useEffect } from 'react'
import Titulo from './Titulo'


function Titulos() {

  const competiciones = [
    {
        "id": 1,
        "torneo": "Copa América 2021",
        "imagen": "/images/competiciones/logo_CopaAmerica2021.png",
        "trofeo": "/images/trofeos/trofeo_CopaAmerica.png",
        "link": "/titulo/1"
    },{
        "id": 2,
        "torneo": "Copa de Campeones Conmebol-UEFA 2022",
        "imagen": "/images/competiciones/logo_Finalissima2022.png",
        "trofeo": "/images/trofeos/trofeo_Finalissima.png",
        "link": "/titulo/2"
    },{
        "id": 3,
        "torneo": "Copa del Mundo 2022",
        "imagen": "/images/competiciones/logo_WorldCup2022.png",
        "trofeo": "/images/trofeos/trofeo_WorldCup.png",
        "link": "/titulo/3"
    }
  ]

  // esto se ejecuta apenas carga la página
  useEffect(()=>{
    // setCompeticiones(competicionesJSON)
    // async function fetchData() {
    //   const response = await fetch(competicionesJSON)
    //   const data = await response.json()
    //   setLoading(false)
    //   setCompeticiones(data.results)
    // }
    // fetchData()
    console.log(competiciones)
  },[])

  return (
    <article className="container">
        <div className="row">
          { competiciones ? competiciones.map(c => {
                return (
                  <div key={c.id} className='col-md-4'>
                    <Titulo torneo={c.torneo} imagen={c.trofeo} link={`/titulo/`+c.id} />
                  </div>
                )
                })
          :''}
        </div>
    </article>
  )
}

export default Titulos