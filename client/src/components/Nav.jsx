import { Link } from 'react-router-dom';




const Nav = ({ currentUser }) => {
  return (
    <div className="auth-options">
    {currentUser ? <Link to="/">MAISON des PLANTES</Link> : null}
    {currentUser ? <Link to="/create-post">Drop-a-Seed</Link> : null}
    <p>{currentUser ? `Welcome, ${currentUser.firstName.lastName}` : null}</p>
    {currentUser ? null : <Link to="/register">Register</Link>}
    {currentUser ? (
      <button className="signout-btn" onClick={handleLogout}>Sign Out</button>
    ) : (
      <Link to="/login">Login</Link>
    )}
  </div>
  )
}

export default Nav;
