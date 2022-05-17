import React, { Component } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Mainn from './components/Mainn'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Welcome/>
      <Mainn/>
      </div>
    )
  }
}
export default App