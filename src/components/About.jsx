import React from 'react'
import svg from '../assets/react.svg';

const About = () => {
  return (
    <section id='about' className='min-h-screen w-full flex flex-col items-center sm:flex-row flex-1'>
      {/* Left side of About section */}
        <div className=' w-2/4 px-28 py-20'>
            <h1 id='intro' className=' text-white font-roboto text-5xl leading-snug'>
              Welcome to my Portfolio<br /> I'm a
              <br /> 
              <span className=' text-blue-400 font-bold text-6xl'>React Developer</span>
            </h1>
           
        </div>
        {/* Right side of About section */}
        <div className='w-5/12 flex items-center animate-spin justify-center'>
            <img src={svg} className='w-2/4'/>
        </div>
    </section>
  )
}

export default About
