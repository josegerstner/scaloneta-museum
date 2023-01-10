import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Encabezado from './components/Encabezado'
import Titulos from './components/Titulos'
import Torneos from './components/Torneos'
import Partido from "./components/Partido"
import { Footer } from "./components/Footer"

function App() {
  return (
    <Router>
      <Encabezado />
      <Routes>
        <Route path="/partido/:id" element={<Partido/>} />
        <Route path="/torneos/:id" element={<Torneos/>} />
        <Route index exact path="/" element={<Titulos />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
