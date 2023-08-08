import React from 'react';
import banner from '../../assets/banner.jpeg'
import NavBar from '../navbar/NavBar';

const Header = () => {
  return (
    <div className="relative w-full bg-cover bg-my-image h-95vh">
      <NavBar />
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-60 left-1/2'>
      <h1>Quiet Luxury</h1>
      <button className='border shadow '>Shop Now</button>
      </div>
    </div>
  )
}

export default Header;