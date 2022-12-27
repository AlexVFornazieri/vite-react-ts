import { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Switch>
        <Route path='/contacts'>
          <div>
            It's contacts page
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </Route>

        <Route path='/'>
          <div>
            It's home page
          </div>
          <div>
            <Link to="/contacts">Contacts</Link>
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App
