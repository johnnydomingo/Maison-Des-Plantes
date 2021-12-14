import { useState } from "react";

const CreateAccount = (props) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const { first_name, last_name, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((pineapple) => ({
      ...pineapple,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Create Account</h3>
      <label>
        first name
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        last name
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        email
        <input type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Create</button>
    </form>
  );
};

export default CreateAccount;