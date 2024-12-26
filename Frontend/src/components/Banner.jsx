import React from 'react'

const Banner = () => {
  return (
<>
{/* <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 text-black  dark:text-white z-10'>
<div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
<div className='space-y-12'>
<h1 className='text-4xl font-bold'>Your Travel Guide and <span className='text-pink-500'>Companion!!!</span></h1>
<p className='text-xl font-semibold'>Explore destinations, discover hidden gems, and create unforgettable memories.
 Let our travel guide lead the way for a seamless and enriching journey.</p>
 <label className="input input-bordered flex items-center gap-2 bg-blue-500 text-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Search your Prefer location" />
</label>
</div>
<button className="btn mt-6 btn-secondary" style={{ backgroundColor: 'blue' }}>Search</button>
</div>
<div className='order-1 w-full md:w-1/2 z-20'>
<img
  src="https://img.freepik.com/premium-vector/family-buy-rent-home-with-help-agent-property-estate-house-rent-advisor-moving-new-place_352905-325.jpg"
  className="w-[500px] h-[500px] mx-24"
  alt=""
/> */}

{/* </div>      
</div> */}
<div className="background-container relative z-20">
  <img
    src="https://www.rentecdirect.com/blog/wp-content/uploads/2015/12/bigstock-Hispanic-couple-outside-home-f-23443538.jpg"
    className="w-full h-[370px] object-fill"
  />
  <div className="search-box-container absolute top-0 left-80 w-full flex justify-center mt-16 z-50">
    <input
      type="text"
      className="search-box p-4 bg-white text-black w-1/3 h-10 rounded-md"
    //   style={{ backgroundColor: 'blue', color: 'black' }}
      placeholder ="Search your Prefer location"
    />
<button className="search-btn p-4 bg-blue-500 text-white h-10 rounded-md flex items-center justify-center cursor-pointer hover:font-bold transition-all duration-50">
  Search
</button>
  </div>
</div>
</>
 )
}

export default Banner
