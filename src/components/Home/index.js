import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

import LogoTitle from '../../assets/images/logo-j.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'eevith'.split('')
  const jobArray = 'AI/ML Engineer & Full Stack Developer'.split('')
  const interestArray = 'LangGraph | MERN Stack | Data Science'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Jeevith" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={42}
            />
          </h1>
          <h2>
            Building Intelligent Systems | Scaling AI Workflows | Crafting Seamless User Experiences
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <div className="particles-container">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: {
                enable: false,
                zIndex: 0,
              },
              background: {
                color: {
                  value: 'transparent',
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push',
                  },
                  onHover: {
                    enable: true,
                    mode: 'grab',
                  },
                },
                modes: {
                  push: {
                    quantity: 2,
                  },
                  grab: {
                    distance: 140,
                    links: {
                      opacity: 0.5,
                    },
                  },
                },
              },
              particles: {
                color: {
                  value: '#22c55e',
                },
                links: {
                  color: '#22c55e',
                  distance: 150,
                  enable: true,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: 'none',
                  random: false,
                  straight: false,
                  outModes: {
                    default: 'out',
                  },
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home