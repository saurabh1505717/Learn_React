import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Children } from 'react'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// First way to create a router

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact-us",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Second way to create Router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


// Notes:

// 1) Learned about React-router-dom 
// 2) Learn about useLoaderData Hook used while using loader in react-router-dom where direct API can be called while creating the router for fast response from API (optimized way)
// 3) Learned about how to create routes to navigate between different screens of pages