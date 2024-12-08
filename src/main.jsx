import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as THREE from 'three';
import { ParallaxProvider } from 'react-scroll-parallax';


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
      <App />
  </StrictMode>
)
