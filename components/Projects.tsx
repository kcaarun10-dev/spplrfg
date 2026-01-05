
import React from 'react';
import { PROJECTS } from '../constants.tsx';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">Selected Work</h2>
            <p className="text-gray-400 max-w-xl">A collection of projects that define my journey through digital craftsmanship and innovation.</p>
          </div>
          <a href="#" className="px-6 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors font-bold uppercase tracking-tighter text-sm">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <a href={project.link} className="p-2 bg-white/10 hover:bg-purple-600 rounded-full transition-colors">
                      <ExternalLink size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white/10 hover:bg-purple-600 rounded-full transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
