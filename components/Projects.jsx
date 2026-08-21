"use client";

import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Pickbazar Website',
      description: 'Built a responsive e-commerce platform with 10+ product categories, add-to-cart functionality, and sub-2s load time.',
      tags: ['React JS', 'Responsive UI', 'E-Commerce'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Music Player',
      description: 'Developed a feature-rich music player with 6 core features (loop, shuffle, play/pause, queue, live song list, volume control).',
      tags: ['JavaScript', 'React JS'],
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Chess Game',
      description: 'Engineered a fully functional browser chess game with 15 core game logic features.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-extrabold font-heading text-center mb-16">
          Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-200/50 shadow-xl hover:shadow-2xl transition-all border border-base-content/5 group overflow-hidden">
              <figure className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="btn btn-circle btn-primary btn-sm">
                    <Code2 size={16} />
                  </button>
                  <button className="btn btn-circle btn-primary btn-sm">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </figure>
              
              <div className="card-body">
                <h3 className="card-title text-xl font-bold">{project.title}</h3>
                <p className="text-base-content/70 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="card-actions justify-start mt-auto">
                  {project.tags.map((tag, i) => (
                    <div key={i} className="badge badge-secondary badge-outline text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
