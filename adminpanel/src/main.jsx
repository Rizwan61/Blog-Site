import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "/node_modules/primeflex/primeflex.css"
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <App />

    </BrowserRouter>


  </React.StrictMode>
)
