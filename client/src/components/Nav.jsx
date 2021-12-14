import { NavLink } from "react-router-dom";
import "../css/Nav.css";


const Nav = ({ currentUser, handleLogout }) => {
  return (
    <div>
    <div className="nav-bar">
      <header>
        <NavLink  to="/">
          <h1 className="maison">Maison des Plantes</h1>
        </NavLink>
        <div className="nav-links">
          <a  className="link" id="home-link" href="#top">How It Works</a>
          <NavLink className="link" id="home-link" to="/about">About</NavLink>
          {currentUser ? (
            <div>
              <NavLink className='link' id="home-link" to="/create-post">Drop-a-Seed</NavLink>
              <p className="link">
                Welcome, {currentUser.first_name} {currentUser.last_name}
              </p>
              {/* <NavLink to="/create-post">Drop-a-Seed</NavLink> */}
              <button id="logout-button" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <NavLink className='link' id="login" to="/login">Login</NavLink>
          )}
        </div>     
        </header>
        {/* <hr></hr> */}
      </div>
      {/* <hr></hr> */}
    </div>
  );
};

export default Nav;
