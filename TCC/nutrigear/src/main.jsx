import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Menu from './menu/menu.jsx';
import Rotas from './router.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Menu></Menu>
    <Rotas> </Rotas>
  </StrictMode>
)
