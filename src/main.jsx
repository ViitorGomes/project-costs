import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Reset } from './components/style/elements/Reset/style'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Reset/>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
