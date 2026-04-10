import PropTypes from 'prop-types'

// Requirement: React Components + Component API - label/value props define this card output.
function StatCard({ label, value }) {
  // Requirement: React Props - label and value props drive the rendered text.
  const cardStyle = {
    minWidth: '140px',
    textAlign: 'center',
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border-main)',
    borderRadius: '10px',
    overflow: 'hidden',
  }

  const headerStyle = {
    backgroundColor: '#171c24',
    borderBottom: '1px solid var(--border-main)',
    padding: '10px 12px',
  }

  const bodyStyle = {
    padding: '14px',
  }

  return (
    // Requirement: React JSX - JSX structure for the stat card.
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={{ color: 'var(--text-header)', fontSize: '11px' }}>$ {label}</div>
      </div>
      <div style={bodyStyle}>
        <div style={{ fontSize: '24px', color: 'var(--accent)', fontWeight: 'bold' }}>{value}</div>
      </div>
    </div>
  )
}

// Requirement: React Props Validation (PropTypes) - validates label/value prop types.
StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default StatCard
