// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickRightArrow = () => {
    const {index} = this.state
    let newIndex = null
    if (index === 3) {
      newIndex = index
    } else {
      newIndex = index + 1
    }

    this.setState({index: newIndex})
  }

  onClickLeftArrow = () => {
    const {index} = this.state
    let newIndex = null
    if (index === 0) {
      newIndex = index
    } else {
      newIndex = index - 1
    }

    this.setState({index: newIndex})
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="card-heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="card-img" />
          <div className="card-review-container">
            <button
              type="button"
              className="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="left-arrow"
              />
            </button>
            <div className="card-user-container">
              <p className="card-user-name">{username}</p>
              <p className="card-user-company">{companyName}</p>
            </div>
            <button
              type="button"
              className="button"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="right-arrow"
              />
            </button>
          </div>
          <p className="card-user-description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
