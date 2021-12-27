import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'
import darkBackground from '../../assets/backgrounds/darkBackground.png'
import lightBackground from '../../assets/backgrounds/lightBackground.png'


// export const GradientAnimated = styled.div`
//     background: linear-gradient(45deg, #08f7fe, #09fbd3, #fe53bb, #f5d300);
//     background-size: 400% 400%;
//     animation: gradient 10s ease infinite;
//     width: 100%;
//     position: relativ;
//     height: 400px;
//     @keyframes gradient {
//         0% {
//             background-position: 0% 50%;
//         }
//         50% {
//             background-position: 100% 50%;
//         }
//         100% {
//             background-position: 0% 50%;
//         }
//     }
// `

export const CurrentStreamStripWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-left: 12px;
`

export const CurrentStreamHeader = styled.h1`
    color: white;
    font-size: 20px;
    display: flex;
    width: 170px;
    flex-direction: row;
    line-height: 15px;
`
export const CurrentStreamButton = styled.button`
    display: flex;
    width: 100px;
    background: transparent;
    radius: 30%;
    margin-left: -100px;
`

export const PageHeading = styled.h1`
    position: relative;
    font-size: 50px;
    -webkit-background-clip: text;
    background-clip: text;
    align-items: center;
    text-align: center;
    // background: blue;
    // line-height: 10px;
    -webkit-text-fill-color: transparent;
    width: 100vw;
    transition: all 0.55s linear;
    background-image: ${props => props.theme.mode === 'dark'? 'linear-gradient(90deg, rgb(22, 201, 165) 0%, 34.8321%, rgb(15, 54, 241) 66.6642%, 64.8321%, rgb(31, 5, 249) 100%)' : 'linear-gradient(90deg, #F148FB 0%, 34.8321%, #7122FA 69.6642%, 64.8321%, #7122FA 100%)'}; 
    font-weight: bold;
`
export const PageWrapper = styled.div`
    width: 100vw;
    height: 77vh;
    // background: red;
    background-image: url(${ props => props.theme.mode === 'dark' ? darkBackground: lightBackground });
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    // background: ${ props => props.theme.mode === 'dark' ? 'black': 'white' };
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    display: flex;
    position: relative;
    flex-direction: column;
`

export const WrapperRev = styled.div`
    width: 100%;
    position: relative;
    right: 0px;
    float: right;
    display: flex;
    margin-right: 0px;
    flex-direction: row;
`

export const StyledDiv = styled.div`
    width: 100%;
    height: 400px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
`

export const StyledDiv2X = styled.div`
    width: 80vw;
    height: 450px;
    margin: 30px;
    background: ${props => props.theme.mode === 'dark'? 'black': 'white'};
    color: ${props => props.theme.mode === 'dark'? 'white': 'black'};
    position: relative;
`
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100vw;
    line-height: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const Strip = styled.div`
    width: 60%;
    height: 70px;
    background: ${props => props.stripcolor};
    color: white;
`

export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    border-left: 35px solid #1DB954;
`
export const TriangleRev = styled.div`
    width: 0; 
    height: 0; 
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    border-right: 35px solid red;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`
export const StripLogo = styled.img`
    padding-right: 10px;
    padding-left: 20px;
    width: 45px;
    height: 45px;
`

export const PageRow = styled.div`
    margin-top: 10px;
    width: 95vw;
    height: 350px;
    display: flex;
    flex-direction: row;
`

export const Title = styled.div`
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 35px;
`

export const Card = styled.div`
    display: flex;
    height: 380px;
    color: white;
    width: 700px;
    margin: 24px;
    padding-left: 24px;
    padding-right: 24px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
`
export const PicCard = styled.div`
    display: flex;
    height: 380px;
    width: 400px;
    margin: 24px;
    overflow: hidden;
    background-color: #17141d;
    border: 15px solid white;
    border-bottom: 70px solid white;
    box-shadow: 0 0 0 2px hsl(0, 0%, 90%);
`

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const StyledA = styled.a`
  text-decoration: none;
  color: black;
`

export const Workplace = styled.div`
  width: 640px;
  height: 100px;
  display: flex;
  font-size: 35px;
  padding-left: 130px;
  margin-top: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 120px; 
  position: relative;
`

export const GradientAnimated = styled.div`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    width: 100%;
    height: 10px;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`

export const WorkplaceTime = styled.div`
  font-size: 25px;
  font-weight: normal;
  margin-top: 20px;
  padding-right: 20px;
  position: relative;
`

export const WorkplaceNameDiv = styled.div`
  background-image: url(${props => props.theme.mode === 'dark' ? BackgroundLight: BackgroundDark});
  color: ${props => props.theme.mode === 'dark' ? 'black': 'white'};
  background-size: contain;
  height: 90px;
  margin-top: 20px;
  margin-left: 20px;
  width: 173px;
  font-size: 35px;
  text-align: center;
  vertical-align: middle;
  line-height: 80px; 
  position: relative;
`

export const WorkplaceLogo = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 50px;
  padding-right: 30px;
  position: relative;
`

export const ProfilePicture = styled.div`
  height: 250px;
  width: 250px;
//   margin-top: 50px;
  border-radius: 50%;
  border: 3px solid ${ props => props.theme.mode === 'dark' ? 'white' : 'black' };
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const Picture = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 50px;
  height: 50px;
`

export const ProfileCard = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  font-size: 5em;
  position: relative;
  align-items: center;
  flex-direction: column;
`