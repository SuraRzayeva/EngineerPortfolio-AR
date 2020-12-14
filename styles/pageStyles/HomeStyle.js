import Styled from 'styled-components'
import { black, teal, lime } from '../Colors'

export const HomeStyle = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  min-height: 100vh;
  opacity: ${(props) => (props.menuActive ? '.5' : 1)};

  .hero-section {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20%;



    .hey {
      font-size: 160px;
      line-height: 190px;
      color: ${black};

    }

    .welcome {
      font-size: 60px;
      margin-bottom: 10px;
    }

    .text {
      line-height: 1.8rem;
      letter-spacing: 1px;
      width: 80%;
    }
    
    .cta {
      width: 50%;
      height: 50px;
      border-style: none;
      margin-top: 10px;
      border-radius: 3px;
      background: ${teal};
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: .2s ease all;
    }

    .cta:hover {
      background: ${lime};
    }

    .cta:active, .cta:focus {
      outline: none;
    }
  }

  .robot-section {
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;

  }

  @media screen and (max-width: 1000px) {
    .hero-section {
      padding-left: 60px;

      .hey {
        font-size: 140px;
        line-height: 200px;
      }

      .welcome {
        font-size: 25px;
      }
    }
  }

  @media screen and (max-width:500px) {
      flex-direction: column-reverse;
      .hero-section {
        width: 100%;
        height: 50%;
        justify-content: flex-start;
        padding-left: 20px;

        .hey {
            font-size: 70px;
            line-height: 110px;
        }
        .text {
          font-size: 12px;
          line-height: 18px;
        }
      }

      .robot-section {
        width: 100%;
        height: 50%;
      }
  }

  @media screen and (max-width: 330px) {
    height: 130vh;
  }

`
