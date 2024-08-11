// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filterItemDetails, onChangeActiveLanguage, isActive} = props
  const {language, id} = filterItemDetails
  const onClickedItem = () => {
    onChangeActiveLanguage(id)
  }
  const getActiveCSS = isActive ? 'active-css' : ''

  return (
    <li className="filter-item-li-container">
      <button
        type="button"
        className={`filter-item-li-btn ${getActiveCSS}`}
        onClick={onClickedItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
