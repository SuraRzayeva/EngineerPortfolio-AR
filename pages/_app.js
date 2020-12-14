import { GlobalStyle } from '../styles/GlobalStyle'
import Heading from '../components/Heading'
import ContextWrapper from '../store/ContextWrapper'
import Menu from '../components/Menu'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const [homeActive, setHomeActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0)
  }, [menuActive])

  return (
    <ContextWrapper homeActive={homeActive} setHomeActive={setHomeActive} menuActive={menuActive} setMenuActive={setMenuActive}>
      <Heading />
      {menuActive && <Menu menuActive={menuActive} />}
      <Component {...pageProps} />
      <Footer homeActive={homeActive} />
      <GlobalStyle menuActive={menuActive} />
    </ContextWrapper>
  )
}

export default MyApp
