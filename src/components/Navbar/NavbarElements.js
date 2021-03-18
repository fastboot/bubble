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

    &.active {
      color: red;
    }
`;

export const LogoLink = styled(Link)`
    color: white;
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
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
