
import styles from'./index.module.scss'

const NavBar = () => {
  return (
    <header>
        <div className={styles.container}>
            <div className={styles.head}>
                <h4>Quickly.</h4>
                <nav>
                    <ul>
                        <li>
                            <a href="#" >About Us</a>
                        </li>
                        <li>
                            <a href="#" >Products</a>
                        </li>
                        <li>
                            <a href="#" >Features</a>
                        </li>
                        <li>
                            <a href="#" >Our Blog</a>
                        </li>
                        <li>
                            <a href="#" >Downloads</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles["sign-btn"]}>
                    <button className={styles.sign}>Sign up</button>
                    <button className={styles.log}>Log in</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar