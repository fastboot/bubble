import React from 'react';
import styled, { keyframes } from 'styled-components';

const animTextFlow = keyframes`
  0% { color: #ff0000; }   /* Red */
  17% { color: #ff8c00; }  /* Dark Orange (Gold variant) */
  34% { color: #ff00ff; }  /* Magenta */
  51% { color: #800080; }  /* Purple */
  68% { color: #0000ff; }  /* Blue */
  85% { color: #8a2be2; }  /* Blue Violet */
  100% { color: #ff0000; } /* Back to Red */
`;
const AnimatedText = styled.span`
  display: inline-block;
  animation: ${animTextFlow} 20s infinite;
  animation-delay: ${({ index }) => (index * 0.2) - 20}s;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Txt = styled.div`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-size: 5em;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  color: #fefefe;
  @media (max-width: 768px) {
    font-size: 2em;
    margin-left: 10%;
  }
`;

const GradientText = ({ text="" }) => {
  return (
    <Container>
      <Txt>
        {text.split('').map((char, index) => (
          <AnimatedText key={index} index={index}>
            {char}
          </AnimatedText>
        ))}
      </Txt>
    </Container>
  );
};

export default GradientText;
