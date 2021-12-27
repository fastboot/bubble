import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import storage from 'local-storage-fallback'
import  Whoami from './containers/Whoami'
import Social from './containers/Social'
import Pictures from './containers/Pictures'
import Spotify from './containers/Spotify'
import Home from './containers/Home'
import GeekHome from './containers/GeekHome'
import Post from './containers/Posts'
import Geeky from './containers/Geeky'
import CP from './containers/CP'
import Notfound from './containers/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ props => props.theme.mode === 'dark' ? 'black': 'white' };
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    font-family: "Wotfard", Futura, -apple-system, sans-serif;
  }
`

function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
}

function App(props) {
 
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  },[theme]
  )

  return (
    <ThemeProvider theme = {theme}>
      <React.Fragment>
        <GlobalStyle />
        <Navbar updateTheme = {setTheme} currTheme = {theme} />
        <Switch>
          <Route exact path = '/' component={() => (<GeekHome currTheme = {theme} />)} />
          <Route exact path = '/posts' component={() => (<Post currTheme = {theme} />)} />
          <Route exact path = '/posts/:postId' component={() => (<Post currTheme = {theme} />)} />
          <Route exact path = '/cp' component={() => (<CP currTheme = {theme} />)} />
          <Route exact path = '/developer' component={() => (<Geeky currTheme = {theme} />)} />
          <Route exact path = '/spotify' component={() => (<Spotify currTheme = {theme} />)} />
          <Route component = {Notfound} />
        </Switch>
        <Footer updateTheme = {setTheme} currTheme = {theme} />
      </React.Fragment>  
    </ThemeProvider>
  )
}

export default App
