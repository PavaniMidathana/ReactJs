import './index.css'

// Write your code here.
const ThumbnailItem = props => {
  const {details, onClickedImage, isClicked} = props
  const {thumbnailUrl, thumbnailAltText, id} = details

  const clickedImage = () => {
    onClickedImage(id)
  }

  const imageButtonClassName = isClicked ? '' : 'thumbnail-opacity-img'

  return (
    <li>
      <button type="button" className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${imageButtonClassName}`}
          onClick={clickedImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
