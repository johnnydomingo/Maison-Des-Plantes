import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
// import SignIn from './components/SignIn'
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  return (
    <div className="App">
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/create-account'>
            <Register handleRegister={handleRegister} />
          </Route>
          {/* <Route path='/'> */}
            <MainContainer currentUser={currentUser}/>
          {/* </Route> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
