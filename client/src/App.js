import './App.css'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ShowsHome from './screens/ShowsHome'
import ShowDetails from './screens/ShowDetails'
import SuitDetails from './screens/SuitDetails'
import Nav from './components/Nav'
import AllSuits from './screens/AllSuit'
import AllPilots from './screens/AllPilot'
import PilotDetails from './screens/PilotDetails'
import CreateSuit from './screens/CreateSuit'
import CommentBoard from './screens/CommentBoard'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={ShowsHome} />
            <Route path="/suit/find/:show_id" component={ShowDetails} />
            <Route
              path="/suit/:id"
              component={(props) => <SuitDetails {...props} />}
            />
            <Route
              path="/add/:id"
              component={(props) => <CreateSuit {...props} />}
            />
            <Route path="/comment" component={CommentBoard} />
            <Route path="/suit" component={AllSuits} />
            <Route path="/pilot" component={AllPilots} />
            <Route
              path="/find/:id"
              component={(props) => <PilotDetails {...props} />}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
