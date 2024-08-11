// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = itemDetails

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="item-li-container">
        <img className="item-image" src={imageUrl} alt={`img${id}`} />
        <div className="item-text">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="item-author-details">
            <img
              className="item-author-img"
              src={avatarUrl}
              alt={`avatar${id}`}
            />
            <p className="item-author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
