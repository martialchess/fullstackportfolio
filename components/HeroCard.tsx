import React from 'react';
import { FaBattleNet, FaCat, FaChartArea } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroCard() {
  const ContactFormRef = useRef<null | HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="relative flex flex-col md:flex-row items-center justify-center bg-blue-100 p-6 pb-28 md:pb-16 rounded-3xl shadow-lg w-full max-w-4xl mx-auto">
        {/* Left Text Section */}
        <div className="space-y-6 md:w-2/3">
          <p className="text-blue-600 text-sm">Hi, I am</p>
          <h1 className="text-4xl font-bold text-blue-800">Rida Malik</h1>
          <h2 className="text-lg font-semibold text-gray-700">Full-Stack Web Developer</h2>
          <p className="text-gray-600">
            I specialize in creating beautiful, functional websites using modern tools like React, Next.js, and Tailwind CSS.
          </p>
      
          <div className="space-x-4 mt-4">
            <Link href="#contact" passHref>
              <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </Link>
            <a
              href="/ridamalikresume.pdf"
              download="My_CV_Rida_Malik"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      
        {/* Right Image */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src="/profilephotobw.jpg"
            alt="Rida Malik"
            width={180}
            height={180}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      
        {/* Floating Stats Card */}
        <div className="w-full mt-6 md:mt-0 md:w-[85%] z-10 bg-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between gap-6 text-sm text-gray-600 
                        md:absolute md:-bottom-10 md:left-1/2 md:-translate-x-1/2">
          <div className="flex items-center space-x-2">
            <FaChartArea className="h-6 w-6 text-blue-700" />
            <div>
              <p className="font-bold text-blue-800">2+ years</p>
              <p>Experience</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaBattleNet className="h-6 w-6 text-blue-700" />
            <div>
              <p className="font-bold text-blue-800">5+</p>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaCat className="h-6 w-6 text-blue-700" />
            <div>
              <p className="font-bold text-blue-800">24/7</p>
              <p>Online Support</p>
            </div>
          </div>
        </div>
      </div>      
      )}
    </>
  );
}
