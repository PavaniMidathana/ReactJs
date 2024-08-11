import './index.css'

const Emoji = props => {
  const {details, onClikedEmoji} = props
  const {name, imageUrl} = details

  const giveFeedback = () => {
    onClikedEmoji()
  }

  return (
    <li className="li-container" onClick={giveFeedback}>
      <img src={imageUrl} className="li-emoji-image" alt={name} />
      <p className="li-emoji-text">{name}</p>
    </li>
  )
}

export default Emoji
