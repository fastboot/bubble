import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { NavLink as Link } from 'react-router-dom'

const Nav = styled.nav`
  width: 100vw;
  height: 62px;
  border-bottom: 50px;
  display: flex;
  top: 0;
  justify-content: space-between;
`

const LogoLink = styled(Link)`
  text-decoration: none;
  position: relative;
  display: block; 
  line-height: 15px;
  padding-left: 4vw;
  color: ${props => props.theme.mode === 'dark' ? 'white': 'black'};
`

const Navbar = (props) => {
  
  return (
    <Nav>
      <LogoLink to = '/' > <h1> ?¿ </h1> </LogoLink>
      <Burger {...props} />
    </Nav>
  )
}

export default Navbar