import { useEffect, useState } from 'react'
import { API_URL } from '../config.js'
import Titulo from './Titulo.jsx'


function Titulos() {
  const [ titulos, setTitulos ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  async function fetchTitulos() {
      const response = await fetch(`${API_URL}torneos`)
      const data = await response.json()
      setTitulos(data)
      setIsLoading(false)
  }

  useEffect(()=>{
    fetchTitulos()
  },[])

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