// Write your React code here.
import {Component} from 'react'

import './index.css'

import Emoji from '../Emoji'

class Feedback extends Component {
  state = {feedback: false}

  onClikedEmoji = () => {
    const {feedback} = this.state
    const newFeedback = !feedback
    this.setState({feedback: newFeedback})
  }

  render() {
    const {feedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-bg-container">
        <div className="feedback-card-container">
          {feedback === false ? (
            <div>
              <h1 className="feedback-card-heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="feedback-card-emojis-container">
                {emojis.map(each => (
                  <Emoji
                    details={each}
                    key={each.id}
                    onClikedEmoji={this.onClikedEmoji}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <img
                src={loveEmojiUrl}
                alt="love emoji"
                className="feedback-card-love-img"
              />
              <h1 className="feedback-card-love-msg">Thank You!</h1>
              <p className="feedback-card-love-text">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
