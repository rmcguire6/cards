import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Match from './Match'
import Verbs from './Verbs'

const AppRouter = () => {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul className='navlist'>
            <li>
              <Link to='/' className='navlist--item'>Match Words</Link>
            </li>
            <li>
              <Link to='/match_forms' className='navlist--item'>Match Verbs</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/match_forms'>
            <Verbs />
          </Route>
          <Route path='/'>
            <Match />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export { AppRouter as default }
