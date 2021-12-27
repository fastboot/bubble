import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    // background: rgba(0.5, 0, 0, 0);
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
    width: 80px;
    text-decoration: none;
    white-space: nowrap;
    margin-left: 10px;
    &.active {
      color: red;
    }
`

export const Chip = styled.div`
    padding: 5px;
    border-radius: 10px;
    height: 25px;
    line-height: -10px;
    display: inline-block;
    line height: -5px;
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
