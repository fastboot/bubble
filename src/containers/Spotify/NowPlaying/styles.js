import styled from 'styled-components'


export const LoaderDiv = styled.div`
    position: relative;
    display: flex;
    height: 75vh;
    align-items: center;
    text-align: center;

    justify-content: center;
`

export const StripDeviceIcon = styled.img`
    width: 30px;
    filter: invert(1);
    margin-top: -3px;
    height: 30px;
    margin-left: 10px;
`

export const NowPlayingTrack = styled.p`
    color: white;
    font-size: 28px;
    line-height: 1.1428571429;
    font-weight: 600;
    letter-spacing: .007em;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    z-index: 10;
    @media (max-width: 768px) {
        font-size: 24px;
    } 
`
export const NowPlayingArtist = styled.p`
    font-size: 17px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    color:white;
    margin-top: -5px;
    z-index: 10;
    @media (max-width: 768px) {
        font-size: 16px;
    } 
`


export const StripLogo = styled.img`
    margin-top: 30px;
    width: 45px;
    height: 45px;
    margin-left: 30px;
`
export const Bar = styled.div`
    width: 40vw;
    margin-top: 2vh;
    height: 5px;
    display: flex;
    border-radius: 10px;
    background: gray;
    flex-direction: row;
    @media (max-width: 768px) {
        width: 75vw;
        margin-top: 20px;
    } 
`
export const Filler = styled.div`
    width: ${props => props.percent}%;
    transition: width 1s ease-in;
    height: 5px;
    display: flex;
    background: ${props => props.detailColor};
    border-radius: 10px;
`
export const Dot = styled.div`
    width: 15px;
    margin-top: -5px;
    margin-left: -10px;
    height: 15px;
    border-radius: 50%;
    background: white;
    display: flex;
    position: relative;
`

export const NowPlaying = styled.div`
    width: 85%;
    height: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 28px;
    background: linear-gradient(45deg, ${ props => props.dominantColor }, ${ props => props.darkerColor });
    animation: body 1s linear;
    align-items: center;
    justify-content: center;

    transform: ${props => props.transform}
    transform: translateX(-50%);
    transition: width 0.5s, height 0.5s;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    @media (max-width: 768px) {
        width: 90%;
        height: 90%;
    } 
`

export const NowPlayingCard = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AlbumArt = styled.img`
    width: 300px;
    height: 300px; 
    display: flex;
    border-radius: 28px;
    z-index: 10;
    top: 0;
    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
        margin-top: 0vh;
    } 
`

export const SpotifyLogo = styled.img`
    align-self: start;
    filter: invert(1);
    margin-left: 30px;
    width: 60px;
    height: 60px;
    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        margin-top: 2vh;
        margin-left: 15px;
    } 
`

export const PlayingDevice = styled.div`
    font-size: 17px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    color:white;

    display: flex;
    flex-direction: row;

    align-self: end;
    width: 150px;
    height: 70px;

    @media (max-width: 768px) {
        margin-top: 5vh;
        margin-right: -15px;
        align-self: center;
    } 
`

export const TopBar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`