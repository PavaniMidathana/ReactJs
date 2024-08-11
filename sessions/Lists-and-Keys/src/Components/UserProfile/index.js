import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  const ele = (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="Avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
  return ele
}

export default UserProfile
