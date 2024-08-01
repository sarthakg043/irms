import React from 'react'
import { useParams } from 'react-router-dom'

const Rejected = () => {

    const { id } = useParams()
  return (
    <div>
        Rejected
        <p>{id}</p>
    </div>
  )
}

export default Rejected