import { useEffect, useState } from 'react'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const workExperience = [
  {
    id: 1,
    company: 'FundMyCrop',
    companyUrl: 'https://fundmycrop.com/',
    position: 'Data Scientist Intern',
    duration: 'March 2024 – November 2024',
    location: 'Karnataka, India',
    achievements: [
      'Built time-series forecasting models using TensorFlow and ARIMA for anomaly detection in agritech data, enabling proactive identification of market trends and crop risks.',
      'Performed feature engineering and exploratory data analysis (EDA) to support predictive models, improving pipeline efficiency and model accuracy.',
      'Collaborated with cross-functional teams to translate business requirements into data-driven solutions, enhancing decision-making for agritech stakeholders.'
    ]
  },
  {
    id: 2,
    company: 'Google Developer Groups',
    companyUrl: 'https://gdg.community.dev/',
    position: 'Digital Lead',
    duration: 'January 2025 – March 2025',
    location: 'Northeastern University, Boston',
    achievements: [
      'Coordinated tech workshops and information sessions for 100+ students, fostering a collaborative learning environment and promoting technical skill development.',
      'Streamlined communication strategies across multiple channels, improving event attendance and community engagement by organizing technical talks and networking events.',
      'Managed digital presence and outreach efforts, strengthening the GDG community at Northeastern University.'
    ]
  },
  {
    id: 3,
    company: 'Nitte University',
    companyUrl: 'https://nitte.edu.in/',
    position: 'Undergraduate Teaching Assistant',
    duration: 'March 2023 – January 2024',
    location: 'Karnataka, India',
    achievements: [
      'Mentored students in Deep Learning courses, leading discussions and supporting hands-on lab sessions to reinforce theoretical concepts with practical applications.',
      'Provided one-on-one guidance to students on course projects, homework assignments, and exam preparation, improving overall class performance and understanding.',
      'Assisted professors in curriculum development and grading, ensuring consistent educational standards and timely feedback for over 50 students.'
    ]
  }
]

const Experience = () => {
  const experienceArray = 'Experience'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone" >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experienceArray}
              idx={15}
            />
          </h1>
          <p>
            My professional journey spans AI/ML engineering, data science, and 
            education. From building predictive models in agritech to leading 
            tech communities and mentoring students, each role has shaped my 
            approach to solving real-world problems with technology.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <h3 className="company-name">
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </h3>
                    <h4 className="position">{job.position}</h4>
                    <div className="job-meta">
                      <span className="duration">{job.duration}</span>
                      <span className="location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience