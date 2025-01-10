import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { FavoritestContext } from '../../../context/FavoriteContext'

const ClientHeader = () => {

    const { fav } = useContext(FavoritestContext)

  return (
    <header>
        <div className="header">
            <div className="container">
                <div className={styles['head']}>
                <h2>ClientLogo</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favoritest"}>Favorites <span>{fav.length}</span></NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default ClientHeader