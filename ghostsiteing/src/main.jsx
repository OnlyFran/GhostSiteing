import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firebaseConnection } from './firebase/config'
import './index.css'

firebaseConnection()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
