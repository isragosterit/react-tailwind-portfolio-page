import React from 'react';
import join from '../pictures/join-app.PNG';  
import sentiment from '../pictures/youtube-sentiment-analyzer.png';  
import mvc from '../pictures/mvc-project.png';  

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white flex items-center justify-center pb-12">Projects</h1>
      <div className="text-white mx-auto xl:mx-96 lg:mx-56 md:mx-48 sm:mx-36 space-y-8 sm:mx-4">

        {/* Project 1 */}
        <div className="p-2 border-double border-2 border-[#2c5765] flex flex-col md:flex-row lg:flex-row">
          <div className="md:w-1/3 lg:w-1/4">
            <img src={join} className="project-img" alt="project picture" />
          </div>
          <div className="md:w-2/3 lg:w-3/4 p-3">
            <h1 className="text-[#7ae3b7] p-1">
              <a href="https://github.com/isragosterit/join-app" target="_blank" className="text-[#7ae3b7] hover:underline">Event Sharing Platform</a>
            </h1>
            <p className="text-sm m-1">This is a React app for users Join is a React web application that enables users to share and explore events taking place in their vicinity.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-2 border-double border-2 border-[#2c5765] flex flex-col md:flex-row lg:flex-row">
          <div className="md:w-1/3 lg:w-1/4">
            <img src={mvc} className="project-img" alt="project picture" />
          </div>
          <div className="md:w-2/3 lg:w-3/4 p-3">
            <h1 className="text-[#7ae3b7] p-1">
              <a href="https://github.com/isragosterit/asp.net-registration-login-forms" target="_blank" className="text-[#7ae3b7] hover:underline">Registration & Login Forms</a>
            </h1>
            <p className="text-sm m-1">This ASP.NET MVC project allows users to register and login to the platform using dedicated forms and it uses SQL Server as the database management system.</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="p-2 border-double border-2 border-[#2c5765] flex flex-col md:flex-row lg:flex-row">
          <div className="md:w-1/3 lg:w-1/4">
            <img src={sentiment} className="project-img" alt="project picture" />
          </div>
          <div className="md:w-2/3 lg:w-3/4 p-3">
            <h1 className="text-[#7ae3b7] p-1">
              <a href="https://github.com/isragosterit/youtube-sentiment-analyzer" target="_blank" className="text-[#7ae3b7] hover:underline">Youtube Sentiment Analyzer</a>
            </h1>
            <p className="text-sm m-1">This web application is designed to analyze the sentiment of comments posted on YouTube videos. It achieves this by interacting with the YouTube Data API to fetch the comments for a given video.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
