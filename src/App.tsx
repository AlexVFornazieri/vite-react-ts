import { Route, Switch } from 'react-router-dom'

import './App.css'
import { Echarts } from './pages/Echarts'
import { Home } from './pages/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/echarts'>
          <Echarts />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
