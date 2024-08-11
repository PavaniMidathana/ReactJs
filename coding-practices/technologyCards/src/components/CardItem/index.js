// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, className, imgUrl} = cardDetails

  const ele = (
    <li className={`${className} card-container`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="card-image" src={imgUrl} alt={title} />
    </li>
  )

  return ele
}

export default CardItem
