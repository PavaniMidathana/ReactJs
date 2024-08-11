import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class GithubPopularRepos extends Component {
  state = {
    popularRepos: [],
    apiStatus: apiStatusConstants.initial,
    activeLanguage: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  getPopularRepos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const {activeLanguage} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguage}`
    const response = await fetch(url)
    console.log(response.status)

    if (response.ok) {
      const data = await response.json()
      const updatedPopularRepos = data.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))

      this.setState({
        popularRepos: updatedPopularRepos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  onChangeActiveLanguage = activeLanguage => {
    this.setState({activeLanguage}, this.getPopularRepos)
  }

  renderRepositoryItems = () => {
    const {popularRepos} = this.state

    return (
      <ul className="popular-repos-repository-items-ul-container">
        {popularRepos.map(each => (
          <RepositoryItem repositoryItemDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-img"
      />
      <p className="failure-view-text">Something Went Wrong</p>
    </div>
  )

  getView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRepositoryItems()
      case apiStatusConstants.loading:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {activeLanguage} = this.state

    return (
      <div className="popular-repos-bg-container">
        <h1 className="popular-repos-heading">Popular</h1>
        <ul className="popular-repos-ul-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              filterItemDetails={each}
              onChangeActiveLanguage={this.onChangeActiveLanguage}
              isActive={activeLanguage === each.id}
            />
          ))}
        </ul>
        {this.getView()}
      </div>
    )
  }
}

export default GithubPopularRepos
