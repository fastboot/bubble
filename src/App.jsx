import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import storage from 'local-storage-fallback'
import Spotify from './containers/Spotify'
import Home from './containers/Home'
import Landing from './containers/Landing'
import Notfound from './containers/NotFound'
import Footer from './components/Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import NewNavigation from './components/new-navbar/new-navbar'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ props => props.theme.mode === 'dark' ? 'black': 'white' };
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
`

function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'dark' }
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
        <Routes>
          <Route exact path = '/' element={<Landing currTheme = {theme} />} />
          <Route exact path = '/spotify' element={<Spotify currTheme = {theme} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        
      </React.Fragment>  
    </ThemeProvider>
  )
}

export default App
