// my-portfolio/components/FeaturedProjects.tsx
import React from 'react';

const projects = [
    {
      title: 'Portfolio Website - Live',
      image: '/project1.png',
      description: 'A personal portfolio built with Next.js, React, and Tailwind CSS.'
    },
    {
      title: 'Blog CMS - in build',
      image: '/project2.jpg',
      description: 'A Markdown-powered blog content system with dynamic routing.'
    },
    {
      title: 'Task Tracker App - in build',
      image: '/project3.jpg',
      description: 'A productivity app for managing daily tasks with real-time sync.'
    },
    {
      title: 'E-commerce UI - in build',
      image: '/project4.jpg',
      description: 'A responsive and modern e-commerce frontend built with Tailwind CSS.'
    }
  ];
  
  export default function FeaturedProjects() {
    return (
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  