import Styled from 'styled-components'
import { lime, black, teal } from '../Colors'

export const MenuStyle = Styled.div`

width: 50vw;
height: 100vh;
background: rgba(255, 255, 255, 0);
position: fixed;
z-index: 7;
top: 0;
right: -100%;
display: flex;
justify-content: center;
align-items: center;
background: ${lime};
transition: .2s ease all;
animation: ${(props) => (props.menuActive ? 'showMenu .2s ease forwards;' : 'hideMenu .2s ease forwards;')}
box-shadow: 0 0 10px gray;

.container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80%;
        justify-content: space-around;
        align-items: center;

        li {
            width: 90px;
            display: flex;
            flex-direction: column;
            margin: 30px;
            align-items: center;
            transition: .2s ease all;
            cursor: pointer;
            justify-content: center;

            svg {
                width: 100%;
                transition: .1s ease all;    
                align-self: center;
            }

            p {
                font-size: 20px;
                font-weight: 600;
                color: ${black};
                position: relative;
                transition: .2s ease all;
            }

            p:after {
                content: '';
                position: absolute;
                bottom: -3px;
                left: 0;
                width: 0;
                height: 3px;
                background: ${teal};
                transition: .2s ease all;
            }
        }
        li:hover svg{
                transform: translateY(-8px);
            }
        li:hover p:after{
            width: 100%;
        }    
    }
}



@media screen and (max-width: 850px) {
    .container {  
        height: 100vh;
        align-items: flex-start;
        ul {
            height: 75%;
            margin-top: 100px;
            
            li {
                width: 90px;
                margin: 30px;
              
              
                p {
                    font-size: 14px;
                }
            }
        }
    }
}


@media screen and (max-width: 500px) {
    .container {  
        height: 100vh;
        align-items: flex-start;
        ul {
            height: 65%;
            margin-top: 100px;
            
            li {
                width: 40px;
                margin: 30px;
              
              
                p {
                    font-size: 14px;
                }
            }
        }
    }
}


@media screen and (max-width: 350px) {
    .container {  
        ul {
       
      
            li {        
                width: 30px;     
                p {
                    font-size: 12px;
                }
            }
        }
    }
}

@keyframes showMenu {
    from {
        right: -100%;
    } to {
        right: 0;
    }
}

@keyframes hideMenu {
    from {
        right: 0;
    } to {
        right: -100%;
    }
}

`
