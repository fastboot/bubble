import styled from 'styled-components'
import spotify from '../../assets/icons/spotifyoriginal.png'
import home from '../../assets/logos/home.png'
import moon from '../../assets/icons/moon.png'
import sun from '../../assets/icons/sun.png'

export const ToggleSwitch = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 50px;
  margin-right: 50px;
  display: inline-block;
  width: 100px;
  height: 50px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => (props.toggled ? 'black' : '#fff')};
    
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.4s;

    &:before {
      position: absolute;
        content: "";
      height: 50px;
      width: 50px;
      background-color: white;
      background-image: ${props => (props.toggled ? `url(${moon})` : `url(${sun})`)};
    background-size: cover;
    background-position: center;
      border-radius: 50%;
      transition: transform 0.4s;
      transform: ${props => (props.toggled ? 'translateX(45px)' : 'translateX(0)')};
    }
  }
`;

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
