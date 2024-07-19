import styled, {keyframes} from 'styled-components'
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'
import BackgroundColor from '../../assets/shapes/backgroundOnHover.png'
import darkBackground from '../../assets/backgrounds/darkBackground.png'
import lightBackground from '../../assets/backgrounds/white.png'

import profilePicture from '../../assets/profile/dp.png'

export const ProfilePicWrapper = styled.div`

    width: 600px;
    height: 600px;
    margin-left: 100px;
    background-image: url(${profilePicture});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 70px;
    

`

export const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 25vh;
    display: flex;
    flex-direction: row;
    background-image: url(${lightBackground});
    background-size: cover;
  background-position: 50% 50%;
  backdrop-filter: blur(15px);
    
    
`

export const CurrentWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    background: black;
    flex-direction: column;
    
`

export const ProfileWrapper = styled.div`
    width: 50%;
    height: 100%;
`

export const NameWrapper = styled.p`
    width: 100%;
    height: 10vh;
    color: red;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 24px;
    font-weight: 600px;
`

const rotate = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg) scale(2);
  }
`;

export const Plate = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 0;
  padding-bottom: 100%;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(0) scale(2);
  z-index: -1;
  background-image: repeating-conic-gradient(
    from 45deg at 50% 50%,
    #4a4 0deg 10deg,
    #5b5 10deg 20deg,
    #6c6 20deg 30deg
  );
  visibility: hidden;
  opacity: 0;
`;



export const Label = styled.label`
  /* Styles for the label when the checkbox is checked or not */
`;


export const FrostedGlass = styled.div`
 width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
    opacity: 0.7;
    transform: rotate(45deg);
    pointer-events: none;
  }
`;
