// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    indexes: [],
  }

  onClickIcon = id => {
    const {indexes} = this.state
    let newIndexes = null
    if (indexes.includes(id)) {
      newIndexes = indexes.filter(each => each !== id)
    } else {
      newIndexes = [...indexes, id]
    }

    this.setState({
      indexes: newIndexes,
    })
  }

  render() {
    const {faqsList} = this.props
    const {indexes} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-h">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(each => (
              <FaqItem
                faqDetails={each}
                key={each.id}
                showAnswer={indexes.includes(each.id)}
                onClickIcon={this.onClickIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
