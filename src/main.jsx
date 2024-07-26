import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import App from '../App.jsx'


const root = document.getElementById('root')
const vRoot = ReactDOM.createRoot(root)

vRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)