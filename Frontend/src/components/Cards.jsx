import React from 'react'

function Cards({item}) {
  return (
    <div className='mt-4 my-2 p-3'>
<div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 cursor-pointer">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{'$' + item.price}</div>
      <div className="badge badge-outline hover:bg-pink-700 hover:text-white duration-200 px-2 py-1 cursor pointer">Buy Now</div>
    </div>
  </div>
</div>
</div>
  )
}

export default Cards