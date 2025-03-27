import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import User from "./components/User/User"
import Github, { githubLoader } from "./components/Github/Github"
import Login from './components/Login/Login.jsx'
import GetStarted from './components/Getstarted/Getstarted.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route paths = '/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='login' element={<Login />}/>
      <Route path='getstarted' element={<GetStarted />}/>
      <Route path='user/:userId' element={<User />}/>
      <Route loader={githubLoader} path='github' element={<Github />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={routes}/>
  </StrictMode>,
)
