// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isRegistered: false,
    fElValue: '',
    lElValue: '',
    fnameValue: '',
    lnameValue: '',
  }

  onChangeFnameValue = event => {
    this.setState({fnameValue: event.target.value, fElValue: ''})
  }

  onChangeLnameValue = event => {
    this.setState({lnameValue: event.target.value, lElValue: ''})
  }

  onBlurFnameValue = event => {
    if (event.target.value === '') {
      this.setState({fElValue: 'Required'})
    }
  }

  onBlurLnameValue = event => {
    if (event.target.value === '') {
      this.setState({lElValue: 'Required'})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {fnameValue, lnameValue} = this.state
    if (fnameValue === '') {
      this.setState({fElValue: 'Required'})
    }
    if (lnameValue === '') {
      this.setState({lElValue: 'Required'})
    }
    if (fnameValue !== '' && lnameValue !== '') {
      this.setState(pre => ({isRegistered: !pre.isRegistered}))
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(pre => ({
      isRegistered: !pre.isRegistered,
      fnameValue: '',
      lnameValue: '',
    }))
  }

  getRegistrationForm = () => {
    const {fElValue, lElValue, fnameValue, lnameValue} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label htmlFor="fname" className="labelEl">
          FIRST NAME
        </label>
        <input
          type="text"
          id="fname"
          placeholder="First name"
          className="inputEl"
          onChange={this.onChangeFnameValue}
          onBlur={this.onBlurFnameValue}
          value={fnameValue}
        />
        <p className="pEl">{fElValue}</p>

        <label htmlFor="lname" className="labelEl">
          LAST NAME
        </label>
        <input
          type="text"
          id="lname"
          placeholder="Last name"
          className="inputEl"
          onChange={this.onChangeLnameValue}
          onBlur={this.onBlurLnameValue}
          value={lnameValue}
        />
        <p className="pEl">{lElValue}</p>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  getRegistrationSuccessCard = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isRegistered} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="card-container">
          {isRegistered === true
            ? this.getRegistrationSuccessCard()
            : this.getRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
