import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DarkMode from '../theme-toggle/theme-toggle';
import { useNavigate, useLocation } from 'react-router-dom'

const PillContainer = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: 50px;
  background-color: ${props => props.theme.mode !== 'dark' ? '#17141d' : '#17141d'};
  margin-top: 50px;
  margin-left: 40vw;
  border-radius: 25px;
  overflow: hidden;
  align-self: center;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 20%;
  }
`;

const PillItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.mode === 'dark' ? 'white' : 'white'};
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 2; // Ensures text is on top
  margin-left: 10px;
`;

const Slider = styled.div`
  position: absolute;
  height: 80%;
  margin-top: 5px;
  margin-left: 4px;
  width: 33.33%;
  background-color: ${({ color }) => color.background};
  border-radius: 25px;
  transition: background-color 0.7s;
    animation: ${({ where }) => where === 'spotify' ? `oscillate` : `oscillateBack`} 1s forwards;

  @keyframes oscillate {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes oscillateBack {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

// removed unused DarkModeSwitch

const colors = {
  whoami: { background: 'royalblue' },
  spotify: { background: '#1DB954' },
};

const MenuPill = (props) => {
  const [activeItem, setActiveItem] = useState('whoami');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Sync the active item with the current route
    if (location.pathname === '/' && activeItem !== 'whoami') {
      setActiveItem('whoami');
    } else if (location.pathname === '/spotify' && activeItem !== 'spotify') {
      setActiveItem('spotify');
    }
  }, [location.pathname, activeItem]);

  const handleClick = (item) => {
    if (item !== activeItem) {
      setActiveItem(item);
      if (item === 'whoami') {
        navigate('/');
      } else if (item === 'spotify') {
        navigate('/spotify');
      }
    }
  };

  const getString = () => {
    if (activeItem === 'whoami') {
      return 'whoami';  // Start position
    } else if (activeItem === 'spotify') {
      return 'spotify';  // Translate to the right (100%)
    }
    return 'spotify';  // Default to 0%
  };
  

  return (
    <PillContainer theme={props.theme}>
      <Slider color={colors[activeItem]} where={getString()}/>
      <PillItem
        active={activeItem === 'spotify'}
        color={colors.spotify}
        onClick={() => handleClick('whoami')}
        theme={props.theme}
      >
        whoami
      </PillItem>
      <PillItem
        
        active={activeItem === 'whoami'}
        color={colors.whoami}
        onClick={() => handleClick('spotify')}
        theme={props.theme}
      >
        spotify
      </PillItem>
      <PillItem
        active={activeItem === 'darkMode'}
        color={colors.darkMode}
      >
        <DarkMode currTheme={props.currTheme} changeMode={props.changeMode}/>
      </PillItem>
    </PillContainer>
  );
};

export default MenuPill;
