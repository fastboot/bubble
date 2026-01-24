import styled from 'styled-components';
import BackgroundLight from '../../assets/shapes/PeakBackground.png'
import BackgroundDark from '../../assets/shapes/PeakBackgroundDark.png'
import BackgroundColor from '../../assets/shapes/backgroundOnHover.png'
/* Existing Styles Above */

/* Adding Responsive Styles */
export const CardWrapper = styled.div`
    width: 100vw;
    min-height: 80vh;
    margin-top: 100px;
    margin-bottom: -200px;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.mode !== 'dark' ? 'black': 'white'};

    @media (max-width: 1920px) and (min-width: 1441px) {
        min-height: 75vh;
        margin-top: 90px;
        margin-bottom: -180px;
    }

    @media (max-width: 1440px) and (min-width: 1025px) {
        min-height: 85vh;
        margin-top: 80px;
        margin-bottom: -160px;
    }

    @media (max-width: 1024px) {
        min-height: auto;
        margin-top: 60px;
        margin-bottom: -140px;
    }

    @media (max-width: 768px) {
        min-height: auto;
        margin-top: 50px;
        margin-bottom: -120px;
    }

    @media (max-width: 480px) {
        margin-top: 40px;
        margin-bottom: -100px;
    }
`;

export const Card = styled.div`
  width: 90%;
  max-width: 1600px;
  min-height: 80%;
  align-self: center;
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 32px;
  overflow: hidden;

  @media (max-width: 1920px) and (min-width: 1441px) {
    width: 85%;
    gap: 28px;
    padding: 28px;
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    width: 90%;
    gap: 40px;
    padding: 24px;
    flex-direction: row;
  }

  @media (max-width: 1024px) {
    width: 95%;
    flex-direction: column;
    gap: 32px;
    padding: 24px;
    min-height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 24px;
    padding: 20px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 16px;
    border-radius: 12px;
  }
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  flex: 0 1 65%;

  @media (max-width: 1920px) and (min-width: 1441px) {
    flex: 0 1 64%;
    gap: 28px;
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    flex: 0 1 55%;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  @media (max-width: 1024px) {
    flex: 1 1 100%;
    width: 100%;
    flex-direction: column;
    gap: 24px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const IntroSide = styled.div`
  flex: 0 1 50%;
  min-width: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 0 16px;

  @media (max-width: 1920px) and (min-width: 1441px) {
    flex: 0 1 48%;
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    flex: 1 1 100%;
    width: 100%;
    padding: 0 8px;
  }

  @media (max-width: 1024px) {
    flex: 1 1 100%;
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    padding: 0 4px;
  }
`;

export const ImageSide = styled.div`
  flex: 0 1 35%;
  min-width: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 420px;

  @media (max-width: 1920px) and (min-width: 1441px) {
    flex: 0 1 36%;
    min-height: 380px;
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    flex: 0 1 45%;
    min-height: 500px;
  }

  @media (max-width: 1024px) {
    flex: 1 1 100%;
    width: 100%;
    min-height: 320px;
    order: 1;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    min-height: 280px;
  }

  @media (max-width: 480px) {
    min-height: 240px;
  }
`;

export const ImageVector = styled.img`
  --img-size: clamp(200px, 25vw, 460px);

  width: var(--img-size);
  height: auto;
  z-index: 2;
  border-radius: 40%;
  position: relative;
  object-fit: contain;

  @media (max-width: 1024px) {
    --img-size: clamp(200px, 50vw, 340px);
  }

  @media (max-width: 768px) {
    --img-size: clamp(180px, 55vw, 300px);
  }

  @media (max-width: 480px) {
    --img-size: clamp(160px, 60vw, 260px);
  }
`;

export const BlobVector = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  /* Blob is always bigger than image */
  width: calc(var(--img-size) * 2);
  height: auto;

  border-radius: 50%;
  z-index: 1;
  animation: oscillater 5s infinite ease-in-out;
  object-fit: contain;

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
  font-size: clamp(20px, 2vw, 32px);
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: -0.022em;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 8px 0;

  @media (max-width: 1920px) and (min-width: 1441px) {
    font-size: clamp(20px, 1.8vw, 30px);
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    font-size: clamp(18px, 1.6vw, 28px);
  }

  @media (max-width: 1024px) {
    font-size: clamp(18px, 2.5vw, 26px);
  }

  @media (max-width: 768px) {
    font-size: clamp(16px, 3vw, 24px);
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: clamp(14px, 4vw, 20px);
  }
`;

export const Diff = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.mode !== 'dark' ? 'black': 'white'};
  margin-top: 24px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    margin-top: 12px;
    margin-bottom: 12px;
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
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  @media (max-width: 1024px) {
    min-height: 180px;
    padding: 16px 0;
  }

  @media (max-width: 768px) {
    min-height: 150px;
    margin-top: 12vh;
    margin-bottom: 10px;
    padding: 12px 0;
  }

  @media (max-width: 480px) {
    min-height: 120px;
    margin-top: 8vh;
    padding: 10px 0;
  }
`;

export const AcrossDiv = styled.p`
  font-size: clamp(20px, 2vw, 32px);
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  transform: rotate(-4deg);
  color: ${props => props.theme.mode !== 'dark' ? 'black': 'white'};
  letter-spacing: -0.022em;
  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 12px 0;

  @media (max-width: 1440px) and (min-width: 1025px) {
    font-size: clamp(18px, 1.8vw, 28px);
  }

  @media (max-width: 1024px) {
    font-size: clamp(18px, 2.5vw, 26px);
  }

  @media (max-width: 768px) {
    font-size: clamp(16px, 3vw, 24px);
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    font-size: clamp(14px, 4vw, 20px);
    margin: 6px 0;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  height: auto;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const Workplace = styled.div`
  flex: 0 1 50%;
  min-width: 0;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;
  padding: 0 16px;
  flex-wrap: wrap;

  @media (max-width: 1920px) and (min-width: 1441px) {
    flex: 0 1 52%;
    gap: 20px;
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    flex: 1 1 100%;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    padding: 0 8px;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    flex: 1 1 100%;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    padding: 0;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 16px;
    padding: 0 8px;
    flex-wrap: nowrap;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 24px;
    padding: 0 4px;
    flex-wrap: nowrap;
  }
`;

export const WorkplaceTime = styled.div`
  font-size: 14px;
  white-space: nowrap;
  display: block;
  font-weight: 400;
  position: relative;
  opacity: 0.8;
  text-align: center;

  @media (max-width: 1440px) and (min-width: 1025px) {
    font-size: 13px;
    text-align: left;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
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
  max-height: 70px;
  max-width: 140px;
  position: relative;
  object-fit: contain;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1920px) and (min-width: 1441px) {
    max-height: 65px;
    max-width: 130px;
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    max-height: 55px;
    max-width: 130px;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    max-height: 65px;
    max-width: 130px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    max-height: 50px;
    max-width: 100px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    max-height: 60px;
    max-width: 140px;
    margin-bottom: 10px;
  }
`;

export const WorkplaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 0 1 auto;
  min-width: 100px;
  max-width: 200px;

  @media (max-width: 1920px) and (min-width: 1441px) {
    min-width: 100px;
    max-width: 180px;
  }

  @media (max-width: 1440px) and (min-width: 1025px) {
    min-width: 100px;
    max-width: 180px;
    width: auto;
    align-items: flex-start;
    text-align: left;
    flex: 0 1 auto;
  }

  @media (max-width: 1024px) {
    flex: 1 1 0;
    min-width: 0;
    max-width: none;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 768px) {
    min-width: 0;
    flex: 0 1 30%;
    max-width: 140px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
    max-width: none;
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
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 6px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 1440px) and (min-width: 1025px) {
    font-size: 18px;
    text-align: left;
    margin-bottom: 4px;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 4px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
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
