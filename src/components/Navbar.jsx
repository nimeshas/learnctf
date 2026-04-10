import { Link } from 'react-router-dom'

// Requirement: React Components - navigation component reused across pages.
function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '18px 24px',
    borderBottom: '1px solid var(--border-main)',
    backgroundColor: '#0a0c10',
    position: 'relative',
  }

  const brandStyle = {
    fontWeight: 'bold',
    color: 'var(--accent)',
    fontFamily: "'JetBrains Mono', 'Cascadia Mono', 'SF Mono', 'Consolas', monospace",
    position: 'absolute',
    left: '24px',
  }

  const linksStyle = {
    display: 'flex',
    gap: '12px',
  }

  const linkStyle = {
    color: 'var(--text-main)',
    textDecoration: 'none',
    padding: '6px 8px',
    border: '1px solid var(--border-main)',
    borderRadius: '4px',
  }

  return (
    // Requirement: React JSX - returns JSX for the site nav layout.
    <nav style={navStyle}>
      <div style={brandStyle}>$ CTFGuide</div>
      <div style={linksStyle}>
        {/* Requirement: React Routing (multiple pages) - Link components change routes. */}
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/learn" style={linkStyle}>
          Learn
        </Link>
        <Link to="/writeups" style={linkStyle}>
          Writeups
        </Link>
        <Link to="/upcoming" style={linkStyle}>
          Upcoming
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
