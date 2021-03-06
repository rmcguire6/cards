import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AddMatches from './AddMatches'
import Gender from './Gender'
import Match from './Match'
import Nouns from './Nouns'
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
            <li>
              <Link to='/match_nouns' className='navlist--item'>Match Nouns</Link>
            </li>
            <li>
              <Link to='/match_gender' className='navlist--item'>Match Gender</Link>
            </li>
            <li>
              <Link to='/add_match' className='navlist--item'>Add A Match</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/match_forms'>
            <Verbs />
          </Route>
          <Route path='/match_nouns'>
            <Nouns />
          </Route>
          <Route path='/match_gender'>
            <Gender />
          </Route>
          <Route path='/add_match'>
            <AddMatches />
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
