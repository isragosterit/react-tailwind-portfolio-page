import React from 'react';
import Typed from 'react-typed';

export default function Navbar() {
  return (
    <div className='h-full'>
      <section className='bg-hero bg-repeat-x'>
      <h2 className='w-full font-bold text-3xl text-[#48a0a8] text-center sm:text-4xl md:text-5xl md:py-5 mt-12'>İsra Gösterit</h2>
      <div className='text-center py-3'> 
      <Typed strings={['jr.front-end developer']} className='text-[#7ae3b7] text-xl font-mono' typeSpeed={120} backSpeed={140} loop/>
      </div>
      <p className='text-gray-400 font-bold text-center md:text-lg sm:text-xl text-lg w-1/2 mx-auto mb-80 mt-5'>Hello, I am İsra and I'm 22 years old. I graduated in computer engineering from Maltepe University. I am currently improving my skills in web development and I'm working hard to be one of the best in this field.</p>
      </section>
     </div>
  );
}
 
