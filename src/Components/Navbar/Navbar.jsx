import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
       <Link to='/'> <h1>Saku</h1></Link>
      </div>
      <div className="nav-mid">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/Projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
          <li><NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/Contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;