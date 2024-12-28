import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./index.module.scss";

const AdminHeader = () => {
  return (
    <header>
        <div className="header">
            <div className="container">
                <div className={styles['head']}>
                <h2>AdminLogo</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/admin"}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/product-list"}>Products</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/admin/add-product"}>Add Products</NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default AdminHeader