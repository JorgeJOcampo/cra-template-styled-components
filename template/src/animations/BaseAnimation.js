import styled from 'styled-components';

// TODO https://medium.com/codeuai/working-with-animations-using-styled-components-de4dca3a0e79

// Util https://developer.mozilla.org/es/docs/Web/CSS/animation-fill-mode

const BaseAnimation = styled.div`
  animation-duration: ${(props) => props.duration};
  animation-timing-function: ${(props) => props.timingFunction};
  animation-delay: ${(props) => props.delay};
  animation-iteration-count: ${(props) => props.iterationCount};
  animation-direction: ${(props) => props.direction};
  animation-fill-mode: ${(props) => props.fillMode};
  animation-play-state: ${(props) => props.playState};
  display: ${(props) => props.display};
`;

BaseAnimation.defaultProps = {
  duration: '1s',
  timingFunction: 'linear',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
};

export default BaseAnimation;
