import { useContext } from 'react'
import {FavoritestContext } from '../../../context/FavoriteContext'



const Favorites = () => {

  const [fav,favToggle,clearAllFav] = useContext(FavoritestContext)

  return (
    <>
     <div >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ margin: 0 }}>Your Favorites</h2>
        {fav.length > 0 && (
          <Button type="primary" danger onClick={clearFavorites}>
            Clear All Favorites
          </Button>
        )}
       </div>
      </div>

    </>
  )
}

export default Favorites
