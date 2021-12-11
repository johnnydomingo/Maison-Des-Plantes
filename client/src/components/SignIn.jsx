import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const { handleLogin } = props;

  const handleChange = (ev) => {
    const { firstName, lastName, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [firstName, lastName]: value,
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
      <Link to='/register'>Create Account</Link>
    </form>
  );
}

export default Signin;