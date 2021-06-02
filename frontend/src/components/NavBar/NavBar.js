import { Link } from "react-router-dom"
import './NavBar.css'
const NavBar = () => {
    return <>
        <nav className = "navbar navbar-expand navbar-dark bg-dark">
            <div className = "navbar-nav mr-auto">
                <li className = "nav-item">
                    <Link to = {"/"} className = "nav-link">
                        <i className="fa fa-home home-icon" ></i>
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to = {"/tutorials"} className = "nav-link">
                        Tutorial List
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to = {"/add"} className = "nav-link">
                        Add Tutorial
                    </Link>
                </li>
            </div>
        </nav>
    </>
}

export default NavBar;