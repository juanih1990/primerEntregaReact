import styles from "./NavBar.module.css"
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles['custom-input']}`}  aria-current="page" href="#">TECNOLOGIA</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${styles['custom-input']}`} aria-current="page" href="#">HOGAR</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${styles['custom-input']}`} aria-current="page" href="#">BELLEZA Y FITNESS</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${styles['custom-input']}`} aria-current="page" href="#">CLIMATIZACION</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar