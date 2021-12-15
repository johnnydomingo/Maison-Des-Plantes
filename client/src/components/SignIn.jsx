import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SignIn.css'

const SignIn = ({handleLogin}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  // const { handleLogin } = props;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="login-form">
    <form 
      onSubmit={(ev) => {
      ev.preventDefault();
      handleLogin(formData);
    }}>
      <h3 id="login-title">Login</h3>
      <div className="login-form">
        <input
          id="email-box"
          type='text'
          name='email'
          placeholder='email'
          value={email}
          onChange={handleChange}
        />
      <br />
        <input
          id="password-box"
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={handleChange}
        />
      <br />
      <button id="confirm-login">Login</button>
      <Link id="create" to='/create-account'>Create Account</Link>
      </div>
    </form>
    </div>
  );
}

export default SignIn;