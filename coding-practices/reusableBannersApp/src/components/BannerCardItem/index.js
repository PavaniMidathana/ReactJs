import './index.css'

// Write your code here.
const BannerCardItem = props => {
  const {bannerCardItem} = props
  const {headerText, description, className} = bannerCardItem

  const ele = (
    <li className={className}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )

  return ele
}

export default BannerCardItem
