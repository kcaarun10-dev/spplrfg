
import React from 'react';
import { SERVICES } from '../constants.tsx';
import { Globe, Cpu, Sparkles, Code, Layout, Terminal } from 'lucide-react';

const IconMap: Record<string, any> = {
  Globe, Cpu, Sparkles, Code, Layout, Terminal
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          I provide cutting-edge digital solutions tailored to your unique business needs, combining aesthetics with rock-solid performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = IconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="group p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-500`}>
                  {IconComponent && <IconComponent className="text-white w-8 h-8" />}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center text-sm font-bold text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
