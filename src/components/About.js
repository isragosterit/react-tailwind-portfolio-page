import React from 'react';
import html from '../pictures/html.png';
import css from '../pictures/css.png';
import js from '../pictures/js-logo.png';  
import bootstrap from '../pictures/bootstrap-logo.png';  
import tailwind from '../pictures/tailwind-logo.png';  
import react from '../pictures/react-logo.png';  
import firebase from '../pictures/firebase-logo.png'; 
import sql from '../pictures/sql-logo.png'; 

function About() {
  return (
<div className="h-screen p-32">
<h1 className="text-4xl text- font-bold text-white flex items-center justify-center">Skills & Tools</h1>
<p className="text-lg mt-4 text-center text-white">Some technologies I've worked with:</p>

<div className="flex justify-center mt-10">
    <ol className="mx-4 sm:mx-10 md:mx-10 text-white">
      <li className="text-[#7ae3b7] font-bold py-1.5">LANGUAGES</li>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>SQL</li>
    </ol>

    <ol className="mx-4 sm:mx-10 md:mx-10 text-white">
      <li className="text-[#7ae3b7] font-bold py-1.5">FRAMEWORKS</li>
      <li>React</li>
      <li>Node</li>
      <li>Bootstrap</li>
      <li>Tailwind</li>
    </ol>

    <ol className="mx-4 sm:mx-10 md:mx-10 text-white">
      <li className="text-[#7ae3b7] font-bold py-1.5">TOOLS</li>
      <li>Git & Github</li>
      <li>Bash</li>
      <li>Firebase</li>
      <li>MSSQL</li>
    </ol>
  </div>

  <div className="flex h-16 items-center justify-center mx-auto pt-28 animate-pulse-slow">
  <div className="w-16 m-1">
    <img src={html} className="max-h-16" alt="html-logo" />
  </div>
  <div className="w-12 m-1">
    <img src={css} className="max-h-16 " alt="css-logo" />
  </div>
  <div className="w-16 m-1">
    <img src={js} className="max-h-16 " alt="js-logo" />
  </div>
  <div className="w-16 m-1">
    <img src={bootstrap} className="max-h-16 " alt="bootstrap-logo" />
  </div>
  <div className="w-16 m-1">
    <img src={tailwind} className="max-h-16 " alt="tailwind-logo" />
  </div>
  <div className="w-16 m-1">
    <img src={react} className="max-h-16 " alt="react-logo" />
  </div>
  <div className="w-12 m-1">
    <img src={firebase} className="max-h-16 " alt="firebase-logo" />
  </div>
  <div className="w-16 m-1">
    <img src={sql} className="max-h-16 " alt="sql-logo" />
  </div>
</div>

 
</div>

  );
}
 
export default About;
 