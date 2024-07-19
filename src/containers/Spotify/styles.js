import styled, { keyframes } from 'styled-components'

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    height: 160px;
    width: 100vw;
    line-height: 10px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        text-align: center;
    }
`
export const H = styled.h1`
    font-size: 3vmin;
    line-height: 4vh;
    @media (max-width: 768px) {
        font-size: 2vmax;
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    background: rgb(250, 250, 250);
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
    } 
`

export const PlaylistName = styled.div`
  display: flex;
  padding: 10px;
  font-weight: 500px;
  font-size: 1.5vmin;
    @media (max-width: 768px) {
        font-size: 1.5vmax
        line-height: 1vmax;
    }
`

export const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PlaylistDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Arrow = styled.div`
    width: 60px;
    height: 60px;
    border: 2px solid ${props => props.theme.mode !== 'dark' ? 'black' : 'white'};
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
        border-left: 2px solid ${props => props.theme.mode !== 'dark' ? 'black' : 'white'};
        border-bottom: 2px solid ${props => props.theme.mode !== 'dark' ? 'black' : 'white'};
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

export const NowPlayingWrapper = styled.div`
    height: 80vh;
    width 100vw;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 100px;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
`

export const ListWrapper = styled.div`
    width: 70%;
    height: auto;
    padding: 24px;
    padding-bottom: 125px;
    margin-left: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ListItem = styled.div`
    display: flex;
    width: 40%;
    flex-direction: row;
    height: 120px;
    background: rgb(250, 250, 250);
    align-items: center;
    padding-left: 20px;
    border-radius: 10px;
    margin: 10px;
    margin-left: 30px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        background:#111;
		color:#fff;
        padding-left: 20px;
        transform: scale(1.1);
    }
}
`

export const ListItemImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 5px;

    &:hover {
        background: gray;
    }
`

export const CollabWrapper = styled.div`
    height: 80vh;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CollabCard = styled.div`
    height: 60%;
    width: 70%;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #eeeeee;
    border-radius: 28px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    animation: body 5s linear;
  transition: width 2s, height 2s;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`

export const TopTrack = styled.div`
    height: 50%;
    width: 30%;
    display: flex;
    flex-direction: column;
    border-radius: 28px;
    background: rgb(173, 216, 230);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export const TopArtist = styled.div`
    height: 50%;
    width: 30%;
    background: blue;
    display: flex;
    flex-direction: column;
    border-radius: 28px;
    background: #56aaa7;

    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export const TopTitle = styled.p`
    font-size: 20px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    color:black;
    height: 30px;
    margin-left: 30px;
    margin-top: 30px;
`

export const TopLabel = styled.p`
    color: ${props => props.color};
    font-size: 28px;
    line-height: 1.1428571429;
    font-weight: 600;
    letter-spacing: .007em;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    margin-top: -10px;
    margin-left: 30px;
`

export const TopGenres = styled.div`
    height: 50%;
    width: 30%;
    background: yellow;
    display: flex;
    flex-direction: column;
    border-radius: 28px;
    background: rgb(230 224 171);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export const Follow = styled.div`
    height: 40%;
    width: 92%;
    background: linear-gradient(to right, #1DB954, #1B876D, #146041);
    display: flex;
  flex-direction: column;
  justify-content: space-between;
    border-radius: 28px;
    overflow: hidden;
    padding: 20px;
    margin-top: 30px;
    text-align: center;

    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export const ArtistArt = styled.img`
    height: 50%;
    width: 40%;
    margin-left: 30px;
    border-radius: 50%;
`

export const TrackArt = styled.img`
    height: 50%;
    width: 40%;
    margin-left: 30px;
    border-radius: 10%;
`

export const Carousel = styled.div`
    font-size: 20px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: white;
  text-align: left;
  margin-top: 30px;
  margin-left: 20px;
  width: 100%;
  opacity: 0;
  animation: fadeInOut 4s ease-in-out infinite;
  align-self: flex-start;
  @keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`

export const TopFollowTitle = styled.p`
    font-size: 20px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    color:white;
    height: 30px;
    margin-left: 30px;
    margin-top: 30px;
    text-align: center;
    line-height: 200px;
`

export const TopFollowDiv = styled.div`
    font-size: 40px;
    line-height: 1.0714285714;
    font-weight: 400;
    letter-spacing: -0.005em;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100px;
    color: white;

`
export const ProfileFollowImg = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: -50px;
    margin-right: 20px;
`

export const RecentWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: blue;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RecentWrapperCard = styled.div`
    width: 70%;
    height: 50vh;
    background: green;
    display: flex;
    flex-direction: row;
    border-radius: 28px;
`

export const RecentTopWrapper = styled.div`
    width: 50%;
    height: auto;
    background: red;
    display: flex;
    flex-direction: column;
`

export const RecentListWrapper = styled.div`
    widht: 50%;
    height: auto;
    background: orange;
    display: flex;
    flex-direction: column;
`

export const RecentImageWrapper = styled.div`
    width: 50%;
    height: auto;
    background: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const RecentImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 28px;
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
        font-size: 35px;
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
        font-size: 20px;
    } 
`