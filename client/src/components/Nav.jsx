import { Link } from "react-router-dom";
// import account from "../assets/account.png";
const Nav = ({ currentUser, handleLogout, children }) => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Maison des Plantes</h1>
        </Link>
      
      <div className="auth-options">
        {/* {currentUser ? <Link to="/">MAISON des PLANTES</Link> : null}
        {currentUser ? <Link to="/create-post">Drop-a-Seed</Link> : null}
        {currentUser ? <Link to="/how-it-works">How It Works</Link> : null}
        {currentUser ? <Link to="/about">About</Link> : null} */}
        {/* <p>
          {currentUser ? `Welcome, ${currentUser.firstName.lastName}` : null}
        </p> */}
        {currentUser ? (
          <div>
            <p>{currentUser.firstName.lastName}</p>
          <button className="signout-btn" onClick={handleLogout}>
            Sign Out
            </button>
            </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {currentUser  && (
          <nav>
          <Link to="/create-post">Drop-a-Seed</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">About</Link>
          </nav>
        )}
        </div>
        {children}
        </header>
    </div>
  );
};

export default Nav;
