import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //browserRoute nos ayuda navegar por la app 
  <BrowserRouter>
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
