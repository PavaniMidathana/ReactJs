import './index.css'

const HistoryItem = props => {
  const {historyDetails, onClickedDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const clickedDeleteIcon = () => {
    console.log(id)
    onClickedDelete(id)
  }

  return (
    <li className="item-container">
      <div className="item-text">
        <p className="item-text-time-accessed">{timeAccessed}</p>
        <img className="item-text-logo" src={logoUrl} alt="domain logo" />
        <p className="item-text-title">{title}</p>
        <p className="item-text-domain-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="item-del-btn"
        onClick={clickedDeleteIcon}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="item-del-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
