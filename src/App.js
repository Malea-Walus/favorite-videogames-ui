import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [videoGameList, setVideoGamelist] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/favoriteVideogames`,{
        method:'GET',
        mode: 'cors',
        headers: {
          'accept': 'application/json'
        }
      })
      const data = await response.json()
      setVideoGamelist(data)
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <ul>
        {videoGameList.map(game => {
          return (<li key={game._id}>{game.name}</li>) 
        })}
      </ul>
    </div>
  );
}

export default App;
