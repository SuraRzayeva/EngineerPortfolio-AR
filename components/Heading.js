import { HeadingStyle } from '../styles/componentStyles/HeadingStyle'
import Link from 'next/link'
import Context from '../store/Context'
import { useContext } from 'react'

const Heading = () => {
  const { menuActive, setMenuActive } = useContext(Context)

  return (
    <HeadingStyle menuActive={menuActive}>
      <Link href="/">
        <div className="logo-section">
          <h1 className="title">Altun Rzayev</h1>
          <p className="description">Astronautical Engineer</p>
        </div>
      </Link>
      <div className="navbar-section">
        <div className="burger-menu" onClick={() => setMenuActive((prev) => !prev)}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </div>
      </div>
    </HeadingStyle>
  )
}

export default Heading
