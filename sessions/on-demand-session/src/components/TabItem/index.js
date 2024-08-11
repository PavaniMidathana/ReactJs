import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabID, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateActiveTabID(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
