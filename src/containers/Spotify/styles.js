import styled from 'styled-components';

export const PlaylistOutside = styled.div`
  height: auto;
  width: 100%;
  background: ${(props) => (props.theme.mode === 'dark' ? '#17141d' : 'rgb(250, 250, 250)')};
  display: flex;
  flex-direction: column;
`;

export const PlaylistsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  background: ${(props) => (props.theme.mode === 'dark' ? '#17141d' : 'rgb(250, 250, 250)')};

  @media (max-width: 768px) {
    margin-top: 2vh;
  }

  @media (max-width: 480px) {
    margin-top: 1vh;
  }
`;

export const NowPlayingWrapper = styled.div`
  height: auto;
  width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
  margin-top: 64px;
  margin-bottom: 128px;

  @media (max-width: 768px) {
    margin-top: 32px;
    margin-bottom: 64px;
  }

  @media (max-width: 480px) {
    margin-top: 32px;
    margin-bottom: 64px;
  }
`;

export const PlaylistName = styled.div`
  display: flex;
  padding: 10px;
  font-weight: 400;
  font-size: 1.5vmin;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 2vmax;
  }

  @media (max-width: 480px) {
    font-size: 2vmax;
  }
`;

export const ListWrapper = styled.div`
  width: 70%;
  height: auto;
  padding-top: 24px;
  padding-bottom: 125px;
  margin-left: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 40px;
    padding-bottom: 75px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 10px;
    padding-bottom: 50px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  height: 120px;
  background: ${(props) => (props.theme.mode === 'dark' ? '#17141d' : 'rgb(250, 250, 250)')};
  align-items: center;
  padding-left: 20px;
  border-radius: 10px;
  margin: 10px;
  margin-left: 30px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    background: #111;
    color: #fff;
    padding-left: 20px;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 100px;
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 80px;
    margin-left: 5px;
  }
`;

export const ListItemImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 5px;

  &:hover {
    background: gray;
  }

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
  }
`;

export const Follow = styled.div`
  height: 75px;
  width: 78%;
  background: linear-gradient(to right, deepskyblue, deepskyblue, gold);
  display: flex;
  flex-direction: row;
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

  @media (max-width: 768px) {
    width: 85%;
    height: auto;
    padding: 15px;
    flex-direction: column;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    width: 85%;
    height: auto;
    padding: 10px;
    flex-direction: column;
    border-radius: 16px;
  }
`;

export const Carousel = styled.div`
  font-size: 20px;
  line-height: 1.4705882353;
  font-weight: 400;
  letter-spacing: -0.022em;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: white;
  text-align: left;
  width: 70%;
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

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TopFollowDiv = styled.div`
  font-size: 40px;
  line-height: 1.0714285714;
  font-weight: 400;
  letter-spacing: -0.005em;
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
  width: 20%;
  height: 100px;
  color: white;

  @media (max-width: 768px) {
    font-size: 30px;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    width: 100%;
  }
`;

export const ProfileFollowImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    margin-left: -200px;
    margin-top: -20px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    margin-left: -200px;
    margin-top: -20px;
  }
`;

export const RecentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -150px;

  @media (max-width: 768px) {
    height: auto;
    margin-top: -150px;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

export const RecentWrapperCard = styled.div`
  width: 80%;
  height: 50vh;
  background: ${props => props.theme.mode === 'dark' ? 'black' : 'rgb(240, 240, 240)'};;
  display: flex;
  flex-direction: row;
  border-radius: 24px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    flex-direction: column;
    margin-top: 150px;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 90%;
    flex-direction: column;
    margin-top: 150px;
  }
`;

export const TopWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 40px;

  @media (max-width: 768px) {
    width: 70%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;
  }
`;

export const TopWrapperHeading = styled.div`
  width: auto;
  height: 10%;
  display: flex;
  font-size: 48px;
  color: ${(props) => (props.artist ? 'gold' : 'deepskyblue')};
  background: ${props => props.theme.mode === 'dark' ? 'black' : 'rgb(240, 240, 240)'};
  border-radius: 24px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const TopWrapperList = styled.div`
  width: auto;
  height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  gap: 0px;

  @media (max-width: 768px) {
    height: 70%;
  }

  @media (max-width: 480px) {
    height: 60%;
  }
`;

export const TopWrapperListItem = styled.div`
  width: auto;
  height: 72px;
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.mode === 'dark' ? 'black' : 'rgb(240, 240, 240)'};
  color: ${props => props.theme.mode === 'dark' ? 'white' : 'black'};;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 16px;
  border-bottom: 1px solid dimgray;
  transition: transform 0.2s ease-in-out;

  &:hover {
    background: #111;
    color: #fff;
    border-radius: 10px;
    /* Keep border to prevent layout shift */
    border-bottom: 1px solid dimgray;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    height: 64px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    height: 56px;
  }
`;

export const TopWrapperListItemIndex = styled.p`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TopWrapperListItemName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const TopWrapperListItemImage = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 5px;
`

export const IndexColor = styled.div`
    color: ${props => props.artist? "gold": "deepskyblue"};
`


export const FollowMeText = styled.p`
    font-size: 20px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    margin-left: 10px;

     @media (max-width: 768px) {
        margin-left: -50px;
    }
`

export const artistsName = styled.p`
    font-size: 15px;
    line-height: 1.4705882353;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
`

export const PageHeading = styled.div`
    font-size: 56px;
    line-height: 1.0714285714;
    font-weight: 600;
    letter-spacing: -0.005em;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
    margin-left: 200px;
    margin-top: 100px;

    @media (max-width: 768px) {
        margin-left: 30px;
        margin-top: 50px;
        margin-bottom: 30px;
        font-size: 32px;
        line-height: 1.0714285714;
        font-weight: 600;
        letter-spacing: -0.005em;
    }
`

export const RecentOutside = styled.div`
    height: auto;
    width: 100%;
    margin-bottom: -10px;
    background: ${props => props.theme.mode === 'dark' ? 'black' : 'rgb(250, 250, 250)'};
    display: flex;
    flex-direction: column;

`