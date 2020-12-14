import Styled from 'styled-components'
import { tealOpa, teal, black, lime } from '../Colors'

export const ProjectsStyle = Styled.div`


width: 100vw;
display: flex;
display: flex;
flex-direction: column;
opacity: ${(props) => (props.menuActive ? '.5' : 1)};

.container {
    width: 70%;
    margin: 100px auto 50px auto;
    padding: 50px;

    .title {
        h1 {
            font-size: 120px;
            color: ${teal};
            text-transform: uppercase;
        }
    }

    .intro-section {
        display: flex;
        width: 150%;
        height: 300px;
        background: ${lime};

        .photo {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        
            img {
                width: 70%;         
            }
        }

       .intro-text {
            width: 50%;
            height: 100%;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                color: ${black};
                font-size: 16px;
                line-height: 22px;
                letter-spacing: .5px;
                margin: 10px 0;
            }
        }
    }
    .section {
        width: 100%;
        display: flex;
        padding: 20px 0;
        color: ${black};
        justify-content: center;
        align-items: center;
        .description {
            width: 50%;
            height: 100%;
            background: rgba(255, 255, 255, 0.7);
            display: flex;
            flex-direction: column;

           .name {
               margin: 20px;

               h1 {
                color: ${teal};
               }
           }

           .info {
               margin-left: 20px;

               p {
                   line-height: 22px;
               }
           }

        }

        .photo {
            width: 50%;
            height: 100%;
            background: yellow;
            display: flex;

            img {
                width: 100%;
            }
        }

      
    }
}

@media screen and (max-width: 1100px) {
    .container {
        width: 92%;

        
    }
}

@media screen and (max-width: 850px) {
    .container {
        width: 80%;
        padding: 30px;
        margin: 100px auto 30px auto;

        .title {
            
            h1 {
                font-size: 90px;
       
            }
        }
        .intro-section {
            flex-direction: column;
            width: 100%;
            height: unset;

            .photo {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 30px;
                img {
                    width: 60%;
                }
            }

            .intro-text {
                width: 100%;

                p {
               
                    
                }
            }
        }

        .section {

            flex-direction: column;

            .photo {
                width: 100%;
            }

            .description {
                width: 100%;
            }
        }
}

}



@media screen and (max-width: 500px) {
    .container {
        width: 100%;
        padding: 30px;
        margin: 100px auto 20px auto;
        height: unset;

        .title {
            
            h1 {
                font-size: 50px;
       
            }
        }
        .intro-section {
            flex-direction: column;
            width: 100%;
            height: unset;

            .photo {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 30px;
                img {
                    width: 60%;
                }
            }

            .intro-text {
                width: 100%;

                p {
                    font-size: 12px;
                    line-height: 17px;
                    
                }
            }
        }

    }
    .section {

flex-direction: column;

.photo {
    width: 100%;
}

.description {
    width: 100%;

    .name {
        h1 {
            font-size: 20px;
            color: ${teal};
        }
    }
    .info {
        p {
            font-size: 12px;
        }
    }
}
}
}

`
