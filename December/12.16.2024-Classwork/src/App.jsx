import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(10)

  function increment(){
    setCount(count + 1)
  }
  function decrement(){
    if (!count==0) {
      setCount(count-1)
    }else{
      setCount(0)
    }
  }
  function reset(){
    setCount(10)
  }
  //

  const[hello, setHello] = useState('Azmp202')
  function changingName(){
    if (hello == "Azmp202"){
      setHello('Hello World!')
    }else if(hello=="Hello World!"){
      setHello("Good Bye World")
    }else{
      setHello("Hello World!")
    }
  }
  //

  const[isOpen,setIsOpen] = useState(false)

  return (
    <>
    <hr />
    <button onClick={increment}>+</button>
    <p>{count}</p>
    <button onClick={decrement}>-</button>
    <hr />
    <button onClick={reset}>reset</button>

    <hr />
    <hr />  

    <p>{hello}</p>
    <button onClick={changingName}>Change</button>

    
    </>
  )
}

export default App
