import  { createContext, useState } from 'react'

export const FavoritestContext = createContext()

const FavoriteProvider = ({children}) => {

   const [fav,setFav] = useState([])

    const favToggle = (product)=>{
        const favItem = fav.find((p)=>p.id === product.id)
        if (favItem) {
            setFav((previous)=>previous.filter((prod)=>prod.id !== product.id))
        } else{
            setFav((prev)=>[...prev, product])
        }
    }

    const clearAllFav = ()=>{
        setFav([])
    }

  return (
    <FavoritestContext.Provider value={{fav,favToggle,clearAllFav}}>{children}</FavoritestContext.Provider>
  )
}

export default FavoriteProvider