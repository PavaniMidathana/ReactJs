// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeInput, isActive} = props
  const {displayText, tabId} = tabDetails

  const changedInput = () => {
    onChangeInput(tabId)
  }

  const applyStylesToActiveTab = isActive ? 'btn-styles li-styles' : ''

  return (
    <li className="tab-li-el">
      <button
        type="button"
        className={`tab-li-btn ${applyStylesToActiveTab}`}
        onClick={changedInput}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
