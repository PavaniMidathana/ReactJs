// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameEnded} = props

  return isGameEnded ? (
    <nav className="navbar-container">
      <div className="navbar-img-container">
        <img
          className="navbar-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
    </nav>
  ) : (
    <nav className="navbar-container">
      <div className="navbar-img-container">
        <img
          className="navbar-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="navbar-score-container">
        <p className="navbar-score">Score: {score}</p>
        <p className="navbar-score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
