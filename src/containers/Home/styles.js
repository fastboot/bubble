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
    @media (max-width: 768px) {
      height: 100vh;
    }

`

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
  max-height: 30vh;
  max-width: 50vw;
  @media (max-width: 768px) {
    max-height: 30vh;
    max-width: 50vw;
  }
`

export const ProfileCard = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
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
  white-space: pre-wrap;
  font-weight: 900;
  text-align: center;
`