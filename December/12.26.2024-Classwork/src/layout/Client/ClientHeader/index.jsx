import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const ClientHeader = () => {
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
                            <NavLink to={"/products"}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <button>Log in</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default ClientHeader