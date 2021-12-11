import { Link } from 'react-router-dom';
import account from '../assets/account.png';
const Nav = ({ currentUser, handleLogout }) => {

  return (
    <div>
      <header>
        <Link to="/"><h1>Maison des Plantes</h1></Link>
      </header>
    <div className="auth-options">
    {currentUser ? <Link to="/">MAISON des PLANTES</Link> : null}
    {currentUser ? <Link to="/create-post">Drop-a-Seed</Link> : null}
      {currentUser ? <Link to="/how-it-works">How It Works</Link> : null}
      {currentUser ? <Link to="/about">About</Link> : null}
    <p>{currentUser ? `Welcome, ${currentUser.firstName.lastName}` : null}</p>
    {/* {currentUser ? null : <Link to="/create-account">Create Account</Link>} */}
    {currentUser ? (
      <button className="signout-btn" onClick={handleLogout}>Sign Out</button>
    ) : (
            // <Link to="/login"><img src={account}/></Link>
            <Link to="/login">Login</Link>
    )}
      </div>
      </div>
  )
}

export default Nav;
