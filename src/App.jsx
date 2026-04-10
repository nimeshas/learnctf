import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import ProfilePage from './pages/ProfilePage'
import UpcomingPage from './pages/UpcomingPage'
import WriteupsPage from './pages/WriteupsPage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/writeups" element={<WriteupsPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
