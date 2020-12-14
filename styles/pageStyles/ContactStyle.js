import Styled from 'styled-components'
import { teal, tealOpa, black, lime, errorRed } from '../Colors'

export const ContactStyle = Styled.div`

width: 100vw;
display: flex;
display: flex;
flex-direction: column;
opacity: ${(props) => (props.menuActive ? '.5' : 1)};
overflow-x: hidden;
    
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
        background: ${lime};
        align-items: center;

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


     .form-section {
        width: 100%;
        position: relative;

            .error {
                display: flex;
                flex-direction: column;
                align-items: center;  
                width: 100%;
                background: ${errorRed};
                padding: 10px 0;
                justify-content: center;
                align-items: center;
                margin-top: 20px;

                p {
                    color: white;
                    font-weight: 700;
                    text-transform: uppercase;
                    padding: 2px 0;
                }

                .span {
                    font-size: 11px;
                    letter-spacing: 1px;
                    font-weight: 500;
                }
     }

            form {
                display: flex;
                flex-direction: column;
                padding: 20px 0;
                width: 100%;
                justify-content: center;

            button {
                height: 45px;
                margin-top: 20px;
                border-style: none;
                background: ${teal};
                font-size: 14px;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                text-transform: uppercase;
                transition: .2s ease all;
                cursor: pointer;
                outline: none;
            }    

            button:hover {
                background: ${lime};
            }
            .inputs {
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 10px;

                input {
                    height: 45px;
                    width: 49%;
                    padding: 20px;
                    border-style: none;
                    border: 2px solid ${(props) => (props.error ? errorRed : teal)};
                    letter-spacing: 1px;
                    font-weight: 500;
                    outline: none;
                    font-family: Helvetica, sans-serif;
                    transition: .2s ease all;
                }

                input:active, input:focus {
                    border: 2px solid ${(props) => (props.error ? errorRed : teal)};
                }

                input::placeholder {
                    font-family: Helvetica, sans-serif;
                    color: gray;
                    font-weight: 300;
                }
            }

            textarea {
                width: 100%;
                height: 150px;
                outline: none;
                border-style: none;
                border: 2px solid ${(props) => (props.error ? errorRed : teal)};
                padding: 20px;
                font-weight: 500;
                font-family: Helvetica, sans-serif;
                transition: .2s ease all;
                }

                textarea:active, textarea:focus {
                    border: 2px ${lime} solid;
                }
            textarea::placeholder {
                    font-family: Helvetica, sans-serif;
                    color: gray;
                    font-weight: 300;
                }
        }
    }
}

@media screen and (max-width: 1200px) {
.container {
    height: 83vh;
    .intro-section {
        width: 100%;
        flex-direction: column;
        .photo {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 30px;
                img {
                    width: 40%;
                }
            }

        .intro-text {
            width: 100%;
        }
    }
}
}

@media screen and (max-width: 850px) {
    .container {
        width: 80%;
        padding: 30px;
        margin: 100px auto 30px auto;
        height: unset;
    
        .title {
            h1 {
                font-size: 110px;
            }
        }
        .intro-section {
            width: 100%;
            flex-direction: column;

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
            }
        }
        .form-section {
            .error {
            p {
                font-size: 12px;
            }
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
                font-size: 60px;
       
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

        .form-section {
            .error {
                p {
                    font-size: 10px;
                    text-align: center;
                }
                .span {
                    font-size: 8px;
              
                }
            }
            form {
                
            button {
                margin-top: 10px;
                font-size: 12px;
            }    
            .inputs {
                display: flex;
                flex-direction: column;
                margin-bottom: 0;

                input {

                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px ${teal} solid;
                    letter-spacing: unset;
                }
            }

            textarea {
                border: 1px ${teal} solid;
                padding: 10px;
       
            }
        }
    }
    }
}

@media screen and (max-width: 350px) {
    .container {
        .title {
            
            h1 {
                font-size: 45px;
       
            }
        }
    }
}
`
