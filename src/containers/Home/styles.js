import styled from 'styled-components'
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'
import darkBackground from '../../assets/backgrounds/darkBackground.png'
import lightBackground from '../../assets/backgrounds/lightBackground.png'

export const PageWrapper = styled.div`
    width: 100vw;
    height: 77vh;
    background-image: url(${ props => props.theme.mode === 'dark' ? darkBackground: lightBackground });
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    display: flex;
    position: relative;
    flex-direction: column;
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
  border-radius: 50%;
  border: 3px solid ${ props => props.theme.mode === 'dark' ? 'white' : 'black' };
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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