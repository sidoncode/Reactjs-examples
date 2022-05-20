import React, { Component } from 'react'
import './App.css'

import MemoHookk from './components/MemoHookk'

export const UserContext = React.createContext()
class App extends Component {
  render() {
    return (
      <div className="App">
        <MemoHookk/>
        
      </div>
    )
  }
}
export default App