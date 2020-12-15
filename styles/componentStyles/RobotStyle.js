import styled from 'styled-components'
import { lime } from '../Colors'

export const RobotStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: floatRobot 5s ease infinite;
  }

  #eyes {
    animation: winkEyes 2s ease infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #eye1,
  #eye2 {
    fill: ${lime};
  }

  @keyframes floatRobot {
    0% {
      transform: translate(-50%, -50%);
    }
    50% {
      transform: translate(-50%, -35%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }

  @keyframes resizeShadow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes winkEyes {
    0% {
      transform: scaleY(1);
    }
    10% {
      transform: scaleY(0);
    }
    20% {
      transform: scaleY(1);
    }
    30% {
      transform: scaleY(1);
    }
    40% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1);
    }
    60% {
      transform: scaleY(1);
    }
    70% {
      transform: scaleY(1);
    }
    80% {
      transform: scaleY(1);
    }
    90% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(1);
    }
  }

  @media screen and (max-width: 1300px) {
    svg {
      width: 35%;
    }
  }

  @media screen and (max-width: 500px) {
    svg {
      width: 38%;
    }
  }
`
