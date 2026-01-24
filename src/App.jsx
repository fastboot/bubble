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
    --page-color-transition: background 0.3s ease, color 0.1s ease;
  }

  [data-theme='dark'] {
    --header: radial-gradient(circle, #FFD700, #FFA500);
    --background: black;
  }

  * {
    box-sizing: border-box;
  }

  body {
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.35s ease-in-out, var(--page-color-transition);
    background: ${ props => props.theme.mode === 'dark' 
      ? 'linear-gradient(135deg, #1A1A1A 0%, #2D1B69 50%, #1A1A1A 100%)'
      : 'linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 50%, #FFFFFF 100%)'};
    color: ${ props => props.theme.mode === 'dark' ? 'white': '#1A1A1A' };
    letter-spacing: -0.015em;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 110vh;
  }

  html {
    scroll-behavior: smooth;
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
