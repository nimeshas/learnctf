import { useState } from 'react'
import WriteupCard from '../components/WriteupCard'
import writeups from '../data/writeups'

// Requirement: React Components - page-level component for writeups.
function WriteupsPage() {
  // Requirement: React Hooks (useState) + React State - tracks search input text.
  const [searchText, setSearchText] = useState('')

  const cleanText = searchText.toLowerCase()
  const filteredWriteups = []
  for (let i = 0; i < writeups.length; i += 1) {
    const item = writeups[i]
    const titleMatch = item.title.toLowerCase().includes(cleanText)
    const categoryMatch = item.category.toLowerCase().includes(cleanText)
    if (titleMatch || categoryMatch) {
      filteredWriteups.push(item)
    }
  }

  const writeupCards = []
  for (let i = 0; i < filteredWriteups.length; i += 1) {
    writeupCards.push(<WriteupCard key={filteredWriteups[i].id} writeup={filteredWriteups[i]} />)
  }

  return (
    // Requirement: React JSX - JSX layout for the writeups page.
    <div className="page">
      <div className="hero">
        <span className="chip">$ find /writeups -type f | sort</span>
        <h1 className="hero-title" style={{ fontSize: '56px', lineHeight: '56px', margin: '14px 0 8px' }}>
          $ ls writeups/
        </h1>
        <p className="hero-text">$ Search beginner-friendly challenge solve notes.</p>
      </div>

      

      <div>
        {/* Requirement: React Props - passes each writeup object into WriteupCard. */}
        {writeupCards}
      </div>
    </div>
  )
}

export default WriteupsPage
