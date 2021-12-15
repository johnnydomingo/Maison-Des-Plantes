import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SignIn.css'

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const { handleLogin } = props;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form id="login-form" onSubmit={(ev) => {
      ev.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <div className="login-form">
        <input
          type='text'
            name='email'
            placeholder='email'
          value={email}
          onChange={handleChange}
        />
      <br />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={handleChange}
        />
      <br />
      <button>Login</button>
      <Link to='/create-account'>Create Account</Link>
      </div>
    </form>
  );
}

export default SignIn;