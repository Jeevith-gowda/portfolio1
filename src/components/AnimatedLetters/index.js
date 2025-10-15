import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => {
        if (char === '\n') {
          return <br key={`lb-${i}`} />
        }
        return (
          <span key={`${char}-${i}`} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        )
      })}
    </span>
  )
}

export default AnimatedLetters
