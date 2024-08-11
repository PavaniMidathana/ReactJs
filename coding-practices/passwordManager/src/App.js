import {Component} from 'react'
import PasswordItem from './components/PasswordItem'
import './App.css'

class App extends Component {
  state = {
    initialPasswordsArray: [],
    website: '',
    username: '',
    password: '',
    isShowPasswords: false,
    search: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickAddBtn = () => {
    const {website, username, password, initialPasswordsArray} = this.state
    const newEl = {
      id: initialPasswordsArray.length,
      website,
      username,
      password,
    }
    const newPasswordsArray = [...initialPasswordsArray, newEl]
    this.setState({
      initialPasswordsArray: newPasswordsArray,
      website: '',
      username: '',
      password: '',
    })
  }

  onClickShowBtn = () => {
    this.setState(pre => ({
      isShowPasswords: !pre.isShowPasswords,
    }))
  }

  onClickDeleteIcon = id => {
    const {initialPasswordsArray} = this.state
    const newArray = initialPasswordsArray.filter(each => each.id !== id)

    this.setState({initialPasswordsArray: newArray})
  }

  onChangeSearchString = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {
      initialPasswordsArray,
      website,
      username,
      password,
      isShowPasswords,
      search,
    } = this.state

    const filteredPasswordsArray = initialPasswordsArray.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="pw-bg-container">
        <div className="pw-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="pw-app-logo"
          />
        </div>

        <div className="pm-section1">
          <form className="pm-section1-form">
            <h1 className="pm-section1-form-heading">Add New Password</h1>
            <div className="pm-section1-form-input-container">
              <div className="pm-section1-form-input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="pm-section1-form-input-img"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="pm-section1-form-input-element"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="pm-section1-form-input-container">
              <div className="pm-section1-form-input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="pm-section1-form-input-img"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="pm-section1-form-input-element"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="pm-section1-form-input-container">
              <div className="pm-section1-form-input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="pm-section1-form-input-img"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="pm-section1-form-input-element"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>

            <div className="pm-section1-form-btn-container">
              <button
                type="submit"
                className="pm-section1-form-add-btn"
                onClick={() => this.onClickAddBtn()}
              >
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="pm-section1-img"
          />
        </div>

        <div className="pw-section2">
          <div className="pw-section2-top-section">
            <div className="pw-section2-top-section-text">
              <h1 className="pw-section2-top-section-heading">
                Your Passwords
              </h1>
              <p className="pw-section2-top-section-count">
                {filteredPasswordsArray.length}
              </p>
            </div>
            <div className="pm-section2-form-input-container">
              <div className="pm-section2-form-input-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="pm-section2-form-input-img"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="pm-section2-form-input-element"
                onChange={this.onChangeSearchString}
              />
            </div>
          </div>
          <hr className="pw-section2-hr" />

          <form className="pw-section2-form">
            <input
              type="checkbox"
              id="showPasswordCheckbox"
              onClick={() => this.onClickShowBtn()}
            />
            <label
              htmlFor="showPasswordCheckbox"
              className="pw-section2-form-text"
            >
              Show Passwords
            </label>
          </form>

          {filteredPasswordsArray.length === 0 ? (
            <div className="pw-section2-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="pw-section2-img"
              />
              <p className="pw-section2-p">No Passwords</p>
            </div>
          ) : (
            <ul className="pw-section2-ul-container">
              {filteredPasswordsArray.map(each => (
                <PasswordItem
                  passwordDetails={each}
                  key={each.id}
                  showPasswords={isShowPasswords}
                  onClickDeleteIcon={this.onClickDeleteIcon}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
