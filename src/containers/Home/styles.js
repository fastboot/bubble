import styled from 'styled-components'
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'
import BackgroundColor from '../../assets/shapes/backgroundOnHover.png'
import darkBackground from '../../assets/backgrounds/darkBackground.png'
import lightBackground from '../../assets/backgrounds/lightBackground.png'

export const PageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #1f1f47;
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
  align-items: center;
  top: 10;
    @media (max-width: 768px) {
      height: 100vh;
    }

    @keyframes gradient {
      0% {
          background-position: 0% 0%;
      }
      50% {
          background-position: 100% 100%;
      }
      100% {
          background-position: 0% 0%;
      }
  }

`

export const Blob = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: linear-gradient(
    180deg,
    rgba(47, 184, 255,0.42) 31.77%,
    #5c9df1 100%
  );
  mix-blend-mode: color-dodge;
  -webkit-animation: move 25s infinite alternate;
          animation: move 25s infinite alternate;
  transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);

  &:hover {
  width: 520px;
  height: 520px;
  -webkit-filter: blur(30px);
          filter: blur(30px);
  box-shadow:
    inset 0 0 0 5px rgba(255,255,255, 0.6),
    inset 100px 100px 0 0px #fa709a,
    inset 200px 200px 0 0px #784ba8,
    inset 300px 300px 0 0px #2b86c5;
}

@-webkit-keyframes move {
  from {
    transform: translate(-100px, -50px) rotate(-90deg);
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  }

  to {
    transform: translate(500px, 100px) rotate(-10deg);
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
  }
}

@keyframes move {
  from {
    transform: translate(-100px, -50px) rotate(-90deg);
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  }

  to {
    transform: translate(500px, 100px) rotate(-10deg);
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
  }
}

`;

export const Blob2 = styled.div`
  position: absolute;
  top: 0;
  right: 0; 
  width: 500px;
  height: 500px;
  background: linear-gradient(
    180deg,
    rgba(83, 27, 168) 31.77%,
    #531ba8 100%
  );
  mix-blend-mode: color-dodge;
  -webkit-animation: move 25s infinite alternate;
          animation: move 25s infinite alternate;
  transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);

  &:hover {
  width: 520px;
  height: 520px;
  -webkit-filter: blur(30px);
          filter: blur(30px);
  box-shadow:
    inset 0 0 0 5px rgba(255,255,255, 0.6),
    inset 100px 100px 0 0px #fa709a,
    inset 200px 200px 0 0px #784ba8,
    inset 300px 300px 0 0px #2b86c5;
}

@-webkit-keyframes move {
  from {
    transform: translate(-100px, -50px) rotate(-90deg);
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  }

  to {
    transform: translate(500px, 100px) rotate(-10deg);
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
  }
}

@keyframes move {
  from {
    transform: translate(-100px, -50px) rotate(-90deg);
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  }

  to {
    transform: translate(500px, 100px) rotate(-10deg);
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
  }
}

`;

export const Blob3 = styled.div`
  position: absolute;
  top: 0;
  left: 0; 
  width: 500px;
  height: 500px;
  background: linear-gradient(
    180deg,
    rgba(83, 27, 168) 31.77%,
    #531ba8 100%
  );
  mix-blend-mode: color-dodge;
  -webkit-animation: move2 25s infinite alternate;
          animation: move2 25s infinite alternate;
  transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);

  &:hover {
  width: 520px;
  height: 520px;
  -webkit-filter: blur(30px);
          filter: blur(30px);
  box-shadow:
    inset 0 0 0 5px rgba(255,255,255, 0.6),
    inset 100px 100px 0 0px #fa709a,
    inset 200px 200px 0 0px #784ba8,
    inset 300px 300px 0 0px #2b86c5;
}

@-webkit-keyframes move2 {
  from {
    transform: translate(-100px, -50px) rotate(-90deg);
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  }

  to {
    transform: translate(100px, 500px) rotate(-10deg);
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
  }
}

@keyframes move2 {
  from {
    transform: translate(-100px, -50px) rotate(-90deg);
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  }

  to {
    transform: translate(100px, 500px) rotate(-10deg);
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
  }
}

`;



export const StyledA = styled.a`
  text-decoration: none;
  color: black;
`

export const CurrWorkplace = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Workplace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 40px;
  width: 30vw;

  height: 30vh;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const WorkplaceTime = styled.div`
  font-size: 16px;
  white-space: nowrap;
  display: block;
  font-weight: normal;
  position: relative;
`

export const WorkplaceNameDiv = styled.div`
  background-image: url(${props => props.theme.mode === 'dark' ? BackgroundLight : BackgroundDark});
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-position: right 50px;
  color: ${props => props.theme.mode === 'dark' ? 'black': 'white'};
  height: 180px;
  width: 180px;
  font-size: 35px;
  margin-left: 20px;
  text-align: center;
  line-height: 180px; 
  &:hover {
    background-image: url(${BackgroundColor});
  }
  @media (max-width: 768px) {
    background-position: right 10px;
    line-height: 100px;
    margin-left: 0px;
  }

`

export const WorkplaceLogo = styled.img`
  height: auto;
  width: auto;
  max-height: 10vh;
  max-width: 20vw;
  position: relative;
`

export const ProfilePicture = styled.div`
  height: auto;
  width: auto;
  max-height: 30vh;
  max-width: 50vw;
  overflow: auto;
  border-radius: 50%;
  border: 3px solid ${ props => props.theme.mode === 'dark' ? 'white' : 'black' };
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-height: 30vh;
    max-width: 50vw;
  }
`

export const ProfileImg = styled.img`
  height: auto;
  width: auto;
  max-height: 20vh;
  max-width: 40vw;
  @media (max-width: 768px) {
    max-height: 30vh;
    max-width: 50vw;
  }
`

export const Back =styled.div`
position: absolute;
width: 300px;
height: 300px;
inset: 0;
z-index: 1;
border-radius: 32px;
transition: 250ms;
transform-style: preserve-3d;
transform-origin: bottom right;
transform: rotateZ(15deg);
will-change: transform;
box-shadow: 16px 0 40px #e4e4e4;
background: linear-gradient(135deg, #5c46eb -20%, #013fff 120%);
`;

export const Front = styled.div`
position: absolute;
      inset: 0;
      z-index: 1;
      width: 300px;
height: 300px;
      border-radius: 32px;
      background-color: #ffffff33;
      backdrop-filter: blur(20px);
      transition: 250ms;
      transform-style: preserve-3d;
      transform-origin: top left;
      overflow: hidden;
`;

export const ProfileCard = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-around;
  position: relative;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  background-color: rgba(255,255,255,0.4);
  backdrop-filter: blur(20px);
  border-radius: 2vh;
  box-shadow: -1rem 0 3rem rgba(255,255,255,0.4);
  padding: 0.5rem;
`

export const WorkplaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WorkplaceHistory = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
`

export const WorkplaceName = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 900;
`

export const WorkplaceDuration = styled.div`
  display: flex;
  font-size: 
`

export const WorkplaceTitle = styled.div`
  display: flex;
  font-size: 34px;
  white-space: pre-wrap;
  font-weight: 900;
  text-align: center;
`