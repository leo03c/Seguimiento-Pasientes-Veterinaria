import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react"


function App() {
  
  const [paciente, setPaciente] = useState([ ])

  return (
    <div className="mt-20 container mx-auto">
      <Header></Header>
      <div className=" mt-12 md:flex">
        <Formulario
          paciente = {paciente}
          setPaciente = {setPaciente} 
        ></Formulario>
        <ListadoPacientes
          paciente = {paciente}
        ></ListadoPacientes>
      </div>
    </div>
  )
}

export default App
