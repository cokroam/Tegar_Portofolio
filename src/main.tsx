import '/src/styles/index.css'

import LandingPage from './features/index.tsx'
import Layout from './components/layout.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
