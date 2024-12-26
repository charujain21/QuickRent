import React from 'react'

function Cards({item}) {
    // console.log(item)
  return (
  <>
  <div>
  <div className="card  w-96 shadow-xl m-4 bg-white text-black">
  <figure>
    <img className='h-40 w-full'
      src={item.image}
      alt="Home" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-xl font-bold">
      {item.city}
      <div className="badge badge-secondary bg-red-500 py-3 px-4 text-xl font-bold"> {item.rating}</div>
    </h2>
    <p>
   <strong className=" text-lg font-semibold">Category:</strong> {item.category}     <br />
   <strong className=" text-lg font-semibold">Location:</strong> {item.location}
   </p>
    <div className="card-actions justify-between p-2">
      <div className="badge badge-outline bg-pink-500 border-none py-4 px-3 text-xl font-bold">${item.price}</div>
      <div className="badge badge-outline bg-pink-500 cursor-pointer border-none hover:bg-pink-700 py-4 px-3 text-xl font-bold">{item.button}</div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default Cards
