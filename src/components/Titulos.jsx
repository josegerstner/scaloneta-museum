import { useEffect, useState } from 'react'
import { API_URL } from '../config.js'
import Titulo from './Titulo.jsx'
import torneosJSON from '../utils/tournaments.json'
import { fetchData } from '../utils/extraFunctions.js'


function Titulos() {
  const [ titulos, setTitulos ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
    
  useEffect(()=>{
    fetchData(`${API_URL}titulos`, setTitulos, torneosJSON)
    setIsLoading(false)
  },[])

  console.log('torneos', titulos);
  return (
    <article className="container">
      {isLoading?
        <div>Cargando</div>
        :<div className="row">
          { titulos ? titulos.map(t => {
                return (
                  <div key={t.id} className='col-md-4'>
                    <Titulo id={t.id} torneo={t.torneo} imagen={t.trofeo} />
                  </div>
                )
                })
          :''}
        </div>
      }
    </article>
  )
}

export default Titulos