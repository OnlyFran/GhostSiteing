import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "../Navbar/NavBar.css"

function NavBar() {
    return (
      <div className="App">
        <nav className="navbar container-fluid navbar-expand-lg navbar-dark">
              <Link to='/'>
                <label className="navbar-brand" href="#">GhostSiteing</label>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to='/categoria/tienda' className="nav-link">Tienda<span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                      <NavLink to="/categoria/juego" className="nav-link">Juegos</NavLink>
                  </li>
                </ul>
              </div>
              <Link to='/cart'>
                <CartWidget />
              </Link>
            </nav>
      </div>
    )
}

export default NavBar