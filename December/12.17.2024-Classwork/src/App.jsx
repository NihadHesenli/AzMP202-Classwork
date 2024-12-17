import { useState } from 'react'

import './App.css'
import Form from './components/Form'

function App() {
  const [student, setstudent] = useState([])

  return (
    <>
    <Form student={student} setstudent={setstudent}/>
    </>
  )
}

export default App
