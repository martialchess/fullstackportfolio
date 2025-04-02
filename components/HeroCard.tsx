import React from 'react';
import { FaBattleNet, FaCat, FaChartArea } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from Next.js

export default function HeroCard() {
  // Reference for Contact Form section to scroll to
  const ContactFormRef = useRef<null | HTMLDivElement>(null);

  // State to handle client-side only logic
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to ensure client-side rendering
  useEffect(() => {
    setIsClient(true); // This will only run on the client side
  }, []);

  return (
    <>
      {/* Only render this part once the component is mounted on the client */}
      {isClient && (
        <div className="relative flex flex-col md:flex-row items-center justify-center bg-blue-100 p-6 rounded-3xl shadow-lg w-full max-w-4xl mx-auto">
          <div className="space-y-6 md:w-2/3">
            <p className="text-blue-600 text-sm">Hi, I am</p>
            <h1 className="text-4xl font-bold text-blue-800">Rida Malik</h1>
            <h2 className="text-lg font-semibold text-gray-700">Full-Stack Web Developer</h2>
            <p className="text-gray-600">
              I specialize in creating beautiful, functional websites using modern tools like React, Next.js, and Tailwind CSS.
            </p>

            {/* Buttons replaced with Links for smooth scrolling */}
            <div className="space-x-4 mt-4">
              <Link href="#contact" passHref>
                <button
                  className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </button>
              </Link>
              <a
              href="/ridamalikresume.pdf"  // Path to the CV file in the public folder
              download="My_CV_Rida_Malik" // Optional: Name of the file on download
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
              Download CV
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
            <img
              src="/profilephotobw.jpg" // Ensure this image is in your public folder
              alt="Rida Malik"
              width={180}
              height={180}
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute top-75 sm:top-2/3 left-1/2 transform -translate-x-1/2 z-10 bg-white p-6 rounded-3xl shadow-xl w-full md:w-full mt-25">
            <div className="flex justify-between text-sm text-gray-600">
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
                <FaCat className="h-6 w-6 text-blue-700"/>
                <div>
                  <p className="font-bold text-blue-800">24/7</p>
                  <p>Online Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
