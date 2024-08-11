// Write your code here
import './index.css'

const Login = props => {
  const {changeLogin} = props

  const changeLoginStatus = () => {
    changeLogin()
  }

  return (
    <button type="button" onClick={changeLoginStatus}>
      Login
    </button>
  )
}

export default Login
