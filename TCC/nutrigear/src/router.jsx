import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Cadastro from './pages/cadastro.jsx'
import Artigos from './pages/artigos.jsx'
import Cardapios from './pages/cardapios.jsx'
import Menus from './pages/menus.jsx'
import Login from './pages/login.jsx'
import Perfil from './pages/perfil.jsx'

function Rotas() {
        const Router = createBrowserRouter(
       [
        {
            path: "/",
            element: <App/>
        },
         {
            path: "/Perfil",
            element: <Perfil/>
         },
         {
            path: "/Cadastro",
            element: <Cadastro/>
         },
         {
            path: "/Artigos",
            element: <Artigos/>
         },
         {
            path: "/Cardapios",
            element: <Cardapios/>
         },
         {
            path: "/Menus",
            element: <Menus/>
         },
         {
            path: "/Logar",
            element: <Login/>
         },
         {
            path: "/Perfil",
            element: <Perfil/>
         },
       ]
      )
       return <RouterProvider router={Router} />
    }
export default Rotas;
