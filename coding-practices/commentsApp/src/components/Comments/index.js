import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const initialCommentsList = []

class Comments extends Component {
  state = {
    commentsList: initialCommentsList,
    name: '',
    comment: '',
    commentsCount: 0,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const len = initialContainerBackgroundClassNames.length
    const index = Math.ceil(Math.random() * (len - 1))
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
      isLiked: false,
      color: initialContainerBackgroundClassNames[index],
    }
    this.setState(pre => ({
      commentsList: [...pre.commentsList, newComment],
      name: '',
      comment: '',
      commentsCount: pre.commentsCount + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onClickDeleteBtn = id => {
    const {commentsList} = this.state
    const newCommentsList = commentsList.filter(each => each.id !== id)
    this.setState(pre => ({
      commentsList: newCommentsList,
      commentsCount: pre.commentsCount - 1,
    }))
  }

  onClickLikeBtn = id => {
    this.setState(pre => ({
      commentsList: pre.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsList, name, comment, commentsCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Comments</h1>
          <div className="card-section1">
            <img
              className="comments-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <p className="form-content">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="form-input"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                cols="10"
                rows="5"
                className="form-text-area"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button type="submit" className="form-submit-btn">
                Add Comment
              </button>
            </form>
          </div>
          <hr className="hr" />
          <div className="card-section2">
            <p className="count-text">
              <span className="count">{commentsCount}</span>Comments
            </p>
            <ul className="comments-container">
              {commentsList.map(each => (
                <CommentItem
                  commentDetails={each}
                  key={each.id}
                  onClickDeleteBtn={this.onClickDeleteBtn}
                  onClickLikeBtn={this.onClickLikeBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
