// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, onWithdrawalAmount} = props
  const {value} = itemDetails

  const onClickedBtn = () => {
    onWithdrawalAmount(value)
  }

  return (
    <li>
      <button className="li-el" onClick={onClickedBtn}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
