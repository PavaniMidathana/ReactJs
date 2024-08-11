import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialAmountDetails = {
  balance: 0,
  income: 0,
  expenses: 0,
}

const initialHistoriesList = []

// Write your code here
class MoneyManager extends Component {
  state = {
    amountDetails: initialAmountDetails,
    historyDetails: initialHistoriesList,
    titleInput: '',
    amountInput: '',
    typeInput: 'Income',
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeInput: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()

    const {amountDetails, titleInput, amountInput, typeInput} = this.state
    let newAmountDetails = null
    if (typeInput === 'Income') {
      newAmountDetails = {
        balance: amountDetails.balance + parseInt(amountInput),
        income: amountDetails.income + parseInt(amountInput),
        expenses: amountDetails.expenses,
      }
    }
    if (typeInput === 'Expenses') {
      newAmountDetails = {
        balance: amountDetails.balance - parseInt(amountInput),
        income: amountDetails.income,
        expenses: amountDetails.expenses + parseInt(amountInput),
      }
    }

    const newHistoryDetails = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: typeInput,
    }
    this.setState(pre => ({
      amountDetails: newAmountDetails,
      historyDetails: [...pre.historyDetails, newHistoryDetails],
      titleInput: '',
      amountInput: '',
      typeInput: 'Income',
    }))
  }

  onClickDeleteBtn = id => {
    const {historyDetails, amountDetails} = this.state
    const filteredHistoryDetails = historyDetails.filter(each => each.id !== id)

    const history = historyDetails.find(each => each.id === id)
    const {amount, type} = history
    let newAmountDetails = null
    if (type === 'Income') {
      newAmountDetails = {
        balance: amountDetails.balance - parseInt(amount),
        income: amountDetails.income - parseInt(amount),
        expenses: amountDetails.expenses,
      }
    }
    if (type === 'Expenses') {
      newAmountDetails = {
        balance: amountDetails.balance + parseInt(amount),
        income: amountDetails.income,
        expenses: amountDetails.expenses - parseInt(amount),
      }
    }
    console.log(newAmountDetails)
    this.setState({
      historyDetails: filteredHistoryDetails,
      amountDetails: newAmountDetails,
      titleInput: '',
      amountInput: '',
      typeInput: 'Income',
    })
  }

  render() {
    const {
      amountDetails,
      historyDetails,
      titleInput,
      amountInput,
      typeInput,
    } = this.state

    return (
      <div className="mm-bg-container">
        <div className="mm-card-container">
          <div className="mm-section1">
            <h1 className="mm-section1-heading">Hi, Richard</h1>
            <p className="mm-section1-description">
              Welcome back to your{' '}
              <span className="mm-section1-description-span">
                Money Manager
              </span>
            </p>
          </div>
          <ul className="mm-section2">
            <MoneyDetails amountDetails={amountDetails} />
          </ul>
          <div className="mm-section3">
            <form
              className="mm-section3-form-container"
              onSubmit={this.onClickAddBtn}
            >
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title" className="form-label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="form-input"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
                value={titleInput}
              />
              <label htmlFor="amt" className="form-label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amt"
                className="form-input"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
                value={amountInput}
              />
              <label htmlFor="type" className="form-label">
                TYPE
              </label>
              <select
                id="type"
                className="form-input"
                onChange={this.onChangeType}
                value={typeInput}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.displayText} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="form-btn" type="submit">
                Add
              </button>
            </form>
            <div className="mm-section3-history-container">
              <h1 className="history-heading">History</h1>
              <p className="history-li-ele">
                <p className="history-li-ele-heading">Title</p>
                <p className="history-li-ele-heading">Amount</p>
                <p className="history-li-ele-heading li-margin">Type</p>
              </p>
              <ul className="history-ul-container">
                {historyDetails.map(each => (
                  <TransactionItem
                    historyDetails={each}
                    key={each.id}
                    onClickDeleteBtn={this.onClickDeleteBtn}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
