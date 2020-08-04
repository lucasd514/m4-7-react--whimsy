import React from "react";
import styled, { keyframes } from "styled-components";
function PoppingCircle({ color }) {
  return <Wrapper color={color} />;
}
const pop = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  background-color: pink;
  width: 120%;
  height: 120%;
  border-radius: 100%;
  animation: ${pop} 500ms forwards, ${fade} 800ms forwards;
`;
export default PoppingCircle;
