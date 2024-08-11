// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, onClickDeleteBtn, onClickLikeBtn} = props
  const {name, comment, time, isLiked, color, id} = commentDetails

  const likeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextClassName = isLiked ? 'liked' : ''

  const clickedDeleteBtn = () => {
    onClickDeleteBtn(id)
  }

  const clickedLikeBtn = () => {
    onClickLikeBtn(id)
  }

  return (
    <li className="li-container">
      <div className="li-section1">
        <p className={`letter ${color}`}>{name[0]}</p>
        <div>
          <div className="li-section1-name-time">
            <p className="li-section1-name">{name}</p>
            <p className="li-section1-time">{time}</p>
          </div>
          <p className="li-section1-comment">{comment}</p>
        </div>
      </div>
      <div className="li-section2">
        <button
          type="button"
          className="li-section2-like-btn"
          onClick={clickedLikeBtn}
        >
          <img className="li-section2-like-img" src={likeUrl} alt="like" />
          <p className={`li-section2-like-text ${likeTextClassName}`}>Like</p>
        </button>
        <button
          type="button"
          onClick={clickedDeleteBtn}
          className="delete-btn"
          data-testid="delete"
        >
          <img
            className="li-section2-delete-btn"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
