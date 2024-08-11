import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickedTabItem = () => {
    onChangeTabItem(tabId)
  }
  const getClassName = isActive ? 'element' : ''

  return (
    <li className={`li-el ${getClassName}`} onClick={onClickedTabItem}>
      <button className="li-el-btn" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
