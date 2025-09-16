// FadeIn.js
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.7 } // Adjust threshold as needed
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <FadeInWrapper ref={ref} isVisible={isVisible}>
      {children}
    </FadeInWrapper>
  );
};

const FadeInWrapper = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;

  ${({ isVisible }) =>
    isVisible &&
    `
    opacity: 1;
    transform: translateY(0);
  `}
`;

export default FadeIn;
