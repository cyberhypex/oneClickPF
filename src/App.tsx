
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Intro from './Pages/Intro'
import "./App.css"
import HomePage from './Pages/HomePage'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Layout from './Layout'

const BrowserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: "/intro", element: <Intro /> },
      { path: "/skills", element: <Skills /> },
      { path: '/projects', element: <Projects /> }
    ]
  }
])

export default function App(){
  return <RouterProvider router={BrowserRouter} />
}