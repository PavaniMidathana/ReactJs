import {Component} from 'react'
import TabItem from './components/TabItem'
import ImageItem from './components/ImageItem'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]
const imagesList = [
  {
    id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '04ac6b9f-b7e7-45f7-a8fc-fd48f3f72526',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'a132f546-5b2b-4c0d-b9e4-e524bdf904cc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'd89386da-94db-4275-9cb5-249c6e071a19',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'd810bbb0-1683-407a-8db6-898fe7b75782',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '176aab62-e86a-4ccd-8b89-5b83c3f02506',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '0e8daf1b-45b0-4eb0-9dde-383fede78a9b',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1a38bf4a-659d-4470-956c-56c1bedd26ac',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ab',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/ooti-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '7a72c38e-a83d-48eb-b9ce-ae3c0361cc49',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '97a33ed5-98ed-4c95-a8f0-1595880b3b69',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '07e20159-a950-4c22-9ca8-5ed71563ae24',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/maldives-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '43883239-8a28-47dc-9e93-43ef31654c17',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-lake-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/emerald-thumbnail-lake-img.png',
    category: 'PLACE',
  },
  {
    id: '49865ac4-b5e8-4d04-893b-d69ad6004da8',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '649ab251-7fd6-4d65-aa0f-39020ce25932',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1d0d1c41-e05e-4820-8614-34ee5ada20e0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-hills-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/jammu-thumbnail-hills-img.png',
    category: 'PLACE',
  },
  {
    id: '88b4ab36-a0c1-4c56-9ce5-3b80dd8c7669',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fierce-coyote-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fierce-thumbnail-coyote-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8a841bf8-3222-44da-b0fb-4c60190402d7',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lidder-valley-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lidder-thumbnail-valley-img.png',
    category: 'PLACE',
  },
  {
    id: 'd406e63c-eaaf-49ea-88a6-ed6a1572eb97',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: 'e997ebf9-9a47-4b7e-9035-01ae372d73dc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dragon-fruit-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dragon-thumbnail-fruit-img.png',
    category: 'FRUIT',
  },
  {
    id: 'c7fbe10e-3282-4fca-815b-91b75d5228cb',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/goa-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/goa-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '4210274c-7304-44d6-8690-c5251252cd10',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '057b6193-a80d-4036-9e6e-fe847c99fbb6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/mixed-fruits-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/mixed-thumbnail-fruits-img.png',
    category: 'FRUIT',
  },
  {
    id: '4e56c59b-835b-4802-87fe-77aaaa5b9526',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/fox-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/fox-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'ad75a7b1-0875-4700-977b-2c45924509aa',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lotus-temple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/lotus-thumbnail-temple-img.png',
    category: 'PLACE',
  },
  {
    id: '525aba17-ed5c-4f09-ad1c-b6bff222c97a',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/match-game/dog-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/dog-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'c6c66b00-c130-47d2-9d3a-1c3378d08aba',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '6078b408-4f10-46d3-8815-db14403dbd73',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'a2baca84-3beb-49d1-bced-f9a88c161bec',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/camel-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/camel-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1edac278-8390-4da9-b914-5f41fb49283c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png',
    category: 'FRUIT',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
    index: 0,
    isGameEnded: false,
    score: 0,
    timer: 60,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {timer} = this.state
    if (timer === 0) {
      this.setState({isGameEnded: true})
      clearInterval(this.timerId)
    } else {
      this.setState(pre => ({
        timer: pre.timer - 1,
      }))
    }
  }

  onChangeTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  onClickPlayAgainBtn = () => {
    this.setState({isGameEnded: false, timer: 60, score: 0})
  }

  onClickedImg = id => {
    const {index} = this.state
    if (id === imagesList[index].id) {
      const newIndex = Math.ceil(Math.random() * imagesList.length)
      this.setState(pre => ({
        score: pre.score + 1,
        index: newIndex,
      }))
    } else {
      this.setState({isGameEnded: true})
      clearInterval(this.timerId)
    }
  }

  render() {
    const {activeTabId, isGameEnded, score, timer, index} = this.state
    const filteredImagesList = imagesList.filter(
      each => each.category === activeTabId,
    )

    return (
      <div className="mg-bg-container">
        <nav className="mg-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="mg-header-logo"
          />
          <ul className="mg-header-text">
            <li>
              <p className="mg-header-score-text">Score:</p>
              <p className="mg-header-score">{score}</p>
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="mg-header-timer-img"
              />
              <p className="mg-header-timer-text">{timer} sec</p>
            </li>
          </ul>
        </nav>
        <div className="mg-body">
          {isGameEnded ? (
            <div className="mg-body-game-ended-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
                className="mg-body-game-ended-card-img"
              />
              <p className="mg-body-game-ended-card-score-text">YOUR SCORE</p>
              <p className="mg-body-game-ended-card-score">{score}</p>
              <button
                type="button"
                className="mg-body-game-ended-card-btn"
                onClick={this.onClickPlayAgainBtn}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                  className="mg-header-timer-img"
                />
                <p>PLAY AGAIN</p>
              </button>
            </div>
          ) : (
            <div className="mg-body-card">
              <img
                className="mg-body-card-thumbnail-img"
                src={imagesList[index].imageUrl}
                alt="match"
              />

              <ul className="mg-body-card-tabs-container">
                {tabsList.map(each => (
                  <TabItem
                    tabDetails={each}
                    key={each.tabId}
                    onChangeTabItem={this.onChangeTabItem}
                    isActive={activeTabId === each.tabId}
                  />
                ))}
              </ul>

              <ul className="mg-body-card-img-container">
                {filteredImagesList.map(each => (
                  <ImageItem
                    imageDetails={each}
                    key={each.id}
                    onClickedImg={this.onClickedImg}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
