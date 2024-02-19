import React from 'react';
import Heading from './Heading';
import gm1 from '../assets/simon-game.png';
import gm2 from '../assets/snake-game.png';
import gm3 from '../assets/tic-tac-toe.png';
import gm4 from '../assets/weather-app.png';
import { FaExternalLinkAlt , FaGithub} from "react-icons/fa";

const Project = () => {
  return (
    <section id='project' className='min-h-screen w-full bg-slate-800'>
      <Heading  heading = "Projects" />
      <div className='flex justify-center px-16'>
        <div className='grid sm:grid-col-2 sm:grid-rows-2 md:grid-cols-4 mt-8 gap-4'>
            {/* Card 1 */}
            <div className='p-4 bg-slate-600 rounded-lg shadow-lg hover:scale-105'>
                <div className='w-full text-white flex flex-col items-center'>
                    <img src={gm1} className = "w-full h-70  mb-2 rounded-lg" />
                    <p className='text-3xl my-2'>Simon Game</p>
                    <div className='flex items-center text-2xl gap-2 bg-blue-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-react'>
                      <a href="" className='pr-2 py-2 font-roboto' >Link</a>
                      <FaExternalLinkAlt />
                      <FaGithub />
                    </div>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className='p-4 bg-slate-600 rounded-lg shadow-lg hover:scale-105'>
                <div className='w-full text-white flex flex-col items-center'>
                    <img src={gm2} className = "w-full h-70 mb-2 rounded-lg" />
                    <p className='text-2xl my-2'>Snake Game</p>
                    <div className='flex items-center gap-2 bg-blue-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-react'>
                      <a href="" className='pr-2 font-roboto'>Link</a>
                      <FaExternalLinkAlt />
                      <FaGithub />
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className='p-4 bg-slate-600 rounded-lg shadow-lg hover:scale-105'>
                <div className='w-full text-white flex  flex-col items-center'>
                    <img src={gm3} className = "w-full h-70 mb-2 rounded-lg" />
                    <p className='text-2xl my-2'>Tic Tac Toe</p>
                    <div className='flex items-center gap-2 bg-blue-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-react'>
                      <a href="" className='pr-2 font-roboto' >Link</a>
                      <FaExternalLinkAlt />
                      <FaGithub />
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className='p-4 bg-slate-600 rounded-lg shadow-lg hover:scale-105'>
                <div className='w-full text-white flex flex-col items-center'>
                    <img src={gm4} className = "w-full h-70 mb-2 rounded-lg" />
                    <p className='text-2xl my-2'>Weather App</p>
                    <div className='flex items-center gap-2 bg-blue-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-react'>
                      <a href="" className='pr-2 font-roboto' >Link</a>
                      <FaExternalLinkAlt />
                      <FaGithub />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Project
