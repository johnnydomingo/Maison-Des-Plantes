import { useState } from "react";
import '../css/CreateAccount.css';

const CreateAccount = ({handleRegister}) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const { first_name, last_name, email, password } = formData;
  // const { handleRegister } = props;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="register-form"
      onSubmit={(ev) => {
        ev.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3 id="create-title">Create Account</h3>
      <div className="account-form">
        <input
          id="first-name"
          type="text"
          name="first_name"
          placeholder="first name"
          value={first_name}
          onChange={handleChange}
        />
        <br />
        <input
          id="last-name"
          type="text"
          name="last_name"
          placeholder="last name"
          value={last_name}
          onChange={handleChange}
        />
        <br />
        <input
          id="email"
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <button id="confirm-account">Create</button>
      </div>
    </form>
  );
};

export default CreateAccount;
