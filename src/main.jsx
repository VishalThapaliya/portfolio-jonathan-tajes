/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Components
 */
import App from './App.jsx'

/**
 * CSS Styles
 */
import './index.css'
import  'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
