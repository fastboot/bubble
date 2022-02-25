import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NowPlayingWrapper = styled.div`
    
    position: relative;
    z-index: 1;
    display: flex;
    height: 75vh;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        width: 100vw; 
        height: 75vh; 
        filter: blur(15px);
        z-index: -1;
        background: url(${ props => props.albumart }) no-repeat 50% 50% fixed;
        background-size: cover;
    }
`

export const LoaderDiv = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    height: 75vh;
    align-items: center;
    text-align: center;
    justify-content: center;
`

export const NowPlayingStripWrapper = styled.div`
    width: 100px;
    height: 70px;
    display: flex;
    flex-direction: row;
`

export const StripDeviceIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-top: 8px; 
`

export const AlbumArt = styled.img`
    width: 300px;
    height: 300px;
    margin-top: 100px;
    margin-left: 100px;   
`

export const DetailsWrapper = styled.div`
    width: 50vw;
    height: 300px;
    margin-top: 100px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
`
export const ArrowDiv = styled.div`
    position: absolute;
    display: flex;
    transform: translate(50%,50%);
`
export const ArrowSpan = styled.span`
    width: 20px;
    height: 20px;
    border-right: 2px solid white;
    border-top: 2px solid white;
    transform: rotate(45deg);
    animation: animate 2s infinite;
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.4s;
    }
    @keyframes animate {
        0%{
            opacity: 0;
            transform: rotate(45deg) translateX(-20px,-20px);
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
            transform: rotate(45deg) translateX(20px,20px);
        }
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
`
export const NowPlayingTrack = styled.p`
    font-size: 50px;
    font-style: italic;
`
export const NowPlayingArtist = styled.p`
    font-size: 35px;
    margin-top: -5px;
`
export const NowPlayingAlbum = styled.p`
    font-size: 30px;
`
export const NowPlayingDevice = styled.p`
    font-size: 20px;
    padding-left: 10px;
    margin-top: 8px;
`
export const Device = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: -10px;
`
export const StripLogo = styled.img`
    margin-top: 30px;
    width: 45px;
    height: 45px;
    margin-left: 30px;
`
export const Bar = styled.div`
    width: 600px;
    height: 5px;
    display: flex;
    border-radius: 10px;
    background: gray;
    flex-direction: row;
`
export const Filler = styled.div`
    width: ${props => props.percent}%;
    height: 5px;
    display: flex;
    background: white;
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
