import styled from 'styled-components'
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'
import darkBackground from '../../assets/backgrounds/darkBackground.png'
import lightBackground from '../../assets/backgrounds/lightBackground.png'

export const PageWrapper = styled.div`
    width: 100vw;
    height: 77vh;
    background-image: url(${ props => props.theme.mode === 'dark' ? darkBackground : lightBackground });
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

export const CurrWorkplace = styled.div`
  width: 37vw;
  height: 150px;
  display: flex;
  flex-direction: row;
  font-size: 35px;
  text-align: center;
  justify-content: space-between;
  vertical-align: middle;
  line-height: 120px; 
  position: relative;
`

export const Workplace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 40px;
  width: 20vw;
  height: 30vh;
  position: relative;
`

export const WorkplaceTime = styled.div`
  font-size: 16px;
  font-weight: normal;
  position: relative;
`

export const WorkplaceNameDiv = styled.div`
  background-image: url(${props => props.theme.mode === 'dark' ? BackgroundLight : BackgroundDark});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: ${props => props.theme.mode === 'dark' ? 'black': 'white'};
  background-size: contain;
  height: 180px;
  width: 180px;
  margin-top: 15px;
  font-size: 35px;
  text-align: center;
  vertical-align: middle;
  line-height: 90px; 
`

export const WorkplaceLogo = styled.img`
  height: 80px;
  width: 80px;
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
  font-weight: 900;
`