import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <Link to="/">
                <h3 className="navbar-title">RINONET</h3>
            </Link>
            <div className="Categories navbar-buttons">
                <NavLink
                    to="/category/celular"
                    className={({ isActive }) =>
                        isActive ? `ActiveOption navbar-button` : `Option navbar-button`
                    }
                >Celulares</NavLink>
                <NavLink
                    to="/category/tablet"
                    className={({ isActive }) =>
                        isActive ? `ActiveOption navbar-button` : `Option navbar-button`
                    }
                >Tablets</NavLink>
                <NavLink
                    to="/category/notebook"
                    className={({ isActive }) =>
                        isActive ? `ActiveOption navbar-button` : `Option navbar-button`
                    }
                >Notebooks</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;