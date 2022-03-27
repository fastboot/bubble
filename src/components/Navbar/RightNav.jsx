import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import Moon from '../../assets/icons/sun.png'
import Sun from '../../assets/icons/moon.png'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    margin-top: -10px;
    right: 0;
    height: 100vh;
    width: 300px;
    z-index: 15;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const StyledLink = styled(Link)`
    display: flex;
    color: ${props => props.theme.mode === 'dark' ? 'white': 'black'};
    text-decoration: none;
    padding: 4px;
    white-space: nowrap;
    margin-left: 15px;
    &.active {
      color: ${props => props.theme.mode === 'dark' ? 'black': 'white'};
      border-radius: 10px;
      background-color: ${props => props.theme.mode === 'dark' ? 'white': 'black'};
    }

    @media (max-width: 768px) {
        color: white;
        margin-left: -10px;
        padding: 10px 10px;
        &.active {
          color: white;
          border-radius: 10px;
          background-color: black;
        }
    }
`

const Button = styled.input`
  height: 30px;
  width: 30px;
`
const NavButtons = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 90px;
  padding-left: 40px;
  @media (max-width: 768px) {
    margin-left: -15px;
    padding: 10px 10px;
  }
`

const RightNav = (props) => {
  const changeTheme = () => {
    props.updateTheme((props.currTheme.mode === 'dark' ? { mode: 'light' }: { mode: 'dark' }))
  }

  return (
    <Ul open={props.open}>
      <StyledLink to = '/developer' > Developer </StyledLink>
      <StyledLink to = '/cp' > Programming </StyledLink>
      <StyledLink to = '/spotify' > Spotify </StyledLink>
      <NavButtons>
        <Button type="image" src = { props.currTheme.mode === 'dark' ? Moon: Sun } onClick = { changeTheme } />
      </NavButtons>
    </Ul>
  )
}

export default RightNav