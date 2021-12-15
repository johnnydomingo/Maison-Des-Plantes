import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../css/Footer.css";

const Layout = ({ currentUser, handleLogout, children }) => (
  <div className="layout">
    <Nav currentUser={currentUser} handleLogout={handleLogout} />

    {children}

    <Footer />
  </div>
);

export default Layout;
