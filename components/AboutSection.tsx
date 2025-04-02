// my-portfolio/components/AboutSection.tsx
export default function AboutSection() {
    return (
      <section className="bg-white p-6 mt-40 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          I am a passionate developer with a love for creating dynamic and responsive web applications. I have a strong foundation in JavaScript, React, and Node.js, and Im always eager to learn new technologies and improve my skills.
        </p>
        <div className="text-gray-600 space-y-1">
          <p><span className="font-semibold">Name:</span> Rida Malik</p>
          <p><span className="font-semibold">Email:</span> ridamaliktech@gmail.com</p>
        </div>
      </section>
    );
  }
  