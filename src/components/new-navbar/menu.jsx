import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import DarkMode from '../theme-toggle/theme-toggle';
import { NavLink as Link, NavLink, useNavigate, useLocation } from 'react-router-dom'

const PillContainer = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: 50px;
  background-color: #17141d;
  margin-top: 50px;
  margin-left: 45%;
  border-radius: 25px;
  overflow: hidden;
  align-self: center;
`;

const PillItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 2; // Ensures text is on top
  margin-left: 15px;
  
  ${({ active, color }) =>
    active &&
    css`
      color: ${color.text};
    `}
`;

const Slider = styled.div`
  position: absolute;
  height: 80%;
  margin-top: 5px;
  margin-left: 4px;
  width: 33.33%;
  background-color: ${({ color }) => color.background};
  border-radius: 25px;
  transition: transform 0.3s, background-color 0.3s;
  transform: ${({ position }) => `translateX(${position}%)`};
`;

const DarkModeSwitch = styled.input`
  cursor: pointer;
`;

const colors = {
  whoami: { background: 'white', text: 'black' },
  spotify: { background: '#1DB954', text: 'white' },
  darkMode: { background: '#333', text: 'white' },
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

  const getPosition = () => {
    if (activeItem === 'whoami') {
      return 0;  // Start position
    } else if (activeItem === 'spotify') {
      return 100;  // Translate to the right (100%)
    }
    return 0;  // Default to 0%
  };
  

  return (
    <PillContainer>
      <Slider color={colors[activeItem]} position={getPosition()} />
      <PillItem
        active={activeItem === 'whoami'}
        color={colors.whoami}
        onClick={() => handleClick('whoami')}
      >
        whoami
      </PillItem>
      <PillItem
        active={activeItem === 'spotify'}
        color={colors.spotify}
        onClick={() => handleClick('spotify')}
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
