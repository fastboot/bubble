import styled from 'styled-components'

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    height: 160px;
    width: 100vw;
    line-height: 10px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`
export const H = styled.h1`
    font-size: 3vmin;
    line-height: 4vh;
    @media (max-width: 768px) {
        font-size: 4vmax;
    }
`

export const StripLogo = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 3vw;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

export const PlaylistsWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 15vw;
    margin-top: 5vh;
`

export const AlbumArt = styled.img`
    width: 300px;
    height: 300px; 
    padding: 50px;
    padding-bottom: 20px;
    border-radius: 10px;
    transition: transform .3s;

    &:hover {
        transform: scale(1.3);
    }
    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
        margin-top: 0vh;
        margin-left: 37vw;
    } 
`

export const PlaylistName = styled.div`
  display: flex;
  padding: 10px;
  font-size: 14px;
  font-weight: 500px;
`

export const PlaylistDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Arrow = styled.div`
    width: 60px;
    height: 60px;
    border: 2px solid ${ props => props.theme.mode !== 'dark' ? 'black': 'white' };
    border-radius: 50%;
    position: relative;
    animation: down 1.5s infinite;
    -webkit-animation: down 1.5s infinite;
    &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: 18px;
        width: 18px;
        height: 18px;
        border-left: 2px solid ${ props => props.theme.mode !== 'dark' ? 'black': 'white' };
        border-bottom: 2px solid ${ props => props.theme.mode !== 'dark' ? 'black': 'white' };
        transform: rotate(-45deg);
    }

    @keyframes down {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translateY(15px);
        }
        40% {
            transform: translate(0);
        }
    }
    
    @keyframes scroll {
        0% {
            height: 40px;
        }
        30% {
            height: 70px;
        }
        60% {
            height: 40px;
        }
    }
`

