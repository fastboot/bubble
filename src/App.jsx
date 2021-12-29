import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import storage from 'local-storage-fallback'
import Spotify from './containers/Spotify'
import Home from './containers/Home'
import Post from './containers/Posts'
import Developer from './containers/Developer'
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
        <Routes>
          <Route exact path = '/' element={<Home currTheme = {theme} />} />
          <Route exact path = '/posts' element={<Post currTheme = {theme} />} />
          <Route exact path = '/posts/:postId' element={<Post currTheme = {theme} />} />
          <Route exact path = '/cp' element={<CP currTheme = {theme} />} />
          <Route exact path = '/developer' element={<Developer currTheme = {theme} />} />
          <Route exact path = '/spotify' element={<Spotify currTheme = {theme} />} />
          <Route component = {Notfound} />
        </Routes>
        <Footer updateTheme = {setTheme} currTheme = {theme} />
      </React.Fragment>  
    </ThemeProvider>
  )
}

export default App
