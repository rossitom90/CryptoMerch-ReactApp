import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDOFsJjXjToGzUlG9-67zlFII2237kirHg',
  authDomain: 'crypto-merch-3e893.firebaseapp.com',
  projectId: 'crypto-merch-3e893',
  storageBucket: 'crypto-merch-3e893.appspot.com',
  messagingSenderId: '424081041837',
  appId: '1:424081041837:web:58361fbc11cf02f3649924',
}

const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>,
)
