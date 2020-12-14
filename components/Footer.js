import { FooterStyle } from '../styles/componentStyles/FooterStyle'

const Footer = ({ homeActive }) => {
  return (
    <FooterStyle homeActive={homeActive}>
      <div className="credit">
        <p>
          &copy; Altun Rzayev - 2020 | Created by{' '}
          <a href="https://surarzayeva.com" target="blank">
            Sura Rzayeva
          </a>
        </p>
      </div>
    </FooterStyle>
  )
}

export default Footer
