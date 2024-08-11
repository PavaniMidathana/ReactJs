// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchStr: ''}

  searchChanged = event => {
    this.setState({searchStr: event.target.value})
  }

  arrowClicked = suggestion => {
    this.setState({searchStr: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchStr} = this.state

    const filteredSuggestionsList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchStr.toLowerCase()),
    )

    return (
      <div className="google-search-bg-container">
        <div className="google-search-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-search-img"
            alt="google logo"
          />
          <ul className="google-search-list-container">
            <li className="google-search-input-el">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="google-search-icon"
                alt="search icon"
              />
              <input
                className="google-search-input"
                type="search"
                placeholder="Search Google"
                onChange={this.searchChanged}
                value={searchStr}
              />
            </li>
            {filteredSuggestionsList.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                arrowClicked={this.arrowClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
