
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Intro from './Pages/Intro'
import "./App.css"
import HomePage from './Pages/HomePage'

const BrowserRouter=createBrowserRouter(
  [
    {path:'/', element:<HomePage />},
    {path:"/intro",element:<Intro />}

  ]
)

export default function App(){
  return <RouterProvider router={BrowserRouter} />
}