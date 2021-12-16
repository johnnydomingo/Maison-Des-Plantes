import Nav from "../components/Nav";



const Layout = ({ currentUser, handleLogout, children }) => (
  <div className="layout">
    <Nav currentUser={currentUser} handleLogout={handleLogout} />
    <div className="layout-children">
    {children}
    </div>
  </div>
);

export default Layout;
