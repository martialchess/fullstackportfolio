// my-portfolio/components/HeroCard.tsx
import Image from 'next/image';

export default function HeroCard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-2xl shadow-md">
      {/* Text content */}
      <div className="space-y-4 md:w-2/3">
        <p className="text-blue-600">Hi, I am</p>
        <h1 className="text-4xl font-bold text-blue-800">Rida Malik</h1>
        <h2 className="text-lg font-semibold text-gray-700">Full-Stack Web Developer</h2>
        <p className="text-gray-600">
          I specialize in creating beautiful, functional websites using modern tools like React, Next.js, and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Contact Me
          </button>
          <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
            Download CV
          </button>
        </div>

        {/* Stats */}
        <div className="flex space-x-6 pt-4 text-sm text-gray-600">
          <div>
            <p className="font-bold text-blue-800">2+ years</p>
            <p>Experience</p>
          </div>
          <div>
            <p className="font-bold text-blue-800">5+</p>
            <p>Projects Completed</p>
          </div>
          <div>
            <p className="font-bold text-blue-800">24/7</p>
            <p>Online Support</p>
          </div>
        </div>
      </div>

      {/* Profile image */}
      <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
        <img
          src="/profilephoto.jpg" // Add this image to your public folder
          alt="Rida Malik"
          width={180}
          height={180}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
