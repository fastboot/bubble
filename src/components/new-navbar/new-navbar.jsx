import React, {useState} from 'react';
import styled from 'styled-components';
// import Burger from './Burger';
import { NavLink as Link, useNavigate } from 'react-router-dom'
import { Icons, Navbar, NavbarItems, NavbarSlider, NavigationWrapper, NewNavbar, StripLogo, ToggleContainer, ToggleSwitch } from './styles';
import spotifyoriginal from '../../assets/icons/spotifyoriginal.png'
import DarkMode from '../theme-toggle/theme-toggle';


// const Nav = styled.nav`
//   width: 100vw;
//   height: 62px;
//   border-bottom: 50px;
//   display: flex;
//   top: 0;
//   justify-content: space-between;
// `

// const LogoLink = styled(Link)`
//   text-decoration: none;
//   position: relative;
//   margin: 0;
//   color: ${props => props.theme.mode === 'dark' ? 'white': 'black'};
// `

const NewNavigation = () => {
    const [toggled, setToggled] = useState(false);
    const navigate = useNavigate();

  const handleToggle = () => { 
    setToggled(!toggled);
  };

  return (
    // <ToggleSwitch toggled={toggled}>
    //   <input type="checkbox" onChange={handleToggle} />
    //   <span></span>
    // </ToggleSwitch>
    <Navbar >

      <NavbarSlider toggled={toggled} onClick={handleToggle}/>
      <NavbarItems color={(!toggled ? 'black': 'white')} margin={'25px'} onClick={handleToggle}>Home</NavbarItems>
      <NavbarItems color={'white'} margin={'120px'} onClick={handleToggle}>Spotify</NavbarItems>
      <DarkMode />
    </Navbar>
  );
};

export default NewNavigation