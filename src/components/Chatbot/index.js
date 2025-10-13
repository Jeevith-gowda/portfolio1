import { useEffect, useRef, useState } from 'react'

import { faCommentDots, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

const Chatbot = () => {
  console.log('🔑 API Key loaded:', !!process.env.REACT_APP_GROQ_API_KEY)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Jeevith's AI assistant. Ask me anything about his background, projects, or skills!"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: `You are an AI assistant for Jeevith Doddalingegowda Rama's portfolio website. You are knowledgeable, friendly, and professional.

ABOUT JEEVITH:
- Computer Science Master's student at UNC Charlotte (graduating May 2027)
- Previously studied Data Science at Northeastern University (Jan-May 2025)
- Bachelor's in Information Science from Nitte University, India (2020-2024)

EXPERIENCE:
- Data Scientist Intern at FundMyCrop (March 2024 - Nov 2024): Built time-series forecasting models with TensorFlow and ARIMA for agritech data
- Digital Lead at Google Developer Groups, Northeastern University (Jan 2025 - March 2025): Coordinated tech workshops for 100+ students
- Undergraduate Teaching Assistant at Nitte University (March 2023 - Jan 2024): Mentored students in Deep Learning

KEY PROJECTS:
- Multi-Agent LLM System with LangGraph: Built intelligent agent orchestration with RAG pipeline, FAISS vector storage, Groq API
- Distributed Data Processing Pipeline: Scalable pipelines with Apache Spark and Hadoop MapReduce
- Melanoma Detection Using Deep Learning: IEEE published research with Best Paper Award, 94% accuracy CNN-based system
- Customer Purchase Behavior Prediction: Predictive modeling with Random Forest and Logistic Regression, 15% improvement

SKILLS:
- Languages: Python, Java, SQL, R, C++, Node.js, JavaScript
- AI/ML: LangChain, LangGraph, TensorFlow, PyTorch, Scikit-learn, RAG, FAISS, Chroma
- Cloud/DevOps: Docker, Kubernetes, Apache Spark, Hadoop, AWS
- Full Stack: MongoDB, Express, React, Node.js (MERN), PostgreSQL, MySQL
- Tools: Git, REST APIs, Spring Boot, Tableau, Power BI

CONTACT:
- Email: jdoddali@charlotte.edu
- LinkedIn: linkedin.com/in/jeevith-d-r
- GitHub: github.com/Jeevith-gowda
- Location: Charlotte, North Carolina, US

Keep responses concise (2-3 sentences), helpful, and encourage visitors to explore specific sections of the portfolio. If asked about employment, mention he's actively seeking opportunities in AI/ML engineering, full-stack development, and data science.`
            },
            ...messages,
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      })

      const data = await response.json()
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting right now. Please try again or contact Jeevith directly at jdoddali@charlotte.edu"
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div 
        className={`chat-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faCommentDots} />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-content">
              <FontAwesomeIcon icon={faCommentDots} />
              <span>Chat with AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                <div className="message-content">
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message assistant">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything...."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Chatbot