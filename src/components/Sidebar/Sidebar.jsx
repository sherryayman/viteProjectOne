import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../public/imgs/logo-BfNap0Pe.png'

export default function Sidebar() {
  return <>
    <div className=''>
      <img src={logo} className='w-50' alt="" />
      <NavLink to="/viteProjectOne" className="sides">
  <div className='shadow-md shadow-orange-300 bg-orange-400 my-3 text-white w-55 px-2 py-1 mx-auto rounded'>
    <i className="fa-solid fa-utensils me-1.5"></i>
    <span className='font-cursive font-semibold'>Meals</span>
  </div>
</NavLink>

      <a href="" className='sides'><div className='hover:shadow-md shadow-orange-300 transition-shadow duration-300 w-55 px-2 py-1 mx-auto border border-1 rounded border-gray-300'>
        <i className="fa-solid fa-utensils me-1.5"></i>
        <span className='font-cursive font-semibold'>Ingredients</span>
      </div></a>
      <a href="" className='sides'><div className='hover:shadow-md shadow-orange-300 transition-shadow duration-300 my-3 w-55 px-2 py-1 mx-auto border border-1 rounded border-gray-300'>
        <i className="fa-solid fa-utensils me-1.5"></i>
        <span className='font-cursive font-semibold'>Area</span>
      </div></a>
    </div>
  </>
}
