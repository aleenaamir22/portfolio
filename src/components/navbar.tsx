"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from "../../public/acids/logo and prof.png";

const Navbar = () => {
  return (
    <div className='bg-[#333] z-50 sticky top-0' style={{backgroundColor:"#333",padding:"1px 2px",border:"2px solid white",borderRadius:"3px"}}>
      <header className="text-[#f5f5dc] body-font bg- ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left ">
    <a className="flex title-font font-medium items-center text-yellow-500 mb-3 md:mb-0 ">
   <Image 
   src={logo}
   alt='code whispers'
   height={500}
   width={500}
  className='rounded-full object-cover w-12 h-11 mr-2'/>
      <span className="text-xl mr-2">CodeWhispers</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-right ml-2">
      <Link href={"#"} className="mr-4 hover:text-orange-500">Home</Link>
      <Link href={"#about"} className="mr-4 hover:text-orange-500">About</Link>
      <Link href={"#projects"} className="mr-4 hover:text-orange-500">Projects</Link>
      <Link href={"#portfolio"} className="mr-4 hover:text-orange-500">Portfolio</Link>
      <Link href={"#Contact"} className="mr-4 hover:text-orange-500">Contact</Link>
    </nav>
    </div>
</header>
    </div>
  )
}

export default Navbar
