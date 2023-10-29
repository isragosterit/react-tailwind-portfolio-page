import React, { useState } from 'react';

const Navbar = () => {


  return (
    <section className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#5e9c88] '>
        <ul className='md:flex mx-auto'>
        <li className='p-4 hover-cursor hover:text-white hover:cursor-pointer'>Home</li>
        <li className='p-4 hover:text-white hover:cursor-pointer'>About</li>
        <li className='p-4 hover:text-white hover:cursor-pointer'>Contact</li>
      </ul>
    </section>
  );
}

export default Navbar;