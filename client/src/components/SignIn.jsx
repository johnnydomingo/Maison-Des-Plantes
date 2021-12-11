import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <form onSubmit={(ev) => {
      ev.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>
        email
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        password
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Login</button>
      <Link to='/create-account'>Create Account</Link>
    </form>
  );
}

export default SignIn;