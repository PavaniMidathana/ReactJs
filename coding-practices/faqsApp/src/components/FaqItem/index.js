// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, showAnswer, onClickIcon} = props
  const {questionText, answerText, id} = faqDetails
  const getImgUrl = showAnswer
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const getAlt = showAnswer ? 'minus' : 'plus'
  const clickedIcon = () => {
    onClickIcon(id)
  }

  return (
    <li className="li-container">
      <div className="li-sec1">
        <h1 className="li-sec1-p">{questionText}</h1>
        <img
          className="li-sec1-img"
          alt={getAlt}
          src={getImgUrl}
          onClick={clickedIcon}
        />
      </div>
      {showAnswer && (
        <div className="li-sec2">
          <hr className="li-sec2-hr" />
          <p className="li-sec2-p">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
