import PropTypes from 'prop-types'
function TopicSidebar({ topics, selectedId, onSelect }) {
  const cardStyle = {
    width: '260px',
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-main)',
    borderRadius: '10px',
    overflow: 'hidden',
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

  const buttonStyle = (active) => ({
    width: '236px',
    textAlign: 'left',
    padding: '10px',
    marginBottom: '8px',
    border: '1px solid var(--border-main)',
    borderLeft: active ? '3px solid var(--accent)' : '3px solid var(--border-main)',
    borderRadius: '4px',
    backgroundColor: '#11141a',
    color: active ? 'var(--accent)' : 'var(--text-muted)',
    cursor: 'pointer',
  })

  const topicA = topics && topics[0] ? topics[0] : { id: 1, name: 'Web Basics' }
  const topicB = topics && topics[1] ? topics[1] : { id: 2, name: 'Crypto 101' }
  const topicC = topics && topics[2] ? topics[2] : { id: 3, name: 'Binary Intro' }
  const topicD = topics && topics[3] ? topics[3] : { id: 4, name: 'Forensics' }

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>$ topics</h3>
      </div>
      <div style={{ padding: '12px' }}>
        <button
          type="button"
          onClick={() => onSelect(topicA.id)}
          style={buttonStyle(selectedId === topicA.id)}
        >
          {topicA.name}
        </button>
        <button
          type="button"
          onClick={() => onSelect(topicB.id)}
          style={buttonStyle(selectedId === topicB.id)}
        >
          {topicB.name}
        </button>
        <button
          type="button"
          onClick={() => onSelect(topicC.id)}
          style={buttonStyle(selectedId === topicC.id)}
        >
          {topicC.name}
        </button>
        <button
          type="button"
          onClick={() => onSelect(topicD.id)}
          style={buttonStyle(selectedId === topicD.id)}
        >
          {topicD.name}
        </button>
      </div>
    </div>
  )
}

TopicSidebar.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default TopicSidebar
