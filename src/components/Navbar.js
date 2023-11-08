import React from 'react';

export default function Navbar() {
  return (
    <section className='flex px-4 text-[#5e9c88]'>
      <ul className='flex flex-row justify-between items-center mx-auto'>
        <li className='p-4 hover-cursor hover:text-white hover:cursor-pointer'>Home</li>
        <li className='p-4 hover:text-white hover:cursor-pointer'>
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className='p-4 hover:text-white hover:cursor-pointer'>
        <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </section>
  );
}
