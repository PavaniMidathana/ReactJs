// Write your code here
import './index.css'
import {v4 as uuidv4} from 'uuid'

const MoneyDetails = props => {
  const {amountDetails} = props
  const {balance, income, expenses} = amountDetails
  const accountsList = [
    {
      id: uuidv4(),
      text: 'Your Balance',
      amount: balance,
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
      alt: 'balance',
      css: 'item1',
      testid: 'balanceAmount',
    },
    {
      id: uuidv4(),
      text: 'Your Income',
      amount: income,
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
      alt: 'income',
      css: 'item2',
      testid: 'incomeAmount',
    },
    {
      id: uuidv4(),
      text: 'Your Expenses',
      amount: expenses,
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
      alt: 'expenses',
      css: 'item3',
      testid: 'expensesAmount',
    },
  ]

  return (
    <>
      {accountsList.map(each => (
        <li className={each.css} key={each.id}>
          <img src={each.imgUrl} alt={each.alt} className="item-img" />
          <div className="item-text-container">
            <p className="item-text">{each.text}</p>
            <p className="item-amount" data-testid={each.testid}>
              Rs {each.amount}
            </p>
          </div>
        </li>
      ))}
    </>
  )
}

export default MoneyDetails
