import React, { useEffect, useState } from 'react'
import './menu.css'
import Cards from '../Cards/cards'
import { getAllData } from '../../services'
import { endpoint } from '../../services/constant'

const Menu = () => {
  const [recipes,setRecipes] = useState([])
  const [search , setSearch] = useState([])
  const getProducts = async()=>{
    const data = await getAllData(endpoint.recipes)
    setRecipes(data)
    console.log(data);
  }
  useEffect(() => {
    getProducts()
  },[])
  const searchFunction = async(e)=>{
    
  }
     
  return (
    <>
    <div className="container">
        <div className="head">
           <h1>Menu</h1>
           <input type="text" id='searchInput' placeholder='find' onChange={searchFunction}/>
           <Cards recipes={recipes} setRecipes={setRecipes}/>
        </div>
    </div>
    </>
  )
}

export default Menu