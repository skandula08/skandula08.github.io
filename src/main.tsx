import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheets/App.css'
import './stylesheets/index.css'
import App from './App.tsx'
import { ThemeProvider } from './ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
