import styled, { keyframes } from 'styled-components';
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'
import BackgroundColor from '../../assets/shapes/backgroundOnHover.png'
/* Existing Styles Above */

/* Adding Responsive Styles */
export const CardWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    margin-top: 100px;
    margin-bottom: -160px;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.mode !== 'dark' ? 'black': 'white'};

    @media (max-width: 768px) {
        height: auto;
        margin-top: 50px;
        margin-bottom: -100px;
    }
`;

export const Card = styled.div`
  width: 80%;
  height: 80%;
  align-self: center;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 24px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 90%;
    height: 70%;
    flex-direction: column-reverse;
    padding: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column-reverse;
  }
`;

export const IntroSide = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ImageSide = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 420px;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageVector = styled.img`
  width: clamp(220px, 38vw, 460px);
  height: auto;
  z-index: 2;
  border-radius: 40%;
  position: relative;

  @media (max-width: 768px) {
    width: clamp(200px, 60vw, 340px);
    height: auto;
  }
`;

export const BlobVector = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: clamp(320px, 60vw, 780px);
  height: auto;
  border-radius: 50%;
  z-index: 1;
  animation: oscillater 5s infinite ease-in-out;

  @media (max-width: 768px) {
    width: clamp(260px, 80vw, 560px);
  }

  @keyframes oscillater {
    0% {
      transform: translate(-50%, -50%) translateY(0%);
    }
    50% {
      transform: translate(-50%, -50%) translateY(5%);
    }
    100% {
      transform: translate(-50%, -50%) translateY(0%);
    }
  }
`;

export const BlobVector2 = styled.img`
  align-self: center;
  width: 450px;
  height: 400px;
  border-radius: 50%;
  z-index: 3;
  margin-top: -10px;

  @media (max-width: 768px) {
    width: 300px;
    height: 280px;
    margin-top: -5px;
  }
`;

export const SubText = styled.p`
  font-size: 32px;
  line-height: 1.4705882353;
  font-weight: 400;
  letter-spacing: -0.022em;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Diff = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.mode !== 'dark' ? 'black': 'white'};
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const GradientDiv = styled.div`
  width: 100%;
  height: 8px;
  background: linear-gradient(to right, cyan, magenta, yellow);

  @media (max-width: 768px) {
    height: 4px;
  }
`;

export const Footer2 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 150px;
    margin-top: 15vh;
    margin-bottom: 10px;
  }
`;

export const AcrossDiv = styled.p`
  font-size: 32px;
  line-height: 1.4705882353;
  font-weight: 500;
  text-transform: uppercase;
  transform: rotate(-4deg);
  color: ${props => props.theme.mode !== 'dark' ? 'black': 'white'};
  letter-spacing: -0.022em;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -100px;
  height: auto;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Workplace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 40px;
  width: 30vw;
  height: 30vh;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    width: 80%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const WorkplaceTime = styled.div`
  font-size: 16px;
  white-space: nowrap;
  display: block;
  font-weight: normal;
  position: relative;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

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
  &:hover {
    background-image: url(${BackgroundColor});
  }

  @media (max-width: 768px) {
    background-position: right 10px;
    line-height: 100px;
    margin-left: 0;
    font-size: 24px;
    height: 140px;
    width: 140px;
  }
`;

export const WorkplaceLogo = styled.img`
  height: auto;
  width: auto;
  max-height: 10vh;
  max-width: 20vw;
  position: relative;

  @media (max-width: 768px) {
    max-height: 8vh;
    max-width: 40vw;
  }
`;

export const WorkplaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const WorkplaceHistory = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;

  @media (max-width: 768px) {
    height: 160px;
    width: 160px;
  }
`;

export const WorkplaceName = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const WorkplaceDuration = styled.div`
  display: flex;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const WorkplaceTitle = styled.div`
  display: flex;
  font-size: 34px;
  white-space: pre-wrap;
  font-weight: 900;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
