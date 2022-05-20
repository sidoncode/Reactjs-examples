import React, { Component } from 'react'
import './App.css'

import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
class App extends Component {
  render() {
    return (
      <div className="App">

      <UserContext.Provider value={'Mr. Pavan'}>
        <ComponentC/>
      </UserContext.Provider>
        
      </div>
    )
  }
}
export default App