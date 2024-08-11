// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {details, onClickPlayAgain} = props
  const {text1, text2, imgUrl, score} = details

  return (
    <div className="win-or-loss-card-container">
      <div className="win-or-loss-card-text-container">
        <h1 className="win-or-loss-card-text1">{text1}</h1>
        <div>
          <p className="win-or-loss-card-text2">{text2}</p>
          <p className="win-or-loss-card-text3">{score}/12</p>
        </div>
        <button
          className="win-or-loss-card-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img className="win-or-loss-card-image" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
