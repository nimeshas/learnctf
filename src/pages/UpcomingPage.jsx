import CTFCard from '../components/CTFCard'
import ctfs from '../data/ctfs'

function UpcomingPage() {
  const ctfCards = []
  for (let i = 0; i < ctfs.length; i += 1) {
    ctfCards.push(<CTFCard key={ctfs[i].id} ctf={ctfs[i]} />)
  }

  return (
    <div className="page">
      <div className="hero">
        <span className="tag">$ find /ctfs -type f | sort</span>
        <h1 className="hero-title" style={{ fontSize: '56px', lineHeight: '56px', margin: '14px 0 8px' }}>
          $ ls upcoming_ctfs/
        </h1>
        <p className="hero-text">$ Here are some events you can join soon.</p>
      </div>

      <div>
        {ctfCards}
      </div>
    </div>
  )
}

export default UpcomingPage
