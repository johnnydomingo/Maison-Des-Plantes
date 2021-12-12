import { NavLink } from "react-router-dom";
// import account from "../assets/account.png";

// const authenticatedOptions = (
//   <>
//     {/* <NavLink className="link" to="/create-post">
//       Drop-a-Seed
//     </NavLink> */}
//     <NavLink className="link" to="/sign-out">
//       Sign Out
//     </NavLink>
//   </>
// );
// const unauthenticatedOptions = (
//   <>
//     {/* <NavLink className="link" to="/sign-up">
//       Sign Up
//     </NavLink> */}
//     <NavLink className="link" to="/login">
//       Login
//     </NavLink>
//   </>
// );
// const alwaysOptions = (
//   <>
//     <NavLink className="link" to="/create-post">
//       Drop-a-Seed
//     </NavLink>
//     <NavLink className="link" to="/about">
//       About
//     </NavLink>
//     <NavLink className="link" to="/how-it-works">
//       How it Works
//     </NavLink>
//   </>
// );
const Nav = ({ currentUser, handleLogout }) => {
  return (
    <div>
      <header>
        <NavLink to="/"><h1>Maison des Plantes</h1></NavLink>
        <NavLink to="/create-post">Drop-a-Seed</NavLink>
            <NavLink to="/how-it-works">How It Works</NavLink>
            <NavLink to="/about">About</NavLink>
        {currentUser ? (
          <div>
            <p>Welcome, {currentUser.first_name} {currentUser.last_name}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <NavLink to="/login">Login</NavLink>
        )}
        {/* {currentUser && (
          <nav>
            <NavLink to="/create-post">Drop-a-Seed</NavLink>
            <NavLink to="/how-it-works">How It Works</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        )} */}
      </header>
      {/* {children} */}
  </div>
    // <nav>
    //   <NavLink className="home" to="/">
    //     <h1>Maison des Plants</h1>
    //   </NavLink>
    // <div>
    //   <div className="link-wrapper">
    //     <div className="links">
    //       {currentUser && (
    //         <div className="link">
    //           Welcome, {currentUser.email}
    //         </div>
    //       )}
    //       {alwaysOptions}
    //       {currentUser ? authenticatedOptions : unauthenticatedOptions}
    //     </div>
    //   </div>

      /* <header>
        <Link to="/">
          <h1>Maison des Plantes</h1>
        </Link>
        {currentUser ? (
          <div>
            <p>{currentUser.firstName.lastName}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'></Link>
        )} */

      /* <div className="auth-options">
        {currentUser ? <Link to="/">MAISON des PLANTES</Link> : null}
        {currentUser ? <Link to="/create-post">Drop-a-Seed</Link> : null}
        {currentUser ? <Link to="/how-it-works">How It Works</Link> : null}
        {currentUser ? <Link to="/about">About</Link> : null}
        <p>
          {currentUser ? `Welcome, ${currentUser.firstName.lastName}` : null}
        </p>
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
        {children} */
      /* </header> */
      // </div>
      // </nav>
  );
};

export default Nav;
