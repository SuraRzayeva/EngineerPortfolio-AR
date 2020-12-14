import { useState } from 'react'
import Context from './Context'

const ContextWrapper = ({ children, homeActive, setHomeActive, menuActive, setMenuActive }) => {
  const [resumeActive, setResumeActive] = useState(false)
  const [projectsActive, setProjectsActive] = useState(false)
  const [aboutActive, setAboutActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)
  return <Context.Provider value={{ homeActive, menuActive, setMenuActive, setHomeActive, resumeActive, setResumeActive, projectsActive, setProjectsActive, aboutActive, setAboutActive, contactActive, setContactActive }}>{children}</Context.Provider>
}

export default ContextWrapper
