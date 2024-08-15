import styled, {keyframes} from 'styled-components'
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'
import BackgroundColor from '../../assets/shapes/backgroundOnHover.png'
import darkBackground from '../../assets/backgrounds/darkBackground.png'
import lightBackground from '../../assets/backgrounds/white.png'

import profilePicture from '../../assets/profile/dp.png'

export const CardWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    margin-top: 100px;
    margin-bottom: -160px;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.mode !== 'dark' ? 'black': 'white'};
`

export const Card = styled.div`
  width: 80%;
  height: 80%;
  align-self: center;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 24px;
  overflow: hidden;
`
export const IntroSide = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const ImageSide = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const ImageVector = styled.img`
  width: 450px;
  height: 430px;
  z-index: 2;
  border-radius: 40%;
  padding-top: 80px;
`

export const BlobVector = styled.img`
  align-self: center;
  width: 750px;
  height: 700px;
  border-radius: 50%;
  z-index: 1;
  margin-top: -514px;
  margin-right: -51px;
`

export const BlobVector2 = styled.img`
  align-self: center;
  width: 450px;
  height: 400px;
  border-radius: 50%;
  z-index: 3;
  margin-top: -10px;
`

export const SubText = styled.p`
  font-size: 32px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
`

export const Diff = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.mode !== 'dark' ? 'black': 'white'};;
  margin-bottom: 100px;
`

export const GradientDiv = styled.div`
  width: 100%;
  height: 8px;
  background: linear-gradient(to right, cyan, magenta, yellow);
`

export const Footer2 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const AcrossDiv = styled.p`
  font-size: 32px;
    line-height: 1.4705882353;
    font-weight: 500;
    text-transform: uppercase;
    transform: rotate(-4deg);
    color: ${props => props.theme.mode !== 'dark' ? 'black': 'white'};
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
`
export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -100px;
  height: auto;
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