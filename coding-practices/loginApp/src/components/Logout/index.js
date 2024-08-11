// Write your code here
import './index.css'

const Logout = props => {
  const {changeLogin} = props

  const changeLoginStatus = () => {
    changeLogin()
  }

  return (
    <button type="button" onClick={changeLoginStatus}>
      Logout
    </button>
  )
}

export default Logout
