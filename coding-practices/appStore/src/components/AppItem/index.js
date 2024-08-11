// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="li-bg-container">
      <img className="li-image" src={imageUrl} alt={appName} />
      <p className="li-heading">{appName}</p>
    </li>
  )
}

export default AppItem
