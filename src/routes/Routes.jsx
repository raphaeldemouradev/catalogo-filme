import { createBrowserRouter } from "react-router-dom";

import { Layouts } from "../layouts/index.jsx";
import Home from '../pages/Home/Home.jsx'
import Detalhes from '../pages/Detalhes/Detalhes.jsx'
import Search from '../pages/Search/Search.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts/ >,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/detalhes/:id",
        element: <Detalhes />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ]
  }
])

export default router 

//tinha arquivos nesta pasta movi para pages