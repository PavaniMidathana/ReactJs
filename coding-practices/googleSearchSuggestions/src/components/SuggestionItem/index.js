// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, arrowClicked} = props
  const {suggestion} = suggestionDetails

  const onClickedArrow = () => {
    arrowClicked(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion-content">{suggestion}</p>
      <img
        className="suggestion-arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickedArrow}
      />
    </li>
  )
}

export default SuggestionItem
