import styled from 'styled-components'

export const NowPlayingWrapper = styled.div`
    
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
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

    @media (max-width: 768px) {
        flex-direction: column;
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
    margin-top: 15vh;
    margin-left: 10vw;  
    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
        margin-top: 0vh;
        margin-left: 37vw;
    } 
`

export const DetailsWrapper = styled.div`
    width: 50vw;
    height: 300px;
    margin-top: 100px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        margin-top: 10px;
    } 
`

export const NowPlayingTrack = styled.p`
    font-size: 5vh;
    font-style: italic;
    @media (max-width: 768px) {
        font-size: 35px;
    } 
`
export const NowPlayingArtist = styled.p`
    font-size: 3vh;
    margin-top: -5px;
    @media (max-width: 768px) {
        font-size: 20px;
    } 
`
export const NowPlayingAlbum = styled.p`
    font-size: 30px;
`
export const NowPlayingDevice = styled.p`
    font-size: 2vh;
    padding-left: 10px;
    margin-top: 8px;
    @media (max-width: 768px) {
        font-size: 10px;
    } 
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
    width: 40vw;
    margin-top: 5vh;
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
