"use client"
import React from 'react'
import Image from 'next/image'
const Projects = () => {
  return (
    <div id='projects' className='bg-[#F5F5DC]'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-6xl text-2xl font-medium title-font mb-4 text-yellow-700">
        Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-yellow-500">
      Welcome to the Projects page, a showcase of Aleena Amir's exceptional work, where creativity meets professionalism. Each project reflects Aleena's passion for crafting well-designed, impactful solutions that elevate experiences and deliver results. From concept to completion, every detail is meticulously curated to ensure a seamless blend of functionality and aesthetics. Whether it’s innovative digital designs, strategic branding, or cutting-edge development, Aleena’s projects embody excellence, leaving a lasting impression. Dive into this collection of transformative work and witness the artistry and dedication that define her professional journey.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4 border-4 border-gray-500">
        <div className="flex relative">
          <Image
            src={require("../../../public/acids/fruit-web.png")}
             alt="fruitweb"
             width={800}
             height={800}
            className="absolute inset-0 w-full h-full object-cover object-center"
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
             A Simple Fruit-WebPage
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
              Fruit-Basket
            </h1>
            <p className="leading-relaxed">
            A vibrant and creative fruit web structure crafted with HTML, marking the exciting start of my coding journey.This simple project symbolizes the first step toward endless possibilities in development
            </p>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4 border-4 border-gray-500 ">
        <div className="flex relative">
          <Image
            alt="Pizzawebsite"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/acids/pizza-web.png")}
            height={800}
            width={800}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
              A Simple Pizza-Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Pizza Paradise
            </h1>
            <p className="leading-relaxed">
            A dynamic and interactive pizza website built using HTML, CSS, and JavaScript, showcasing creativity and functionality. As one of my early projects, it represents a key milestone in my exciting coding journey!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 border-4 border-gray-500">
        <div className="flex relative">
          <Image
            alt="Calculator"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/acids/calculator.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
              A Sum Solver
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              A Simple Calculator
            </h1>
            <p className="leading-relaxed">
            A sleek and functional calculator designed with HTML, CSS, and JavaScript, blending simplicity with practicality. As one of my early projects, it marks an essential step in my coding journey!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 border-4 border-gray-500">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/acids/resume.png")}
            height={800}
            width={800}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
              Info Form
            </h2>
            <h1 className="title-font text-lg font-small text-gray-900 mb-3">
             Resume builder
            </h1>
            <p className="leading-relaxed">
            A fully responsive resume builder crafted with HTML, CSS, and JavaScript, combining functionality with sleek design. This project stands out as one of my most dedicated and rewarding efforts in my coding journey!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 border-4 border-gray-500">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/acids/game.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
              Mind Relaxing Tool
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Tic Tac Toe Game
            </h1>
            <p className="leading-relaxed">
            A classic Tic Tac Toe game built with HTML, CSS, and JavaScript, bringing fun and excitement to life. This project stands out as one of the most joyful and mind-relaxing highlights of my coding journey!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4  border-4 border-gray-500">
        <div className="flex relative">
          <Image
            alt="to do app"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/acids/Todoapp.jpeg")}
            height={500}
            width={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
              organizer
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Todo App
            </h1>
            <p className="leading-relaxed">
            "I built a sleek to-do app with Next.js, showcasing my skills in responsive web applications.The app simplifies task management with an intuitive design and smooth performance."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects
