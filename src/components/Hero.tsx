import React from 'react';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#10b981_0%,_transparent_35%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#0f766e_0%,_transparent_35%)] opacity-20" />
      
      <div className="container mx-auto px-8">
        <div className="max-w-3xl space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            Available for freelance work
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight">
            Creative Developer & Digital Designer
          </h1>
          
          <p className="text-xl text-gray-400">
            Crafting digital experiences that blend innovation with aesthetics. 
            Specialized in creating memorable web solutions that drive results.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="group flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700/50 transition-colors">
              Get in Touch
            </a>
          </div>

          <div className="flex gap-6 pt-8 border-t border-gray-800/50">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}