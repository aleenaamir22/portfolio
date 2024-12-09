import React from 'react'
import Link from 'next/link'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import Navbar from '../navbar';


const Contact = () => {
  return (
    <div id='Contact'>
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-6xl text-3xl font-medium title-font mb-4 text-yellow-600">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-yellow-300">
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-orange-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-orange-300 focus:border-gold-800 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-black-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-orange-200 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-orange-300 focus:border-gold-800 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-black-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-orange-200 "
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-orange-300 focus:border-gold-800 focus:bg-white focus:ring-2 focus:ring-orange-200 h-30 text-base outline-none text-black-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg">
            Send
          </button>
        </div>
        <div className="p-3 w-full pt-8 mt-8 border-t border-gray-200 text-center">
      <div className="flex items-center justify-center space-x-6">
        {/* Email */}
        <a 
          href="mailto:codewhisper@gmail.com" 
          className="text-gray-500 flex items-center space-x-2"
        >
          <SiGmail className="text-2xl hover:text-[red]" />
         {/* <span>codewhisper@gmail.com</span>*/}
        </a>

        {/* Instagram */}
        <Link 
          target="_blank" 
          href="https://www.instagram.com/code._.whispers" 
          className="text-gray-500"
        >
          <FaSquareInstagram className="text-2xl hover:text-[#cc2366]" />
        </Link>

        {/* LinkedIn */}
        <Link 
          target="_blank" 
          href="https://www.linkedin.com/in/aleena-amir-5995482b6" 
          className="text-gray-500"
        >
          <FaLinkedin className="text-2xl hover:text-[blue]" />
        </Link>
      </div>
    </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
