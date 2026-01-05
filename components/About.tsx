
import React from 'react';
import { SKILLS } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/portrait/800/800" 
                alt="Arun Regmi" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-black font-heading text-purple-400">5+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">Years Exp.</div>
                </div>
                <div className="w-px h-10 bg-white/10 self-center"></div>
                <div>
                  <div className="text-3xl font-black font-heading text-blue-400">40+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">Projects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Designing the Future, <br/><span className="text-purple-500">One Pixel at a Time.</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                As a visionary developer based in Nepal, I bridge the gap between creative design and technical excellence. My approach is rooted in the "Apple-level" obsession with detail and "Awwwards-style" innovation.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-widest text-white/50">Core Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-xs text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 group-hover:scale-x-105" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
