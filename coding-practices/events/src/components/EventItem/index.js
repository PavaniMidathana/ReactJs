// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickImg, isActive} = props
  const {imageUrl, name, location, registrationStatus, id} = eventDetails
  const onClickedImg = () => {
    onClickImg(registrationStatus, id)
  }
  const getCSSStyles = isActive ? 'active-img' : ''

  return (
    <li className="li-container">
      <button
        className={`li-btn ${getCSSStyles}`}
        onClick={onClickedImg}
        type="button"
      >
        <img src={imageUrl} className="li-img" alt="event" />
      </button>
      <p className="li-name">{name}</p>
      <p className="li-location">{location}</p>
    </li>
  )
}

export default EventItem
