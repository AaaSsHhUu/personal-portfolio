import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <section className='bg-gray-200 py-4 px-8 flex flex-col sm:flex-row justify-between items-center container sticky top-0 z-10'>
        <div className='flex items-center'>
            <img src={logo} className='rounded-full h-16 mr-2' />
            <h1 className='text-slate-900 font-serif text-5xl font-bold italic'>Ashu</h1>
        </div>
        <div className='hidden sm:block mr-24'>
            <ul className='flex gap-4 flex-col justify-center sm:flex-row sm:items-center '>
              <li><a href="#home" className='text-black text-lg p-2 rounded-lg hover:bg-blue-800 hover:text-white font-medium'>Home</a></li>
              <li><a href="#skills" className='text-black text-lg p-2 rounded-lg hover:bg-blue-800 hover:text-white font-medium'>Skills</a></li>
              <li><a href="#about" className='text-black text-lg p-2 rounded-lg hover:bg-blue-800 hover:text-white font-medium'>About</a></li>
              <li><a href="#contact" className='text-black text-lg p-2 rounded-lg hover:bg-blue-800 hover:text-white font-medium'>Contact Us</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar
