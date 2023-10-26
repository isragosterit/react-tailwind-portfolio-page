import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div className='text-center text-white m-16'>
      <h1 className="text-4xl text- font-bold text-white flex items-center justify-center">Contact</h1>
    <ul className='flex p-4 justify-center  mx-auto'> 
    <li className="m-4">
          <a href="https://www.linkedin.com/in/isragösterit/" target="_blank" className="flex items-center text-white hover:text-pink-600">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
            <span className="ml-2">Linkedin</span>
          </a>
        </li>
      <li className="m-4">
          <a href="mailto:isra.gstrt@gmail.com" className="flex items-center text-white hover:text-pink-600">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <span className="ml-2">Mail</span>
          </a>
        </li>
        <li className="m-4">
          <a href="https://github.com/isragosterit" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-pink-600">
            <FontAwesomeIcon icon={faGithub} size="xl" />
            <span className="ml-2">Github</span>
          </a>
        </li>



      </ul>
    </div>
  );
}
