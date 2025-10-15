/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  faAws,
  faDocker,
  faJsSquare,
  faNode,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I'm a Computer Science Master's student at UNC Charlotte with a passion 
            for building intelligent systems and scalable<br></br> applications. My expertise 
            spans AI/ML engineering, full-stack development, and distributed systems, 
            with hands-on<br></br> experience in LangChain, LangGraph, RAG pipelines, and the 
            MERN stack.
          </p>
          <p>
            I've published IEEE research on melanoma detection using deep learning 
            (Best Paper Award), built multi-agent LLM <br></br>systems with vector databases, 
            and worked as a Data Scientist Intern developing time-series forecasting 
            models.<br></br> Whether it's orchestrating intelligent agents, optimizing data 
            pipelines with Apache Spark, or creating seamless user<br></br> experiences, I 
            bring a holistic approach to solving real-world problems.
          </p>
          <p>
            Currently, I'm diving deep into advanced AI/ML workflows and building 
            projects that bridge the gap between<br></br> cutting-edge research and practical 
            applications. I'm always eager to learn, collaborate, and tackle 
            challenging problems<br></br> that make an impact.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNode} color="#68A063" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDocker} color="#0DB7ED" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About