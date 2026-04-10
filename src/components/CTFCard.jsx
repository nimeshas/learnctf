import PropTypes from 'prop-types'
function CTFCard({ ctf }) {

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

  const difficultyColor = ctf.difficulty === 'Hard' ? 'var(--danger)' : 'var(--accent)'

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>$ {ctf.name}</h3>
      </div>
      <div style={bodyStyle}>
        <p style={{ margin: '4px 0', color: 'var(--accent)' }}>$ date: {ctf.date}</p>
        <p style={{ margin: '4px 0' }}>$ format: {ctf.format}</p>
        <p style={{ margin: '4px 0', color: difficultyColor }}>
          $ difficulty: {ctf.difficulty}
        </p>
        <a href={ctf.url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
          $ open_event_link
        </a>
      </div>
    </div>
  )
}

CTFCard.propTypes = {
  ctf: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default CTFCard
