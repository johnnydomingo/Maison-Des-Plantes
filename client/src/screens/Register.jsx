import CreateAccount from '../components/CreateAccount';
const Register = ({handleRegister}) => {
  return (
    <div>
      <CreateAccount
        handleRegister={handleRegister}
      />
    </div>
  )
}

export default Register;