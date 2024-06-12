// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StarWarsProvider } from './context/starwars.context.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React>
  <StarWarsProvider>
    <App />
  </StarWarsProvider>
  // </React>,
)
