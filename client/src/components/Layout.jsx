import Nav from "../components/Nav";


const Layout = (props) => (
  
  <div>
  <Nav />
  <div>
      {props.children}
    </div>
    </div>
  )


export default Layout;