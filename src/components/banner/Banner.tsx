import React from 'react';

const Banner = () => {
  return (
    <div className=" flex flex-col lg:mt-[100px] mt-[30px] justify-between w-full  my-10 lg:flex-row px-[45px]">
        <div className='bg-banner-1 bg-cover w-[100%] lg:w-[48%] h-[700px] flex items-center justify-center mb-5 ' data-aos="fade-right">
        <h2 className='flex flex-col items-center text-white'><span className='text-3xl'>SHOP</span> <span className='text-4xl'>DRESSES</span> </h2>
        </div>
        <div className='bg-banner-2 bg-cover w-[100%] lg:w-[48%] h-[700px] flex items-center justify-center  mb-5' data-aos="fade-left">
            <h2 className='flex flex-col items-center text-white'><span className='text-3xl'>SHOP</span> <span className='text-4xl'>QUALITY</span> </h2>
        </div>
    </div>
  )
}

export default Banner;