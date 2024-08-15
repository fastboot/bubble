import React, {useState} from 'react';
import styled from 'styled-components';
// import Burger from './Burger';
import { NavLink as Link, NavLink, useNavigate } from 'react-router-dom'
import { Icons, Navbar, NavbarItems, NavbarSlider, NavigationWrapper, NewNavbar, StripLogo, ToggleContainer, ToggleSwitch } from './styles';
import spotifyoriginal from '../../assets/icons/spotifyoriginal.png'
import DarkMode from '../theme-toggle/theme-toggle';
import MenuPill from './menu';


const NewNavigation = (props) => {
    const [toggled, setToggled] = useState(false);
    const navigate = useNavigate();

  const handleToggle = () => { 
    console.log(toggled);
    
    if (toggled) {
      navigate('/spotify')
      setToggled(!toggled);
    } else  {
      navigate('/');
      setToggled(!toggled);
    }
    
  };

  return (
    <>
    <MenuPill {...props}/>
    </>)
};

export default NewNavigation