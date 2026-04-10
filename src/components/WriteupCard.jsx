import { useState } from 'react'
import PropTypes from 'prop-types'

function WriteupCard({ writeup }) {
  const [showSteps, setShowSteps] = useState(false)
  const cardStyle = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-main)',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '12px',
  }

  const headerStyle = {
    backgroundColor: '#171c24',
    borderBottom: '1px solid var(--border-main)',
    padding: '12px 16px',
  }

  const titleStyle = {
    margin: 0,
    color: 'var(--text-header)',
    fontFamily: "'JetBrains Mono', 'Cascadia Mono', 'SF Mono', 'Consolas', monospace",
  }

  const bodyStyle = {
    padding: '14px 16px 16px',
  }

  const tagBaseStyle = {
    display: 'inline-block',
    padding: '4px 8px',
    marginRight: '8px',
    marginBottom: '8px',
    borderRadius: '4px',
    border: '1px solid var(--border-main)',
    backgroundColor: '#12151a',
    color: 'var(--accent)',
  }

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 12px',
    border: '1px solid var(--border-main)',
    borderRadius: '4px',
    background: 'transparent',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'var(--accent)',
  }

  const difficultyStyle =
    writeup.difficulty === 'Hard'
      ? { color: 'var(--danger)', borderColor: 'var(--danger)' }
      : { color: 'var(--accent)', borderColor: 'var(--accent)' }

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>$ {writeup.title}</h3>
      </div>
      <div style={bodyStyle}>
        <p style={{ margin: '0 0 10px', color: 'var(--accent)' }}>$ event: {writeup.event}</p>
        <div>
          <span style={tagBaseStyle}>[{writeup.category.toUpperCase()}]</span>
          <span style={{ ...tagBaseStyle, ...difficultyStyle }}>
            [{writeup.difficulty.toUpperCase()}]
          </span>
          <span style={{ ...tagBaseStyle, color: 'var(--text-muted)', borderColor: 'var(--border-main)' }}>
            [{writeup.date}]
          </span>
        </div>
        <p>$ summary: {writeup.summary}</p>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => setShowSteps(!showSteps)}
        >
          $ {showSteps ? 'hide' : 'read_more'}
        </button>
        {showSteps ? <p style={{ marginTop: '10px', color: 'var(--text-main)' }}>$ steps: {writeup.steps}</p> : null}
      </div>
    </div>
  )
}

WriteupCard.propTypes = {
  writeup: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    steps: PropTypes.string.isRequired,
  }).isRequired,
}

export default WriteupCard
