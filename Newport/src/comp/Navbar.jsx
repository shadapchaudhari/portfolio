import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='md:flex justify-around md:p-5 bg-black text-white '>
        <div className='font-black text-xl ml-5 md:h-14'>
            <h1>CLARK</h1>
        </div>
        <ul className='md:flex md:space-x-10'>
            <li><a href="/Home"><span className='text-yellow-500'>Home</span></a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Resume">Resume</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/My Blog">My Blog</a></li>
            <li><a href="/Contact">Contact</a></li>
        </ul>
    </nav>
    
    </>
  )
}

export default Navbar