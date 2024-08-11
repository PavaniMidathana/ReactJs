// Write your code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BsFillStarFill, BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    productDetails: {},
    count: 1,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = {
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        price: data.price,
        description: data.description,
        brand: data.brand,
        totalReviews: data.total_reviews,
        rating: data.rating,
        availability: data.availability,
        similarProducts: data.similar_products.map(each => ({
          id: each.id,
          imageUrl: each.image_url,
          title: each.title,
          style: each.style,
          price: each.price,
          description: each.description,
          brand: each.brand,
          totalReviews: each.total_reviews,
          rating: each.rating,
          availability: each.availability,
        })),
      }

      console.log(data)
      console.log(updatedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        productDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  onClickIncrementBtn = () => {
    this.setState(pre => ({count: pre.count + 1}))
  }

  onClickDecrementBtn = () => {
    const {count} = this.state

    if (count > 1) {
      this.setState(pre => ({count: pre.count - 1}))
    }
  }

  renderSuccessView = () => {
    const {productDetails, count} = this.state
    const {
      imageUrl,
      title,
      price,
      description,
      brand,
      totalReviews,
      rating,
      availability,
      similarProducts,
    } = productDetails

    return (
      <div className="product-item-bg-container">
        <div className="product-item-sec1">
          <img src={imageUrl} alt="product" className="product-item-sec1-img" />
          <div className="product-item-sec1-text">
            <h1 className="product-item-sec1-text-title">{title}</h1>
            <p className="product-item-sec1-text-price">Rs {price} /- </p>
            <div className="product-item-sec1-text-rating-and-review">
              <p className="product-item-sec1-text-rating">
                {rating} <BsFillStarFill className="similar-item-start-icon" />
              </p>
              <p className="product-item-sec1-text-review">
                {totalReviews} Reviews
              </p>
            </div>
            <p className="product-item-sec1-text-description">{description}</p>
            <p className="product-item-sec1-text-description">
              <span className="product-item-sec1-text-available">
                Available:{' '}
              </span>
              {availability}
            </p>
            <p className="product-item-sec1-text-description">
              <span className="product-item-sec1-text-available">Brand: </span>
              {brand}
            </p>
            <hr className="product-item-hr" />
            <div className="product-item-btn-container">
              <button
                type="button"
                className="product-item-count-btn"
                onClick={this.onClickDecrementBtn}
                data-testid="minus"
              >
                <BsDashSquare />
              </button>
              <p className="product-item-count">{count}</p>
              <button
                type="button"
                className="product-item-count-btn"
                onClick={this.onClickIncrementBtn}
                data-testid="plus"
              >
                <BsPlusSquare />
              </button>
            </div>
            <button type="button" className="product-item-add-to-cart-btn">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="product-item-sec2">
          <h1 className="product-item-sec2-heading">Similar Products</h1>
          <ul className="product-item-sec2-ul-container">
            {similarProducts.map(each => (
              <SimilarProductItem
                similarProductItemDetails={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  onClickContinueBtn = () => {
    const {history} = this.props
    history.push('/products')
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="error view"
        className="failure-view-img"
      />
      <h1 className="failure-view-heading">Product Not Found</h1>
      <button
        type="button"
        className="failure-view-btn"
        onClick={this.onClickContinueBtn}
      >
        Continue Shopping
      </button>
    </div>
  )

  renderSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderSwitch()}
      </>
    )
  }
}

export default ProductItemDetails
