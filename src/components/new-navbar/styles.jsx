import styled from 'styled-components'

export const Icons = styled.div`
    height: 5vh;
    width: 4vw;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

export const StripLogo = styled.img`
    width: 45px;
    height: 45px;
`;

export const Navbar = styled.div`
  height: 40px;
  width: 250px;
  background: gray;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 5px;
  top: 0;
  left: 0;
  margin-top: 50px;
  margin-left: 45%;
  border-radius: 50px;
  background-color: #17141d;
  justify-content: space-around;
`

export const NavbarSlider = styled.div`
  height; 40px;
  width: 100px;
  display: flex
  flex-direction: row;
  border-radius: 50px;
  background-color: ${props => (props.toggled ? '#1DB954' : 'white')};
  transform: ${props => (props.toggled ? 'translateX(100px)' : 'translateX(0)')};
  transition: transform 0.4s ease-in;
  z-index: 1;

`

export const NavbarItems = styled.p`
position: relative;
  color: ${props => (props.color)};
  height: 40px;
  width: 50px;
  margin-top: 9px;
  font-size: 17px;
  z-index: 3;
`