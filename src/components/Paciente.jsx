import React from 'react'

function Paciente({paciente}) {
  return (
    <div>
       <div className="bg-white shadow-md mx-5 my-7 px-5 rounded-xl py-10">
        <p className="text-gray-700 font-bold mb-3 uppercase">
          Nombre: <span className="normal-case font-normal">{paciente.nombre}</span>
        </p>
        <p className="text-gray-700 font-bold mb-3 uppercase">
          Propietario: <span className="normal-case font-normal">{paciente.nombrePro}</span>
        </p>
        <p className="text-gray-700 font-bold mb-3 uppercase">
          Email: <span className="normal-case font-normal">{paciente.email}</span>
        </p>
        <p className="text-gray-700 font-bold mb-3 uppercase">
          Fecha de Alta: <span className="normal-case font-normal">{paciente.alta}</span>
        </p>
        <p className="text-gray-700 font-bold mb-3 uppercase">
          Sintomas: <span className="normal-case font-normal">{paciente.sintomas}</span>
        </p>
      </div>
    </div>
  )
}

export default Paciente
