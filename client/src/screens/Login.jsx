import SignIn from '../components/SignIn';
const Login = ({handleLogin}) => {
  return (
    
    <div className='login'>
      <SignIn
      handleLogin={handleLogin}/>
    </div>
    
  )
}

export default Login;