import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {
  return (
    <main className='bg-slate-900'>
        <Navbar />
        <About />
    </main>
  )
}

export default App
