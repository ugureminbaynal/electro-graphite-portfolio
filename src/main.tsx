import React from 'react'
import ReactDOM from 'react-dom/client'
import emailjs from 'emailjs-com'
import App from './App.tsx'
import './index.css'

// Initialize EmailJS
emailjs.init('YOUR_USER_ID') // Replace with your actual EmailJS user ID

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
