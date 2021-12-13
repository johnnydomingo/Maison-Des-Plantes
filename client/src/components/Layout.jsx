import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Layout = ({currentUser, handleLogout, children}) => (
  
  <div>
    <Nav
      currentUser={currentUser}
      handleLogout={handleLogout}
    />
  <div>
      {children}
    </div>
    <Footer />
    </div>
  )


export default Layout;