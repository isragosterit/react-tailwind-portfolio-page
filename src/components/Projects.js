import React from 'react';
import join from '../pictures/join-app.PNG';  
import sentiment from '../pictures/youtube-sentiment-analyzer.png';  
import mvc from '../pictures/mvc-project.png';  

export default function Projects() {
  return (
    <div >
    <h1 className="text-4xl text- font-bold text-white flex items-center justify-center">Projects</h1>
    <div className='text-white m-24 flex'>
      <div className='p-4 m-4 w-2/5 border-double border-2 border-[#d8e4e8]'>
          <div className="m-1 flex items-center justify-center">
           <img src={join} className="h-56 rounded-sm" alt="platform picture" />
          </div>
    <h1 className='text-[#7ae3b7] p-1'>
      <a href="https://github.com/isragosterit/join-app" target='_blank' className="text-[#7ae3b7] hover:underline">
        Event Sharing Platform
      </a>
    </h1>        
    <p className='text-sm m-1'>This is a React app for users Join is a React web application that enables users to share andexplore events taking place in their vicinity</p>
      </div>

      <div className='p-4 m-4 w-2/5 border-dashed border-2 border-[#4dc9ef]'>
          <div className="m-1 flex items-center justify-center">
           <img src={mvc} className="h-56 rounded-sm" alt="platform picture" />
          </div>
          <h1 className='text-[#7ae3b7] p-1'>
      <a href="https://github.com/isragosterit/asp.net-registration-login-forms" target='_blank' className="text-[#7ae3b7] hover:underline">Registration & Login Forms</a>
    </h1>
    <p className='text-sm m-1'>This ASP.NET MVC project allows users to register and login to the platform using dedicated forms and it uses SQL Server as the database management system.</p>
      </div>
      
      <div className='p-4 m-4 w-2/5 border-dashed border-2 border-[#4dc9ef]'>
          <div className="m-1 flex items-center justify-center">
           <img src={sentiment} className="h-56 rounded-sm" alt="platform picture" />
          </div>
          <h1 className='text-[#7ae3b7] p-1'>
            <a href="https://github.com/isragosterit/youtube-sentiment-analyzer" target='_blank' className="text-[#7ae3b7] hover:underline">Youtube Sentiment Analyzer</a>
          </h1> 
       <p className='text-sm m-1'>A web application that performs sentiment analysis on YouTube comments using the YouTube Data API and TextBlob.</p>
      </div>


    </div>
    </div>
  );
}
