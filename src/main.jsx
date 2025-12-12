import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './rotas/Home/Home.jsx'
import Detalhes from './rotas/Detalhes/Detalhes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Detalhes",
    element: <Detalhes />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
