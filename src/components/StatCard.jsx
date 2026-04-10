import PropTypes from 'prop-types'
function StatCard({ label, value }) {
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

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default StatCard
