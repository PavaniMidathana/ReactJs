import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickedImg} = props
  const {thumbnailUrl, id} = imageDetails
  const clickedImage = () => {
    onClickedImg(id)
  }

  return (
    <li className="li-container" onClick={clickedImage}>
      <button className="li-btn" type="button">
        <img src={thumbnailUrl} alt="thumbnail" className="li-img" />
      </button>
    </li>
  )
}

export default ImageItem
