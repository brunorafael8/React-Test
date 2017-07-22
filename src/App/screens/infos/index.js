import React from 'react'
import EpsApi from 'src/data'
import { Link } from 'react-router-dom'
const Infos = (props) => {
  const infos = EpsApi.get(
    parseInt(props.match.params.id, 0)
  )
  return (
    <div>
      <img src={infos.url} alt="img"/>
      <h1>{infos.title}</h1><span>{infos.released}</span>
      <p>{infos.description}</p>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default Infos
