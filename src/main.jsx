import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([{path:"/" ,element:<App/>},]);
// Requirement: React JSX - JSX is rendered into the root DOM node here.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Requirement: React Components - App is mounted as the top-level component. */}
    <App />
  </StrictMode>,
)
