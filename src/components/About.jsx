import React from 'react'
import svg from '../assets/react.svg';
import Next from './Next';

const About = () => {
  return (
    <section id='about' className='min-h-screen w-full flex flex-col'>
        <div className='flex flex-col-reverse md:flex-row items-center w-full'>
          {/* Left side of About section */}
          <div className=' sm:w-3/6 sm:px-28 sm:py-20 text-center'>
              <h1 id='intro' className='py-4 text-white font-roboto text-4xl md:text-5xl leading-snug'>
                Welcome to my Portfolio<br /> I'm a
                <br /> 
                <span className='leading-relaxed text-react font-bold text-5xl md:text-6xl'>React Developer</span>
              </h1>

              <div>
                <button className='px-4 py-2 text-2xl text-white sm:text-lg font-bold hover:text-black bg-blue-400 mt-8'>Resume</button>
              </div>
           
          </div>
          {/* Right side of About section */}
          <div className='w-2/4 py-14 md:w-4/12 flex items-center animate-spin justify-center'>
              <img src={svg} className='w-3/4'/>
          </div>
        </div>

        <div className='absolute bottom-0 flex justify-center w-full'>
          <Next content={"projects"}/>
        </div>
    </section>
  )
}

export default About
