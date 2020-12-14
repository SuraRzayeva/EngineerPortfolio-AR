import { MenuStyle } from '../styles/componentStyles/MenuStyle'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../store/Context'
import ResumeSvg from './ResumeSvg'
import ContactSvg from './ContactSvg'
import ProjectsSvg from './ProjectsSvg'
import HomeSvg from './HomeSvg'

const Menu = () => {
  const { menuActive, setMenuActive } = useContext(Context)

  const closeMenu = () => {
    setMenuActive(false)
  }

  return (
    <MenuStyle menuActive={menuActive}>
      <div className="container">
        <ul>
          <Link href="/">
            <li onClick={closeMenu}>
              <HomeSvg />
              <p>Home</p>
            </li>
          </Link>
          <Link href="/resume">
            <li onClick={closeMenu}>
              <ResumeSvg />
              <p>Resume</p>
            </li>
          </Link>
          <Link href="/projects">
            <li onClick={closeMenu}>
              <ProjectsSvg />
              <p>Projects</p>
            </li>
          </Link>
          <Link href="/contact">
            <li onClick={closeMenu}>
              <ContactSvg />
              <p>Contact</p>
            </li>
          </Link>
        </ul>
      </div>
    </MenuStyle>
  )
}

export default Menu
