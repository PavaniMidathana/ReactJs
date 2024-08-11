import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameEnded: false,
    clickedEmojisList: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickedEmoji = id => {
    const {clickedEmojisList} = this.state
    console.log(id)
    if (clickedEmojisList.includes(id)) {
      const {score, topScore} = this.state
      let newTopScore = topScore
      if (topScore < score) {
        newTopScore = score
      }
      this.setState({isGameEnded: true, topScore: newTopScore})
    } else {
      const {score} = this.state
      const newScore = score + 1
      if (newScore === 12) {
        this.setState(pre => ({
          clickedEmojisList: [...pre.clickedEmojisList, id],
          score: newScore,
          isGameEnded: true,
          topScore: newScore,
        }))
      } else {
        this.setState(pre => ({
          clickedEmojisList: [...pre.clickedEmojisList, id],
          score: newScore,
        }))
      }
    }
  }

  getEmojiCards = () => {
    const newList = this.shuffledEmojisList()

    return (
      <ul className="emojis-ul-container">
        {newList.map(each => (
          <EmojiCard
            emojiDetails={each}
            key={each.id}
            onClickedEmoji={this.onClickedEmoji}
          />
        ))}
      </ul>
    )
  }

  onClickPlayAgain = () => {
    const {score, topScore} = this.state
    let newTopScore = topScore
    if (score > topScore) {
      newTopScore = score
    }
    this.setState({
      isGameEnded: false,
      score: 0,
      topScore: newTopScore,
    })
  }

  getWinOrLossCard = () => {
    const {score} = this.state
    let details = null

    if (score === 12) {
      details = {
        text1: 'You Won',
        text2: 'Best Score',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
        score,
      }
    } else {
      details = {
        text1: 'You Lose',
        text2: 'Score',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
        score,
      }
    }

    return (
      <WinOrLoseCard
        details={details}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  render() {
    const {score, topScore, isGameEnded} = this.state

    return (
      <div>
        <NavBar score={score} topScore={topScore} isGameEnded={isGameEnded} />
        <div className="emoji-game-bg-container">
          <div className="emoji-game-card-container">
            {isGameEnded ? this.getWinOrLossCard() : this.getEmojiCards()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
