import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import storage from 'local-storage-fallback'
import Spotify from './containers/Spotify'
import Landing from './containers/Landing'
import Notfound from './containers/NotFound'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --header: white;
    --background: white;
    --page-color-transition: background 0.3s ease, color 0.1s ease; /* Reduced duration */
  }

  [data-theme='dark'] {
    --header: radial-gradient(circle, #FFD700, #FFA500);
    --background: black;
  }


  body {
    transition: transform 0.35s ease-in-out, var(--page-color-transition); /* Reduced duration */
    background-color: ${ props => props.theme.mode === 'dark' ? 'black': 'white' };
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    letter-spacing: -0.015em;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
`;



function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'dark' }
}

function App(props) {
  const [theme, setTheme] = useState(getInitialTheme());

  const changeMode = () => {

    const newTheme = theme.mode === 'light' ? { mode: 'dark' } : { mode: 'light' };
    setTheme(newTheme);
    storage.setItem('theme', JSON.stringify(newTheme))
  };

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
    setTheme(theme)
  },[theme]
  )

  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle />
      <React.Fragment>
        <Routes>
          <Route exact path = '/' element={<Landing currTheme = {theme} changeMode={changeMode} />} />
          <Route exact path = '/spotify' element={<Spotify currTheme = {theme} changeMode={changeMode} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        
      </React.Fragment>  
    </ThemeProvider>
  )
}

export default App
