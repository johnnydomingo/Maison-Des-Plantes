import Nav from "../components/Nav";


const Layout = ({currentUser, handleLogout, children}) => (
  
  <div>
    <Nav
      currentUser={currentUser}
      handleLogout={handleLogout}
    />
  <div>
      {children}
    </div>
    </div>
  )


export default Layout;