import styled from 'styled-components';
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'

export const Card = styled.div`
  display: flex;
  width: 1000px;
  height: 100%;
  margin-left: 230px;
  justify-content: space-around;
  font-size: 5em;
  align-items: center;
  flex-direction: column;
`

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
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
`

export const WorkplaceLogo = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 50px;
  padding-right: 30px;
`

export const ProfilePicture = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 5px solid ${ props => props.theme.mode === 'dark' ? 'white' : 'black' };
  overflow: hidden;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
`

export const Picture = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 50px;
  height: 50px;
`

export const Device = styled.img`
  height: 100px;
  width: 170px;
  margin-left: 100px;
`

export const FlexDiv = styled.div`
  height: 400px;
  width: 100%;
`

export const PageHeading = styled.div`
  width: 100%;
  height: 400px;
  text-align: center;
  padding-top: 50px;
  position: block;
  font-size: 120px;
  font-weight: bold;
  background: ${props => props.theme.mode === 'black'? 'white': 'black'}
  color: ${props => props.theme.mode === 'black'? 'black': 'white'};
`

export const GradientWrapper = styled.div`
  width: 400px;
  height: 300px;
  align-items: center;
  justify-content: center;
  padding: 18px; 
  border-radius: 5px;
  box-shadow: inset 0 0 12px 12px white, inset 0 0 3px 2px white;
  background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
`