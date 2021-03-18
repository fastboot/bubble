import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: black;
    height: 80px;
    width: 100vw;
    margin-top: -8px;
    margin-left: -8px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
`;

export const StyledLink = styled(Link)`
    color: white;
    display: flex;
    width: 80px;
    text-decoration: none;
    white-space: nowrap;
    &.active {
      color: red;
    }
`;

export const LogoLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: -24px;
`;

export const NavButtons = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  color: white;
`;
