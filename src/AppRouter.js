import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AddMatches from './AddMatches'
import Match from './Match'

const AppRouter = () => {
  return (
    <>
    <header>
    <h1>Fast Cards</h1>
    </header>
    <Router>
      <div className='container'>
        <nav>
          <ul className='navlist'>
            <li>
              <Link to='/' className='navlist--item'>Match Words</Link>
            </li>
            <li>
              <Link to='/add_match' className='navlist--item'>Add A Match</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/add_match'>
            <AddMatches />
          </Route>
          <Route path='/'>
            <Match />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}
export { AppRouter as default }
