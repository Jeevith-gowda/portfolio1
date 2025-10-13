import './index.scss'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faBriefcase,
  faEnvelope,
  faFile,
  faHome,
  faLaptopCode,
  faScrewdriverWrench,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

import LogoS from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo-subtitle.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Jeevith" />
      </Link>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} title="Home">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active about-link' : 'about-link')} title="About">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active experience-link' : 'experience-link')} title="Experience">
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active projects-link' : 'projects-link')} title="Projects">
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </NavLink>

        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active skills-link' : 'skills-link')} title="Skills">
          <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active contact-link' : 'contact-link')} title="Contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <a 
          href="/Jeevith_Resume.pdf" 
          download="Jeevith_Resume.pdf"
          className="resume-link" 
          title="Download Resume"
        >
          <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
        </a>
      </nav>
      <ul>
        <li>
          <a href="https://linkedin.com/in/jeevith-d-r" target="_blank" rel="noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Jeevith-gowda" target="_blank" rel="noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar