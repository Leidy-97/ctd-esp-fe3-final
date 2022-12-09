import React,{useContext} from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  const { dentists,state } = useContext(ContextGlobal);
  const { id } = useParams();
  const dentist = dentists.find(dentist => dentist.id == id) || {}

  return (
    <div className={state.theme}>
      <h1>Detail Dentist id </h1>
      <p>name: {dentist.name}</p>
      <p>email: {dentist.email}</p>
      <p>phone: {dentist.phone}</p>
      <p>website: {dentist.website}</p>
    </div>
  )
}

export default Detail