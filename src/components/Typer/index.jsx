import { useState, useEffect } from 'react'
import { StyledDiv } from './styles';

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 120,
}

function Typer({ messages, heading }) {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });
  const [componentMounted, setComponentMounted] = useState(true);

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      if(componentMounted) { 
        setState(cs => ({
          ...cs, // cs means currentState
          text: getCurrentText(cs),
          typingSpeed: getTypingSpeed(cs)
        }));
        timer = setTimeout(handleType, state.typingSpeed);
      }
    };
    handleType();
    return () => {
      clearTimeout(timer)
      setComponentMounted(false)
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isDeleting, state.typingSpeed]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        if(componentMounted) {
          setState(cs => ({
            ...cs,
            isDeleting: true
          }))
        }
      }, 2000);
    } else if (state.isDeleting && state.text === "") {
      if(componentMounted) {
        setState(cs => ({
          ...cs, // cs means currentState
          isDeleting: false,
          loopNum: cs.loopNum + 1,
          message: getMessage(cs, messages)
        }));
      }
    }
    return () => {
      setComponentMounted(false)
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <StyledDiv>
        <span>{state.text}</span>
      <span id="cursor" />
    </StyledDiv>
  );
}

export default Typer