import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: transparent;
    backdrop-filter: blur(5px);
    position: relative;
    height: 70px;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    z-index: 999999999;
    justify-content: space-between;
`

export const StyledLink = styled(Link)`
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
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  line-height: 25px;
  padding-left: 70px;
  color: ${props => props.theme.mode === 'dark' ? 'white': 'black'};
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.input`
  height: 30px;
  width: 30px;
`

export const NavButtons = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 90px;
  padding-left: 40px;
`
