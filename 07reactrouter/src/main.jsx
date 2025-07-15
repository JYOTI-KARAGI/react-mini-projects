import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    //   / =>layout page here default page "" render form layout element
    //   furthure children inside of it use nested

    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* we are inserting app since we are using reacr-router we use routerprovider */}
    {/* routeProvider is top levelthat provide routing capbility wrapper insider router which tells which path to show at url activation */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
