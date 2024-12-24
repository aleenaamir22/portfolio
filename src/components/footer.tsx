"use client";
import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/acids/logo and prof.png";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={logo}
              alt="Code Whispers"
              height={100}
              width={100}
              className="rounded-full object-cover w-12 h-11 mr-2"
            />
            <span className="ml-3 text-xl">Code Whispers</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Code Whispers
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://www.instagram.com/code.whisperss"
              className="ml-3 text-gray-500"
            >
              <FaSquareInstagram className="text-3xl hover:text-[#cc2366]" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/aleena-amir-5995482b6"
              className="ml-3 text-gray-500"
            >
              <FaLinkedin className="text-3xl hover:text-[blue]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
