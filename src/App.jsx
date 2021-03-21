import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import storage from 'local-storage-fallback'
import Home from './containers/Home'
import Notfound from './containers/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ props => props.theme.mode === 'dark' ? 'black': 'white' };
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
  }
`

function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
}

function App() {

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
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/posts' component = {Home} />
          <Route exact path = '/geeky' component = {Home} />
          <Route exact path = '/social' component = {Home} />
          <Route exact path = '/watch&play' component = {Home} />
          <Route component = {Notfound} />
        </Switch>
        <Footer />
      </React.Fragment>  
    </ThemeProvider>
  )
}

export default App
