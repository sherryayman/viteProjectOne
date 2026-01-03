import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Footer() {
  return <>
 <div className="fixed bottom-0 w-full bg-white">
    <div className='container mx-auto px-4 '>
    <div className=" flex justify-between items-center">
        <div className="left flex items-center">
        
            <img src="../../../public/imgs/logo-BfNap0Pe.png" className='w-15' alt="" />
            <span className='font-semibold font-cursive'>Recipe</span>
       
        </div>
        <div className="right">
            <span className='text-blue-700 font-bold text-xl font-cursive'>Route</span>
        </div>
    </div>
    <hr />
    <p className='p-5 text-center text-gray-500 text-sm'>© 2025 
        <a className='nagy' href="https://www.facebook.com/EINagy"> Nagy Osama™. </a> 
        All Rights Reserved.</p>
 </div>
 </div>
  </>
}
