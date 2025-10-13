import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I specialize in AI/ML engineering, data science, and full-stack development, 
            with expertise in building intelligent systems using LangChain, LangGraph, 
            and RAG pipelines. My data science foundation includes predictive modeling, 
            time-series forecasting, feature engineering, and statistical analysis using 
            TensorFlow, PyTorch, and Scikit-learn.
          </p>
          <p>
            From orchestrating multi-agent LLM systems to building MERN stack applications, 
            processing big data with Apache Spark and Hadoop, and developing machine learning 
            models that drive business insights, I thrive at the intersection of AI, data 
            science, and software engineering. I'm constantly exploring cutting-edge 
            technologies and applying them to solve complex, real-world challenges.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills