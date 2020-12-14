import { ContactStyle } from '../styles/pageStyles/ContactStyle'
import { useContext, useEffect, useState } from 'react'
import Context from '../store/Context'
import SEOHead from '../components/SEOHead'

const Contact = () => {
  const { setHomeActive, setResumeActive, setProjectsActive, setAboutActive, setContactActive, setMenuActive, menuActive } = useContext(Context)
  const [error, setError] = useState(false)
  const [flashMsg, setFlashMsg] = useState(
    <>
      <p>Houston, we have a problem!</p>
      <p className="span">Please, check the input fields.</p>
    </>
  )
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    document.querySelector('body').scrollTo(0, 0)
    setResumeActive(false)
    setHomeActive(false)
    setProjectsActive(false)
    setAboutActive(false)
    setContactActive(true)
    setMenuActive(false)
  }, [])

  const submitForm = (e) => {
    e.preventDefault()
    if (message.trim() == '' || name.trim() === '' || email.trim() === '') {
      setError(true)
    } else {
      // launch!!!!!!!
      console.log('Bravoooo!')
    }
  }

  return (
    <ContactStyle menuActive={menuActive} error={error}>
      <SEOHead title="Contact / Altun Rzayev - Portfolio" />
      <div className="container" onClick={() => (menuActive ? setMenuActive(false) : null)}>
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="intro-section">
          <div className="photo">
            <img src="/svg/4.svg" alt="" />
          </div>
          <div className="intro-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et mauris eu felis gravida tristique. Sed consectetur maximus euismod. Cras lobortis mollis orci, nec auctor ante luctus sed. Quisque porttitor enim et mi egestas tempor. Nulla eget augue ac ligula sagittis gravida in ut ex. Proin molestie dolor
              turpis, facilisis ultricies eros varius vitae. Praesent sed dictum risus. Sed consequat eros in risus auctor convallis. Aliquam purus massa, maximus vitae euismod a, lobortis ac justo. Cras feugiat lectus lorem, a auctor ante aliquet eget. Nam magna tellus, dapibus volutpat sollicitudin consectetur,
              pharetra ac tortor. Etiam tincidunt congue magna, eget aliquet tortor sagittis sit amet.
            </p>
          </div>
        </div>
        <div className="form-section">
          {error && <div className="error">{flashMsg}</div>}
          <form action="#" onSubmit={(e) => submitForm(e)}>
            <div className="inputs">
              <input type="text" placeholder="Your name" onChange={(input) => setName(input.target.value)} onFocus={() => setError(false)} />
              <input type="email" placeholder="Your email" onChange={(input) => setEmail(input.target.value)} onFocus={() => setError(false)} />
            </div>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Your message" onChange={(input) => setMessage(input.target.value)} onFocus={() => setError(false)}></textarea>
            <button>Launch</button>
          </form>
        </div>
      </div>
    </ContactStyle>
  )
}

export default Contact
