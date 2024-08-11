// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchDestination: ''}

  getDestinations = event => {
    this.setState({searchDestination: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchDestination} = this.state

    const filteredDestinationList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchDestination.toLowerCase()),
    )

    return (
      <div className="ds-bg-container">
        <h1 className="ds-heading">Destination Search</h1>
        <div className="ds-input">
          <input
            type="search"
            placeholder="search"
            onChange={this.getDestinations}
            className="input-el"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="ds-destinations-container">
          {filteredDestinationList.map(each => (
            <DestinationItem itemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
