import React from 'react'

export default function Notfound() {
  return (
    <div className=" bg-amber-100 flex justify-center items-center h-full">
        <div className='text-center py-5 px-8'>
            <i class="fa-solid fa-bug text-3xl py-3"></i>
            <h2 className='font-bold text-7xl pb-3'>Not Found</h2>
            <p className='text-sm'>This page does not exist</p>
        </div>
    </div>
  )
}
