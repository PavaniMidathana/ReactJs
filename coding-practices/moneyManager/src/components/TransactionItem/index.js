// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails, onClickDeleteBtn} = props
  const {title, amount, type, id} = historyDetails
  const onClickDeleteIcon = () => {
    onClickDeleteBtn(id)
  }

  return (
    <li className="li-container">
      <p className="li-text">{title}</p>
      <p className="li-text">{amount}</p>
      <p className="li-text">{type}</p>
      <button
        type="button"
        className="li-delete-btn"
        data-testid="delete"
        onClick={onClickDeleteIcon}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="li-delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
