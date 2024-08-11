// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryItemDetails} = props
  const {
    avatarUrl,
    forksCount,
    issuesCount,
    name,
    starsCount,
  } = repositoryItemDetails

  return (
    <li className="repository-item-li-container">
      <img
        src={avatarUrl}
        alt={name}
        className="repository-item-li-avatar-img"
      />
      <h1 className="repository-item-li-name">{name}</h1>
      <div className="repository-item-li-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="repository-item-li-icon"
        />
        <p className="repository-item-li-icon-txt">{starsCount} stars</p>
      </div>
      <div className="repository-item-li-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="repository-item-li-icon"
        />
        <p className="repository-item-li-icon-txt">{forksCount} forks</p>
      </div>
      <div className="repository-item-li-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="repository-item-li-icon"
        />
        <p className="repository-item-li-icon-txt">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
