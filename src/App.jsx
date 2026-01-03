import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound'
import Meals from './components/Meals/Meals'

function App() {
  let route=createBrowserRouter([
    {path:'', element:<Layout/>, children:[
      {index:true,element:<Home/>},
      {path:'/meal/:id',element:<Meals/>},
      {path:'*',element:<Notfound/>}
    ]}
  ])
  return <>
  <RouterProvider router={route}></RouterProvider>
  </>
}

export default App
