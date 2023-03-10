import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes'

const App = () => (
  <div className='min-h-screen bg-dark'>
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  </div>
)

export default App