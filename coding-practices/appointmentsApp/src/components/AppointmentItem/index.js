// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onStarred} = props
  const {appointment, dateAndTime, isStarred, id} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    onStarred(id)
  }

  return (
    <li className="li-container">
      <div className="name-and-image">
        <p className="name">{appointment}</p>
        <button
          onClick={onClickStar}
          className="star-img-btn"
          type="button"
          data-testid="star"
        >
          <img className="star-image" src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="date">Date:{dateAndTime}</p>
    </li>
  )
}

export default AppointmentItem
