import './App.css'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ShowsHome from './screens/ShowsHome'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={ShowsHome} />
          </Switch>
        </main>
      </div>
    )
  }
}
