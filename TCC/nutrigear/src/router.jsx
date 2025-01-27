import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Login from './pages/login.jsx'
import Artigos from './pages/artigos.jsx'
import Cardapios from './pages/cardapios.jsx'
import Indicacoes from './pages/indicações.jsx'
import Pag4 from './pages/pag4.jsx'


function Rotas() {
        const Router = createBrowserRouter([
        {
            path: "/",
            element: <App/>
        },
        {
            path: "/login",
            element: <Login/>
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
            path: "/Indicacoes",
            element: <Indicacoes/>
        },
        {
            path: "/Pag4",
            element: <Pag4/>
        },
        ])

       return <RouterProvider router={Router} />

    }
export default Rotas;