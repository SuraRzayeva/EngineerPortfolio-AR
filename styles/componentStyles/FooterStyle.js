import Styled from 'styled-components'
import { teal } from '../Colors'
export const FooterStyle = Styled.div`

width: 100%;
height: 40px;
position: ${(props) => (props.homeActive ? 'absolute' : 'relative')};
bottom: 0;
left: 0;
.credit {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 450px) {
    .credit {
        p {
            font-size: 10px;
        }
    }
}

@media screen and (max-width: 340px) {
    position: relative;
  }

`
