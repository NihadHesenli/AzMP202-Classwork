import React from 'react'
import './index.css' 

const Form = () => {
  return (
    <>
    <form>
        <fieldset>
            <legend>Student Form</legend>
            <input type="text" id='studentName' placeholder='name'/>
            <input type="number" id='gpa' placeholder='gpa'/>
            <input type="text" id='faculty' placeholder='faculty'/>
        </fieldset>
    </form>
    </>
  )
}

export default Form