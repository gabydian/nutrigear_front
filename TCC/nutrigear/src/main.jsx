import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResponsiveAppBar from './menu/menu.jsx'
import Rotas from './router.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveAppBar />
    <Rotas> </Rotas>
  </StrictMode>
)
