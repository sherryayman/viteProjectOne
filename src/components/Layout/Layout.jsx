import React from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  <div className="flex min-h-screen">
    <aside className="w-64 bg-gray-50 h-screen fixed">
        <Sidebar/>
    </aside>

    <main className="flex-1 ml-65 mb-30 overflow-y-auto">
        <Outlet/>
    </main>
    <Footer/>
  </div>
    
  </>
}
