import { useContext } from 'react'
import {FavoritestContext } from '../../../context/FavoriteContext'



const Favorites = () => {

  const {fav,favToggle,clearAllFav} = useContext(FavoritestContext)

  return (
    <>
     <div >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <img src={fav.image} alt="" />
        <h2 style={{ margin: 0 }}>{fav.title}</h2>
        {fav.length > 0 && (
          <>
          <Button type="primary" danger onClick={clearAllFav}>
            Clear All Favorites
          </Button>
          <h1>Dizayn Fikir vermeyin zato funksionaldi</h1>
          </>
        )}
        {fav.map((f)=>{
          return(
            <>
            <img src={f.image} alt="" />
        <h2 style={{ margin: 0 }}>{f.title}</h2>
            </>
          )
        })}
       </div>
      </div>

    </>
  )
}

export default Favorites
