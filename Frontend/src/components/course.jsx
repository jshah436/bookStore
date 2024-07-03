import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'
function course() {
  return (
   
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
   <div className='mt-32 items-center justify-center text-center'>
    <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'> here !!! :) </span></h1>
   <p className='mt-12'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
   <Link to="/">
   <button className="px-3 py-2 bg-pink-500 duration-200 rounded-md border text-white mt-6 hover:bg-pink-700 ">Back
   </button>
   </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4' >
        {
            list.map((item)=> (
            <Cards key={item.id} item={item}/>)
        )}
    </div>
    </div>
  )
}

export default course