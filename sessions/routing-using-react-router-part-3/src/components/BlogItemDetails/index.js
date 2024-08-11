import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const data = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await data.json()
    const updatedData = {
      title: jsonData.title,
      imageUrl: jsonData.image_url,
      avatarUrl: jsonData.avatar_url,
      author: jsonData.author,
      content: jsonData.content,
    }
    console.log(updatedData)
    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
