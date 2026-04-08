import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Layout from './layout.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Get_Started from './Components/Get_Started/Get_Started.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import History from './Components/History/History.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

const routers=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='get-started' element={<Get_Started/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='history' element={<History/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routers}/>
    </AuthProvider>
  </StrictMode>,
)
