import React from 'react'
import svg from '../assets/react.svg';
import Next from './Next';

const About = () => {
  return (
    <section id='about' className='h-80vh pb-12 w-full flex flex-col'>
        <div className='flex flex-col md:flex-row items-center w-full'>
          {/* Left side of About section */}
          <div className=' w-3/6 px-28 py-20'>
              <h1 id='intro' className=' text-white font-roboto text-5xl leading-snug'>
                Welcome to my Portfolio<br /> I'm a
                <br /> 
                <span className=' text-react font-bold text-6xl'>React Developer</span>
              </h1>

              <div>
                <button className='px-4 py-2 text-white text-lg font-bold hover:text-black bg-blue-400 mt-8'>Resume</button>
              </div>
           
          </div>
          {/* Right side of About section */}
          <div className='w-4/12 ml-6 flex items-center animate-spin justify-center'>
              <img src={svg} className='w-3/4'/>
          </div>
        </div>

        <div className='relative -bottom-7 flex justify-center w-full'>
          <Next content={"projects"}/>
        </div>
    </section>
  )
}

export default About
