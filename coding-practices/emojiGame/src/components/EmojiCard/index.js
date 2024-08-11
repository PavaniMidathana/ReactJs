// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const clickedEmoji = () => {
    onClickedEmoji(id)
  }

  return (
    <li className="emoji-li-container" onClick={clickedEmoji}>
      <button className="emoji-li-btn" type="button">
        <img className="emoji-li-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
