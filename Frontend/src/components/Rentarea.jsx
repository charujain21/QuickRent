import React from 'react'
import  Cards from './Cards'
import list from "../../public/list.json"

const Rentarea = () => {
  return (
<>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
 <div className='items-center justify-center text-center'>
  <h1 className='text-2xl md:text-4xl text-black font-bold'>Find Your Perfect  
    <span className='text-pink-500 font-bold'> Match!</span></h1>
    <p className='mt-5 text-black font-xl'>"Thank you for joining QuickRent! Explore a wide range of properties designed with your comfort and productivity in mind. Whether you're searching for a cozy home or an inspiring office, we've got the right fit for you!"
    </p>
    </div>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
            list.map((item) => (
                <Cards key={item.id} item={item} />
            ))
        }
    </div>
</>
  )
}

export default Rentarea
