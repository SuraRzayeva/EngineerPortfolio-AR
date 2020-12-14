import Styled from 'styled-components'
import { black, teal, lime } from '../Colors'

export const HeadingStyle = Styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  padding: 40px 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  .logo-section {
    width: 50%;
    cursor: pointer;

    .title {
      font-size: 22px;
    }
    .description {
      font-size: 18px;
    }
  }

  .navbar-section {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .language-btn {
      margin-left: auto;
      margin-right: 30px;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      margin-top: 15px;
       h2 {
         font-size: 23px;
       }

    }

    .burger-menu {
      width: 27px;
      height: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    
      z-index: 100;
      cursor: pointer;

      .line {
        height: 7px;
        width: 100%;
        background: ${black};
        margin-bottom: 4px;
        border-radius: 3px;
        transition: .3s ease all;
      }

      .line1 {
        transform: ${(props) => (props.menuActive ? 'rotate(-45deg)' : 'none')};
      }

      .line2 {
        width: ${(props) => (props.menuActive ? '100%' : '70%')};
        transform: ${(props) => (props.menuActive ? 'rotate(45deg) translate(-30%, -100%)' : 'none')};
      }
    }
    .burger-menu:hover .line{
      background: ${teal};
    }
  
  }


  @media screen and (max-width: 500px) {
      padding: 0;
      padding-top: 40px;
      position: absolute;

      .logo-section {
        padding-left: 15px;

        .title, .description {
          font-size: 14px;
        }
      }
      .navbar-section {
        padding-right: 15px;
        .burger-menu {
          width: 24px;
          .line {
            height: 6px;

          }
        }
      }
  }

  
`
