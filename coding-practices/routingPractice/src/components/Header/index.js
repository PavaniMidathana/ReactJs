// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="navbar-icon-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="navbar-icon"
      />
      <p className="navbar-icon-text">Wave</p>
    </div>

    <ul className="navbar-link-container">
      <li>
        <Link className="navbar-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navbar-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="navbar-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
