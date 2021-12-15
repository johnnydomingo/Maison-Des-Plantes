import Nav from "../components/Nav";
import Footer from "../components/Footer";
import '../css/Layout.css';


const Layout = ({ currentUser, handleLogout, children }) => (
  <div className="layout">
    <Nav currentUser={currentUser} handleLogout={handleLogout} />
    <div className="layout-children">
    {children}
    </div>
    {/* <Footer /> */}
  </div>
);

export default Layout;
