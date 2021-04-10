import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import useSound from 'use-sound'
import storage from 'local-storage-fallback'
import  Whoami from './containers/Whoami'
import WatchPlay from './containers/Watch&Play'
import Home from './containers/Home'
import Post from './containers/Posts'
import Geeky from './containers/Geeky'
import Notfound from './containers/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ props => props.theme.mode === 'dark' ? 'black': 'white' };
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    transition: all 0.55s linear;
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
          <Route exact path = '/' component={() => (<Home currTheme = {theme} />)} />
          <Route exact path = '/whoami' component={() => (<Whoami currTheme = {theme} />)} />
          <Route exact path = '/posts' component={() => (<Post currTheme = {theme} />)} />
          <Route exact path = '/geeky' component={() => (<Geeky currTheme = {theme} />)} />
          <Route exact path = '/watchplay' component={() => (<WatchPlay currTheme = {theme} />)} />
          <Route component = {Notfound} />
        </Switch>
        <Footer />
      </React.Fragment>  
    </ThemeProvider>
  )
}

export default App
