import Styled from 'styled-components'
import { black, teal, lime } from '../Colors'

export const ResumeStyle = Styled.div`


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
        box-shadow: 0 0 10px #808080;
        margin-bottom: 30px;

        .photo {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
                width: 70%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;    
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
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.7);


    .title {
        padding: 20px 0;
        h3 {
            color: ${teal};
        }
    }

    .table {
        display: flex;
        margin: 10px 0;
        flex-direction: column;

        .event {
            display: flex;
            padding: 10px 0;

            .date {
                width: 25%;
            }
            .description {
                width: 75%;
                
                p {
                    margin: 1% 0;
                    font-style: italic;
                }
            }
        }
    }
}

.reference {
    width: 100%;
    display: flex;
    margin: 30px 0;

    a {
        cursor: pointer;      
        position: relative;
        font-size: 16px;
    }

    a:after {
        content:'';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: ${lime};
        transition:.3s all ease;
    }

    a:hover:after {
        width: 100%;
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
                    font-size: 12px;
                    line-height: 17px;
                    
                }
            }
        }

    .section {
    .title {
        padding: 10px 0;
        h3 {
            color: ${teal};
        }
    }

    .table {
        display: flex;
        margin: 0;
        flex-direction: column;

        .event {
            display: flex;
            padding: 10px 0;

            .date {
                width: 25%;
                font-size: 14px;
                
            }
            .description {
                width: 75%;
                h3 {
                    font-size: 16px;
                    line-height: 22px;
                }
                p {
                    font-size: 12px;
                    margin: 1% 0;
                    font-style: italic;
                }
            }
        }
    }
}
.reference {
    a {
        font-size: 12px;
    }
    a:after {
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
}
`
