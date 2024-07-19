import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import storage from 'local-storage-fallback'

const GlobalStyle = createGlobalStyle`
  :root {
    --header: white;
    --background: #f4f3f2;
    --page-color-transition: background 0.1s ease, color 0.1s ease; /* Reduced duration */
  }

  [data-theme='dark'] {
    --header: radial-gradient(circle, #FFD700, #FFA500);
    --background: #11112a;
  }

  body {
    background: var(--background);
    transition: transform 0.25s ease-in-out, var(--page-color-transition); /* Reduced duration */
  }
`;

const DarkModeButton = styled.span`
  padding: 0.3em 0.5em;
  cursor: pointer;
  width: 30px; /* Reduced width */
  height: 30px; /* Reduced height */
  margin-left: 100px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.5); /* Adjusted scale */
`;

const DarkModeIcon = styled.div`
  position: absolute;
  width: 15px; /* Reduced width */
  height: 15px; /* Reduced height */
  border-radius: 7.5px; /* Adjusted border-radius to maintain circular shape */
  background: var(--header); /* Sun-like gradient */
  transform-origin: center center;
  transition: transform 0.5s ease-in-out, var(--page-color-transition);

  &::after {
    position: absolute;
    content: '';
    width: 12px; /* Reduced width */
    height: 12px; /* Reduced height */
    left: 6px; /* Adjusted left */
    bottom: 3px; /* Adjusted bottom */
    border-radius: 6px; /* Adjusted border-radius to maintain circular shape */
    background: #17141D;
    transform-origin: center center;
    transition: transform 0.25s ease, left 0.1s ease, bottom 0.1s ease, var(--page-color-transition);
  }

  & .ray {
    position: absolute;
    left: 5px; /* Adjusted position */
    top: 5px; /* Adjusted position */
    width: 4px; /* Reduced width */
    height: 4px; /* Reduced height */
    border-radius: 2px; /* Adjusted border-radius */
    background: var(--header);
    transform-origin: center;
    transition: transform 0.25s ease-in-out, var(--page-color-transition);
  }

  // Adjust the rays' transforms to fit the new size
  & .ray:nth-child(1) { transform: rotate(45deg) translateX(0); }
  & .ray:nth-child(2) { transform: rotate(90deg) translateX(0); }
  & .ray:nth-child(3) { transform: rotate(135deg) translateX(0); }
  & .ray:nth-child(4) { transform: rotate(180deg) translateX(0); }
  & .ray:nth-child(5) { transform: rotate(225deg) translateX(0); }
  & .ray:nth-child(6) { transform: rotate(270deg) translateX(0); }
  & .ray:nth-child(7) { transform: rotate(315deg) translateX(0); }
  & .ray:nth-child(8) { transform: rotate(360deg) translateX(0); }

  &[data-theme='dark'] {
    transform: scale(0.6);
  }
  
  &[data-theme='dark']::after {
    left: 9px; /* Adjusted left */
    bottom: 4px; /* Adjusted bottom */
    transform: scale(0);
  }
  
  &[data-theme='dark'] .ray:nth-child(1) { transform: rotate(45deg) translateX(-11px); } /* Adjusted translateX */
  &[data-theme='dark'] .ray:nth-child(2) { transform: rotate(90deg) translateX(-11px); } /* Adjusted translateX */
  &[data-theme='dark'] .ray:nth-child(3) { transform: rotate(135deg) translateX(-12px); } /* Adjusted translateX */
  &[data-theme='dark'] .ray:nth-child(4) { transform: rotate(180deg) translateX(-12px); } /* Adjusted translateX */
  &[data-theme='dark'] .ray:nth-child(5) { transform: rotate(225deg) translateX(-12px); } /* Adjusted translateX */
  &[data-theme='dark'] .ray:nth-child(6) { transform: rotate(270deg) translateX(-12px); } /* Adjusted translateX */
  &[data-theme='dark'] .ray:nth-child(7) { transform: rotate(315deg) translateX(-12px); } /* Adjusted translateX */
  &[data-theme='dark'] .ray:nth-child(8) { transform: rotate(360deg) translateX(-11px); } /* Adjusted translateX */
`;


function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'dark' }
}



const DarkMode = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  const changeMode = () => {

    const newTheme = theme.mode === 'light' ? { mode: 'dark' } : { mode: 'light' };
    setTheme(newTheme);
    storage.setItem('theme', JSON.stringify(newTheme))
  };

  return (
    <>
      <GlobalStyle />
      <DarkModeButton role="button" tabIndex="0" onClick={changeMode} onKeyDown={changeMode}>
        <DarkModeIcon className="darkmode_icon" data-theme={theme.mode}>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
        </DarkModeIcon>
      </DarkModeButton>
    </>
  );
};

export default DarkMode;
