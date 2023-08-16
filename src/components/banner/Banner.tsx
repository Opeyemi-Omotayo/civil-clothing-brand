import React from 'react';

const Banner = () => {
  return (
    <div className=" flex flex-col md:mt-[100px] lg:mt-[100px] mt-[30px] justify-between w-full  my-10 md:flex-row lg:flex-row px-[25px] lg:px-[45px]">
        <div className='bg-banner-1 bg-cover w-[100%] md:w-[48%] lg:w-[48%] h-[550px]  md:h-[700px] lg:h-[750px] xl:h-[1000px] flex items-center justify-center mb-5 ' data-aos="fade-right">
        <h2 className='flex flex-col items-center text-white'><span className='text-3xl'>SHOP</span> <span className='text-4xl'>DRESSES</span> </h2>
        </div>
        <div className='bg-banner-2 bg-cover w-[100%] md:w-[48%] lg:w-[48%] h-[550px] md:h-[700px] lg:h-[750px] xl:h-[1000px]  flex items-center justify-center  mb-5' data-aos="fade-left">
            <h2 className='flex flex-col items-center text-white'><span className='text-3xl'>SHOP</span> <span className='text-4xl'>QUALITY</span> </h2>
        </div>
    </div>
  )
}

export default Banner;