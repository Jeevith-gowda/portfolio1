import { useEffect, useState } from 'react'

import { faCode, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// Projects data - easily scalable for future additions
const projects = [
  {
    id: 1,
    title: 'Multi-Agent LLM System with LangGraph',
    description: 'Built an intelligent agent orchestration system using LangGraph for workflow automation and state management, with RAG pipeline for context-aware responses.',
    technologies: ['LangGraph', 'LangSmith', 'FAISS', 'Groq API', 'Docker', 'PostgreSQL', 'Python'],
    category: 'AI/ML',
    status: 'Completed',
    year: '2025',
    company: 'Personal Project',
    features: [
      'Intelligent agent orchestration with LangGraph',
      'RAG pipeline with FAISS vector storage',
      'LangSmith tracing for debugging',
      'Sub-second LLM inference with Groq API (llama-3.1-8b-instant)',
      'Containerized deployment with Docker and PostgreSQL'
    ],
    images: [],
    githubUrl: 'https://github.com/Jeevith-gowda', // Update with actual repo
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 2,
    title: 'Distributed Data Processing Pipeline',
    description: 'Built scalable data pipelines using Apache Spark and Hadoop MapReduce for big data analytics with containerized microservices.',
    technologies: ['Apache Spark', 'Hadoop MapReduce', 'PySpark', 'Docker', 'PostgreSQL', 'Python'],
    category: 'Data Engineering',
    status: 'Completed',
    year: '2025',
    company: 'Personal Project',
    features: [
      'Scalable data pipelines with Apache Spark',
      'Hadoop MapReduce for distributed computing',
      'Containerized microservices with Docker',
      'Optimized PostgreSQL queries',
      'Jaccard Similarity for data deduplication'
    ],
    images: [],
    githubUrl: 'https://github.com/Jeevith-gowda', // Update with actual repo
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 3,
    title: 'Melanoma Detection Using Deep Learning',
    description: 'IEEE published research with Best Paper Award. Developed CNN-based system to detect melanoma from dermoscopic images with 94% accuracy.',
    technologies: ['TensorFlow', 'Keras', 'CNN', 'Python', 'Computer Vision', 'Medical Imaging'],
    category: 'AI/ML',
    status: 'Published',
    year: '2024',
    company: 'Research Project',
    features: [
      '94% accuracy in melanoma detection',
      'CNN-based deep learning architecture',
      'Data augmentation for improved performance',
      'Medical image analysis and preprocessing',
      'IEEE Xplore publication - Best Paper Award'
    ],
    images: [],
    githubUrl: null,
    liveUrl: 'https://ieeexplore.ieee.org/', // Update with actual paper link
    isPrivate: false
  },
  {
    id: 4,
    title: 'Customer Purchase Behavior Prediction',
    description: 'Built predictive model using Random Forest and Logistic Regression to identify customer purchase intent with 15% improved accuracy.',
    technologies: ['Scikit-learn', 'Random Forest', 'Logistic Regression', 'Pandas', 'NumPy', 'Matplotlib', 'Python'],
    category: 'Data Science',
    status: 'Completed',
    year: '2025',
    company: 'Personal Project',
    features: [
      'Predictive modeling with Random Forest',
      'Logistic Regression for classification',
      '15% improvement in predictive accuracy',
      'Feature engineering and selection',
      'Cross-validation for model optimization'
    ],
    images: [],
    githubUrl: 'https://github.com/Jeevith-gowda', // Update with actual repo
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 5,
    title: 'Full-Stack RAG Application',
    description: 'Built a production-ready RAG (Retrieval Augmented Generation) application using the MERN stack with vector database integration for intelligent document search.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'LangChain', 'FAISS', 'OpenAI API'],
    category: 'Full Stack Development',
    status: 'Completed',
    year: '2025',
    company: 'Personal Project',
    features: [
      'MERN stack architecture',
      'Document embedding and vector storage',
      'Semantic search with FAISS',
      'Real-time chat interface with streaming responses',
      'JWT authentication and user management'
    ],
    images: [],
    githubUrl: 'https://github.com/Jeevith-gowda', // Update with actual repo
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 6,
    title: 'Real-Time Analytics Dashboard',
    description: 'Developed an interactive analytics dashboard for visualizing large-scale datasets with real-time updates using React and D3.js.',
    technologies: ['React', 'D3.js', 'Chart.js', 'Node.js', 'MongoDB', 'WebSocket', 'Express.js'],
    category: 'Data Visualization',
    status: 'Completed',
    year: '2024',
    company: 'Personal Project',
    features: [
      'Real-time data visualization with D3.js',
      'Interactive charts with Chart.js',
      'WebSocket integration for live updates',
      'RESTful API with Node.js and Express',
      'Responsive design with modern UI/UX'
    ],
    images: [],
    githubUrl: 'https://github.com/Jeevith-gowda', // Update with actual repo
    liveUrl: null,
    isPrivate: false
  }
]

const Projects = () => {
  const projectsArray = 'Projects'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
            A showcase of my technical projects spanning AI/ML engineering, data science,
            full-stack development, and distributed systems. Each project represents
            innovative solutions to  problems using cutting-edge technologies.
          </p>
          
          {/* Category Filter */}
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Project Images Section - with provision for multiple images */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {project.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{project.category}</span>
                      <span className="year">{project.year}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="company">{project.company}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private Project</span>
                      </span>
                    )}
                  </div>
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

export default Projects