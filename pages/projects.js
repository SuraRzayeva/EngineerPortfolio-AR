import { ProjectsStyle } from '../styles/pageStyles/ProjectsStyle'
import { useContext, useEffect } from 'react'
import Context from '../store/Context'
import ProjectsSvg from '../components/ProjectsSvg'
import SEOHead from '../components/SEOHead'

const Projects = ({ img }) => {
  const { menuActive, setHomeActive, setAboutActive, setProjectsActive, setResumeActive, setContactActive, setMenuActive } = useContext(Context)

  useEffect(() => {
    setHomeActive(false)
    setProjectsActive(true)
    setResumeActive(false)
    setAboutActive(false)
    setContactActive(false)
    setMenuActive(false)
  }, [])

  if (!img) {
    return <p>Loading...</p>
  }

  return (
    <ProjectsStyle menuActive={menuActive}>
      <SEOHead title="Projects / Altun Rzayev - Portfolio" />
      <div className="container" onClick={() => (menuActive ? setMenuActive(false) : null)}>
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="intro-section">
          <div className="photo">
            <ProjectsSvg />
          </div>
          <div className="intro-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et mauris eu felis gravida tristique. Sed consectetur maximus euismod. Cras lobortis mollis orci, nec auctor ante luctus sed. Quisque porttitor enim et mi egestas tempor. Nulla eget augue ac ligula sagittis gravida in ut ex. Proin molestie dolor
              turpis, facilisis ultricies eros varius vitae. Praesent sed dictum risus. Sed consequat eros in risus auctor convallis. Aliquam purus massa, maximus vitae euismod a, lobortis ac justo. Cras feugiat lectus lorem, a auctor ante aliquet eget. Nam magna tellus, dapibus volutpat sollicitudin consectetur,
              pharetra ac tortor. Etiam tincidunt congue magna, eget aliquet tortor sagittis sit amet.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="photo">
            <img src="https://picsum.photos/500/300" alt="" />
          </div>
          <div className="description">
            <div className="name">
              <h1>Rocket Landing</h1>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et mauris eu felis gravida tristique. Sed consectetur maximus euismod. Cras lobortis mollis orci, nec auctor ante luctus sed. Quisque porttitor enim et mi egestas tempor. Nulla eget augue ac ligula sagittis gravida in ut ex. Proin molestie
                dolor turpis, facilisis ultricies eros varius vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectsStyle>
  )
}

Projects.getInitialProps = () => {
  const img = '/svg/3.svg'
  return {
    img: img,
  }
}

export default Projects
