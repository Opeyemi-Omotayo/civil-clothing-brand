import React from 'react';

const Banner = () => {
  return (
    <div className="container flex flex-col justify-between w-full px-5 mx-auto my-10 lg:flex-row lg:px-10">
        <div className='bg-banner-1 bg-cover w-[100%] lg:w-[48%] h-[600px] flex items-center justify-center mb-5 '>
        <h2 className='flex flex-col items-center text-white'><span className='text-3xl'>SHOP</span> <span className='text-4xl'>DRESSES</span> </h2>
        </div>
        <div className='bg-banner-2 bg-cover w-[100%] lg:w-[48%] h-[600px] flex items-center justify-center  mb-5'>
            <h2 className='flex flex-col items-center text-white'><span className='text-3xl'>SHOP</span> <span className='text-4xl'>QUALITY</span> </h2>
        </div>
    </div>
  )
}

export default Banner;