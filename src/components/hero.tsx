"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from "typewriter-effect";
import Link from 'next/link';
import hero from "../../public/acids/profpic.jpg";
const Hero = () => {
  return (
    <div style={{backgroundColor:"orange"}}>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
   <Image
   className= "object-cover object-center rounded-full mx-auto w-[15rem] h-[15rem] border-4 border-gray-600 transition-transform duration-300 group-hover:scale-110"
   alt='hero'
   width={500}
   height={500}
   src={hero}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter 
  options={{
    strings: ['Aleena Amir','Web Developer', 'UI/UX Designer','Graphic Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed bg-gray-100" style={{fontSize:"1.3em", color:"black",padding:"10px"}}>
      Welcome to Code Whispers,<br></br> the creative space of <strong>Aleena Amir</strong>, a passionate web developer and graphic designer. With a keen eye for aesthetics and a drive for functionality, Aleena crafts seamless digital experiences that blend innovation with design. Whether building dynamic websites or creating visually compelling graphics, her work reflects precision, creativity, and a deep understanding of modern design trends. Let&apos;s turn your ideas into impactful digital solutions.
</p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
          Contact
        </button>
        </Link>
        <Link href={"#portfolio"}>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-100 rounded text-lg">
          Portfolio
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
