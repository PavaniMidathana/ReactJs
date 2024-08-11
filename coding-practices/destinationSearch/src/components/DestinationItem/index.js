// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {imgUrl, name} = itemDetails

  return (
    <li className="item-container">
      <img className="item-image" src={imgUrl} alt={name} />
      <p className="item-name">{name}</p>
    </li>
  )
}

export default DestinationItem
