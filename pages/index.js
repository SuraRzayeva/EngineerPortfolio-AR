import Head from 'next/head'
import { HomeStyle } from '../styles/pageStyles/HomeStyle'
import Robot from '../components/Robot'
import { useEffect, useContext } from 'react'
import Context from '../store/Context'
import SEOHead from '../components/SEOHead'

export default function Home() {
  const { setContactActive, setHomeActive, setAboutActive, setResumeActive, setProjectsActive, setMenuActive, menuActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(true)
    setResumeActive(false)
    setProjectsActive(false)
    setAboutActive(false)
    setContactActive(false)
    setMenuActive(false)
  }, [])

  return (
    <HomeStyle menuActive={menuActive}>
      <SEOHead title="Altun Rzayev - Aeronautical Engineer" description="Will set a description later" />
      <div className="hero-section" onClick={() => (menuActive ? setMenuActive(false) : null)}>
        <h1 className="hey">Hey,</h1>
        <h3 className="welcome">Welcome to my spaceship!</h3>
        <p className="text"> My name is Altun Rzayev and I'm Aeronautical & Mechatronics Engineer...and self-declared coffee-expert. Wanna learn more about my work?</p>
        <button className="cta" onClick={() => setMenuActive((prev) => !prev)}>
          Let's start
        </button>
      </div>
      <div className="robot-section">
        <Robot />
      </div>
    </HomeStyle>
  )
}
