import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Follow from './components/Spotify/Follow'
// import NowPlaying from './components/Spotify/NowPlaying'
import Home from './containers/Home'
import Notfound from './containers/NotFound'


function App() {
  return (
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/posts' component = {Home} />
        <Route exact path = '/geeky' component = {Home} />
        <Route exact path = '/social' component = {Home} />
        <Route exact path = '/watch&play' component = {Home} />
        <Route component = {Notfound} />
      </Switch>
  )
}

export default App
