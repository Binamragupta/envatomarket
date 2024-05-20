import React from 'react'
import BackgroundAnimation from './BackgroundAnimation';
import './App.css';
import Homepage from './Homepage';

const App = () => {
  return (
    <div className="App">
      <BackgroundAnimation />
        <div className="main-app">
            <Homepage/>
        </div>
    </div>
  )
}

export default App

