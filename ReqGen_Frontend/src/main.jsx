import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Layout from './layout.jsx';
import Login from './Components/Login/Login.jsx';
import Get_Started from './Components/Get_Started/Get_Started.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';

const routers=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='get-started' element={<Get_Started/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}/>
  </StrictMode>,
)
