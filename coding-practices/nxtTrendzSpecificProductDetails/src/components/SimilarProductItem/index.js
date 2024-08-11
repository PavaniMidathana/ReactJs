// Write your code here
import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const SimilarProductItem = props => {
  const {similarProductItemDetails} = props
  const {imageUrl, title, price, brand, rating} = similarProductItemDetails

  return (
    <li className="similar-item-li-container">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-item-li-img"
      />
      <h1 className="similar-item-li-title">{title}</h1>
      <p className="similar-item-li-brand">by {brand}</p>
      <div className="similar-item-li-price-and-rating">
        <p className="similar-item-li-price">Rs {price}/- </p>
        <p className="similar-item-li-rating">
          {rating} <BsFillStarFill className="similar-item-start-icon" />
        </p>
      </div>
    </li>
  )
}

export default SimilarProductItem
