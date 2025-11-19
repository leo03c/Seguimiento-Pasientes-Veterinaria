import {useState, useEffect} from "react"
import Error from "./Error"

function Formulario({paciente , setPaciente}) {
  
  const [ nombre, setNombre ] = useState('');
  const [ nombrePro, setNombrePro ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ alta, setAlta ] = useState('');
  const [ sintomas, setSintomas ] = useState('');
  const [ error, setError ] = useState(false);


  function validar (e){
    e.preventDefault()
    // Validacion
    if([nombre,nombrePro,email,alta,sintomas].includes('')){
      console.log("Hay algun compo vacio")
      setError(true)
      return
    }
    
   setError(false)
  
   const objetoPaciente = {
      nombre,
      nombrePro,
      email,
      alta,
      sintomas
    }

    setPaciente([... paciente, objetoPaciente])
    // Reiniciar el Formulario
    setAlta('')
    setEmail('')
    setNombre('')
    setNombrePro('')
    setSintomas('')

    
  }
  
 
  return (
    
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h1 className="font-black text-3xl text-center">Seguimento Pasientes</h1>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      onSubmit={validar}>
        {error && <Error mensaje = 'Todos los campos son obligatorios'></Error> }
        <div className="mb-5">
       
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input type="text" id="mascota"
          placeholder="Nombre de la Mascota"
          className="w-full p-2 mt-2 border-2 placeholder-gray-400 rounded-md"
          value = {nombre}
          onChange = {(e)=> setNombre(e.target.value)}
          />
          
        </div>
        <div className="mb-5">
       
          <label htmlFor="propirtario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input type="text" id="propirtario"
          placeholder="Nombre del Propietario"
          className="w-full p-2 mt-2 border-2 placeholder-gray-400 rounded-md"
          value={nombrePro}
          onChange = {(e)=> setNombrePro(e.target.value)}
          />
       
        </div>
        <div className="mb-5">
       
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input type="email" id="email"
          placeholder="Email Contacto del Propietario"
          className="w-full p-2 mt-2 border-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange = {(e)=> setEmail(e.target.value)}/>
       
        </div>
        <div className="mb-5">
       
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input type="date" id="alta"
          className="w-full p-2 mt-2 border-2 placeholder-gray-400 rounded-md"
          value={alta}
          onChange = {(e)=> setAlta(e.target.value)}/>
       
        </div>
        <div className="mb-5">
       
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea name="" id="sintomas" 
          placeholder="Describe los Sintomas"
          className="w-full p-2 mt-2 border-2 placeholder-gray-400 rounded-md"
          value={sintomas}
          onChange = {(e)=> setSintomas(e.target.value)}
          ></textarea>
       
        </div>

        <input type="submit" value="Agregar Paciente" 
        className="bg-indigo-600 rounded-lg w-full p-3 text-white uppercase font-bold 
        hover:bg-indigo-700 cursor-pointer transition-colors "/>
      </form>

 
    </div>
  )
}

export default Formulario

