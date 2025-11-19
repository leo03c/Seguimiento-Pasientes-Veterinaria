import Paciente from "./Paciente"

function ListadoPacientes({paciente}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-auto">
      <h2 className="text-3xl font-black text-center">Listado pacientes</h2>
      <p className="mt-5 text-center text-xl mb-10">
        Administra tus <span className="text-indigo-600 font-bold ">Pacientes</span>
      </p>
      {paciente.map( (paciente, i) => (
        <Paciente
          key={i}
          paciente ={paciente}
        ></Paciente>
      ))}
    </div>
  )
}

export default ListadoPacientes
