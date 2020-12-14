import { MenuStyle } from '../styles/componentStyles/MenuStyle'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../store/Context'

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
              <img src="/svg/1.svg" alt="" />
              <p>Home</p>
            </li>
          </Link>
          <Link href="/resume">
            <li onClick={closeMenu}>
              <img src="/svg/3.svg" alt="" />
              <p>Resume</p>
            </li>
          </Link>
          <Link href="/projects">
            <li onClick={closeMenu}>
              <img src="/svg/4.svg" alt="" />
              <p>Projects</p>
            </li>
          </Link>
          <Link href="/contact">
            <li onClick={closeMenu}>
              <img src="/svg/2.svg" alt="" />
              <p>Contact</p>
            </li>
          </Link>
        </ul>
      </div>
    </MenuStyle>
  )
}

export default Menu
