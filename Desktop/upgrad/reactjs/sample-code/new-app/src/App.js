import React, { Component } from 'react'
import './App.css'

import HookCounterOne from './components/HookCounterOne'
class App extends Component {
  render() {
    return (
      <div className="App">
      <HookCounterOne/>
      </div>
    )
  }
}
export default App