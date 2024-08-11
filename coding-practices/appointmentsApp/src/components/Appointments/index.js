// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItem from '../AppointmentItem'

const initialAppointmentsList = []

class Appointments extends Component {
  state = {
    appointmentsList: initialAppointmentsList,
    appointment: '',
    dateAndTime: '',
    starred: false,
  }

  onSubmitAddBtn = event => {
    event.preventDefault()

    const {appointment, dateAndTime} = this.state
    const newAppointment = {
      id: uuidv4(),
      appointment,
      dateAndTime: format(new Date(dateAndTime), 'dd MMMM yyyy, EEEE'),
      isStarred: false,
    }

    this.setState(pre => ({
      appointmentsList: [...pre.appointmentsList, newAppointment],
      appointment: '',
      dateAndTime: '',
    }))
  }

  onChangeTitleInput = event => {
    this.setState({appointment: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({dateAndTime: event.target.value})
  }

  onClickStarBtn = () => {
    this.setState(pre => ({starred: !pre.starred}))
  }

  onStarred = id => {
    this.setState(pre => ({
      appointmentsList: pre.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  render() {
    const {appointmentsList, appointment, dateAndTime, starred} = this.state
    let filteredAppointmentsList
    if (starred) {
      filteredAppointmentsList = appointmentsList.filter(
        each => each.isStarred === true,
      )
    } else {
      filteredAppointmentsList = appointmentsList
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="section-1">
            <form className="form-container">
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="inputEl" className="input-label">
                TITLE
              </label>
              <input
                type="text"
                id="inputEl"
                className="input-title"
                onChange={this.onChangeTitleInput}
                placeholder="Title"
                value={appointment}
              />
              <label htmlFor="dateEl" className="input-label">
                DATE
              </label>
              <input
                type="date"
                id="dateEl"
                className="input-date"
                onChange={this.onChangeDateInput}
                value={dateAndTime}
              />
              <button
                type="button"
                className="add-button"
                onClick={this.onSubmitAddBtn}
              >
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="section-2">
            <div className="heading-container">
              <h1 className="heading-2">Appointments</h1>
              <button
                type="button"
                className="starred-button"
                onClick={this.onClickStarBtn}
              >
                Starred
              </button>
            </div>
            <ul className="ul-container">
              {filteredAppointmentsList.map(each => (
                <AppointmentItem
                  appointmentDetails={each}
                  key={each.id}
                  onStarred={this.onStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
