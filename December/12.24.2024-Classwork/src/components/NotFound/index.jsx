import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const back = useNavigate()
  return (
    <>
    <div>
        <h1>Not Found</h1>
        <button onClick={()=>{back(-1)}}>Go Back</button>
    </div>
    </>
  )
}

export default NotFound