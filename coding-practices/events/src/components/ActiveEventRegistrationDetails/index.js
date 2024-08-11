// Write your code here
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const getNoActiveEventView = () => (
    <p className="no-active-p">
      Click on an event, to view its registration details
    </p>
  )

  const getYetToRegisterView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-p">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-to-register-btn">
        Register Here
      </button>
    </>
  )

  const getRegistrationsClosedView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-register-img"
      />
      <h1 className="yet-to-register-h">Registrations Are Closed Now!</h1>
      <p className="yet-to-register-p">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </>
  )

  const getRegisteredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="yet-to-register-h">
        You have already registered for the event
      </h1>
    </>
  )

  const {apiStatus} = props
  switch (apiStatus) {
    case apiStatusConstants.initial:
      return getNoActiveEventView()
    case apiStatusConstants.yetToRegister:
      return getYetToRegisterView()
    case apiStatusConstants.registrationsClosed:
      return getRegistrationsClosedView()
    case apiStatusConstants.registered:
      return getRegisteredView()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
