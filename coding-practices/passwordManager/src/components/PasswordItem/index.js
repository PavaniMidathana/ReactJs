import './index.css'

const colorsArray = [
  '#0b69ff',
  '#94a3b8',
  ' #7683cb',
  ' #f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  ' #b91c1c',
  '#0ea5e9',
  '#64748b',
]

const PasswordItem = props => {
  const {passwordDetails, showPasswords, onClickDeleteIcon} = props
  const {website, username, password, id} = passwordDetails
  const word = website[0].toUpperCase()
  const clickedDeleteBtn = () => {
    onClickDeleteIcon(id)
  }
  const color = Math.ceil(Math.random() * colorsArray.length)

  return (
    <li className="li-container">
      <div className="li-text-container">
        <p className="li-word">{word}</p>
        <div className="li-text">
          <p>{website}</p>
          <p>{username}</p>
          {showPasswords && <p>{password}</p>}
          {!showPasswords && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-icon"
            />
          )}
        </div>
      </div>

      <button
        className="li-delete-btn-container"
        type="button"
        onClick={clickedDeleteBtn}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="li-delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
