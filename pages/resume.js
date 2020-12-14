import { ResumeStyle } from '../styles/pageStyles/ResumeStyle'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import Context from '../store/Context'
import Head from 'next/head'
import SEOHead from '../components/SEOHead'

const Resume = ({ image }) => {
  const { menuActive, setResumeActive, setAboutActive, setHomeActive, setProjectsActive, setContactActive, setMenuActive } = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0)
    setResumeActive(true)
    setHomeActive(false)
    setProjectsActive(false)
    setAboutActive(false)
    setContactActive(false)
    setMenuActive(false)
  }, [])

  return (
    <ResumeStyle menuActive={menuActive}>
      <SEOHead title="My Resume / Altun Rzayev - Portfolio" />
      <div className="container" onClick={() => (menuActive ? setMenuActive(false) : null)}>
        <div className="title">
          <h1>Who am I?</h1>
        </div>
        <div className="intro-section">
          <div className="photo">
            <img className="img" src={image} alt="" />
          </div>
          <div className="intro-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et mauris eu felis gravida tristique. Sed consectetur maximus euismod. Cras lobortis mollis orci, nec auctor ante luctus sed. Quisque porttitor enim et mi egestas tempor. Nulla eget augue ac ligula sagittis gravida in ut ex. Proin molestie dolor
              turpis, facilisis ultricies eros varius vitae. Praesent sed dictum risus.
            </p>
            <p>
              Sed consequat eros in risus auctor convallis. Aliquam purus massa, maximus vitae euismod a, lobortis ac justo. Cras feugiat lectus lorem, a auctor ante aliquet eget. Nam magna tellus, dapibus volutpat sollicitudin consectetur, pharetra ac tortor. Etiam tincidunt congue magna, eget aliquet tortor sagittis
              sit amet.
            </p>
          </div>
        </div>
        {/* Education Section */}
        <div className="section education-section">
          <div className="title">
            <h3>Education</h3>
          </div>
          <div className="table">
            <div className="event">
              <div className="date">06.2017 – 08.2018 </div>
              <div className="description">
                <h3>Mechatronics Engineering (MSc) – Bahcesehir University</h3>
                <p>Thesis: Nonlinear and Adaptive Control System for Rocket Landing Using Minimum Fuel Optimal Trajectory</p>
              </div>
            </div>
            <div className="event">
              <div className="date">06.2017 – 08.2018 </div>
              <div className="description">
                <h3>Astronautical Engineering (BSc) – Istanbul Technical University</h3>
                <p>Thesis: Integration and Environmental tests of UBAKUSAT</p>
              </div>
            </div>
            <div className="event">
              <div className="date">06.2017 – 08.2018 </div>
              <div className="description">
                <h3>Mechanical Engineering – Bucharest Polytechnic University</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Professional Section */}
        <div className="section education-section">
          <div className="title">
            <h3>Professional Activity</h3>
          </div>
          <div className="table">
            <div className="event">
              <div className="date">06.2017 – 08.2018</div>
              <div className="description">
                <h3>Co-Founder, Engineer – “Beenex Robotics and Space Technologies”</h3>
                <p>As a new start-up company, was established in Melbourne/ Australia, we were working on propulsion system kit for cubesats, and autonomous rocket control. As robotics, new STEM projects were improving to teach the students engineering by applied real world appliances</p>
              </div>
            </div>
            <div className="event">
              <div className="date">10.2016 – 03.2017</div>
              <div className="description">
                <h3>Quality-Control Engineer – “Vienna-A LLC”</h3>
                <p>Responsible for the quality/control of the equipment and materials, and correcting structural and technical errors in the area.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">06.2016 – 10.2016</div>
              <div className="description">
                <h3>Mechanical Engineer – “Tekno Crusher”</h3>
                <p>Responsible for the technical reports of the department, and the routine control of the machinery before/after sale.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">08.2015 – 02.2016 </div>
              <div className="description">
                <h3>Intern Design Engineer – “SSDTL”</h3>
                <p>Design and build of Helmholtz cage for the attitude, determination and control subsystem of cubesats. Also worked on environmental tests and integration of 3U cubesat(UBAKUSAT)</p>
              </div>
            </div>
            <div className="event">
              <div className="date">08.2014 – 09.2014 </div>
              <div className="description">
                <h3>Intern Satellite Engineer – “Azercosmos OJSC”</h3>
                <p>Worked on satellite communication with real-time projects and design its subsystems.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">08.2013 – 09.2013</div>
              <div className="description">
                <h3>Intern Mechanical Engineer – “Baku Steel Company”</h3>
                <p>By working in this company, I have developed skills on using mechanical equipment and vehicles such as welding and cutter.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Teams Section */}
        <div className="section education-section">
          <div className="title">
            <h3>Academic activities</h3>
          </div>
          <div className="table">
            <div className="event">
              <div className="date">08.2014 – 06.2015 </div>
              <div className="description">
                <h3>ATA 16 - Mechanical Team (AIAA DBF)</h3>
                <p>We designed a model aircraft that carried 3 balls as a payload and dropped them separately at each flight circle. I worked in mechanical team, which was responsible for the structure and mechanisms.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">02.2014 – 06.2014</div>
              <div className="description">
                <h3>RC Model Aircraft - Design Team</h3>
                <p>Using classic Telemaster model aircraft, and worked on its aerodynamics and structure to improve its flight stability and determination.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">12.2012 – 03.2014 </div>
              <div className="description">
                <h3>YouthNetwork ofAzerbaijan – Marketing Team Leader</h3>
                <p>As a co-founder of organization, we, as a team, arranged meetings and appointments between CEOs and university students to help them to achieve their career aim, and introduce the industry conditions.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">09.2013 – 11.2013</div>
              <div className="description">
                <h3>Unmanned Aircraft Project (TUBITAK project)</h3>
                <p>During these project, we aimed to design a new UAV that is able to land/take-off vertically and fly horizontally</p>
              </div>
            </div>
            <div className="event">
              <div className="date">12.2013 – 01.2015</div>
              <div className="description">
                <h3>ITUrbo - Aircraft Engine Team</h3>
                <p>By using PW90 (Pratt & Whitney) model turbojet engine as a base, we improved its features using different material in its inner parts.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">06.2013 – 12.2013 </div>
              <div className="description">
                <h3>PARS Rocket – Hybrid Rocket Engine Team</h3>
                <p>We were working on designing and building Hybrid Rocket Engine to transport payloads to Low Earth Orbit.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">06.2013 – 12.2013 </div>
              <div className="description">
                <h3>CanSat Model Satellite – Mechanical Team</h3>
                <p>We designed a model satellite that should be able to transmit atmospheric data during its flight from 700 m to ground. I was responsible for landing parachute system and payload protection.</p>
              </div>
            </div>
            <div className="event">
              <div className="date">06.2013 – 12.2013 </div>
              <div className="description">
                <h3>AeroModel Aircraft and Rocket school</h3>
                <p>As an aviation and space amateur, I learnt about how to build RC Aircrafts and Solid Engine Rockets</p>
              </div>
            </div>
          </div>
        </div>
        <div className="reference">
          <Link href="/contact">References available upon request.</Link>
        </div>
      </div>
    </ResumeStyle>
  )
}

Resume.getInitialProps = () => {
  const image = '/svg/2.svg'
  return {
    image: image,
  }
}

export default Resume
