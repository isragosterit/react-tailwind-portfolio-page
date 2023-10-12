import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <section className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>İsra</h1>
        <ul className='hidden md:flex'>
        <li className='p-4 hover-cursor'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
     
      <div className={!nav ? 'fixed left-0 top-0 m-4 w-[60%] h-full border-r border-r-gray-900 bg-[#0e0a1c] text-pink-600 ease-in-out duration-500' : 'fixed left-[-100%]' }>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>İsra</h1>
        <ul className='pt-12'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
