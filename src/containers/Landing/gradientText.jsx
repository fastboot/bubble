import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: left;
`;

const GradientTextWrapper = styled.div`
  background: ${props => props.theme.mode === 'dark' 
    ? 'linear-gradient(135deg, #FF69B4 0%, #6A5ACD 50%, #00FFFF 100%)'
    : 'linear-gradient(135deg, #FF69B4 0%, #6A5ACD 50%, #00FFFF 100%)'};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Txt = styled.div`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 1440px) and (min-width: 1025px) {
    font-size: clamp(2.5rem, 7vw, 5rem);
  }
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 10vw, 4rem);
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 12vw, 3rem);
    line-height: 1.3;
  }
`;

const GradientText = ({ text="", currTheme }) => {
  return (
    <Container>
      <GradientTextWrapper theme={currTheme}>
        <Txt>
          {text}
        </Txt>
      </GradientTextWrapper>
    </Container>
  );
};

export default GradientText;
