import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Digital Experience Platform",
    category: "Web Development",
    description: "A modern web platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    url: "#"
  },
  {
    title: "E-commerce Solution",
    category: "UI/UX Design",
    description: "Complete e-commerce redesign and development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    url: "#"
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Innovative banking solution for modern users",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    url: "#"
  }
];

export function WorkGrid() {
  return (
    <section className="py-32 px-8" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium mb-4">SELECTED WORK</span>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            A curated selection of my recent projects, showcasing web development,
            design, and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 p-6">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-2">
                    {project.category}
                    <ExternalLink size={16} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}