import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/fonts.css'
import './assets/css/plugins/fontawesome.css'
import './assets/css/plugins/swiper.css'
import './assets/css/plugins/metismenu.css'
import './assets/css/plugins/magnifying-popup.css'
import './assets/css/plugins/odometer.css'
import './assets/css/vendor/bootstrap.min.css'
import './assets/css/style.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

