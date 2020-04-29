import React, { Fragment } from 'react';
import './App.css';
export default class App extends React.Component {
  state = {
    videoGameList: [], 
    error: ''
  }

  save = async (videoGame) => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/favoriteVideogames`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(videoGame)
    })

    const succesful = response.status === 201

  }

  fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/favoriteVideogames`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'accept': 'application/json'
      }
    })
    const data = await response.json()
    this.setState({videoGameList:data}) 

    
  }

  componentDidMount() {
    this.fetchData()
  }

  renderError = () => {
    return this.state.error
      ? (<div>{this.state.error.message}</div>)
      : (<Fragment />)
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.videoGameList.map(game => {
            return (<li key={game._id}>{game.name}</li>)
          })}
        </ul>
        <button onClick={this.save}>save</button>
      </div>

    )
  }
}
