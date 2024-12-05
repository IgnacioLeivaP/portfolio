import React from 'react';
import { Home, Briefcase, Mail, User, Code, FileText, GraduationCap, Youtube, Instagram } from 'lucide-react';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-gray-900/50 backdrop-blur-lg border-r border-gray-800">
      <div className="flex flex-col items-center py-8 h-full">
        <div className="mb-8">
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        </div>
        
        <nav className="flex-1 flex flex-col gap-4">
          <NavLink icon={<Home size={20} />} href="#home" label="Home" />
          <NavLink icon={<User size={20} />} href="#about" label="About" />
          <NavLink icon={<GraduationCap size={20} />} href="#education" label="Education" />
          <NavLink icon={<Briefcase size={20} />} href="#work" label="Work" />
          <NavLink icon={<Youtube size={20} />} href="#youtube-projects" label="YouTube" />
          <NavLink icon={<Instagram size={20} />} href="#instagram" label="Instagram" />
          <NavLink icon={<Code size={20} />} href="#skills" label="Skills" />
          <NavLink icon={<FileText size={20} />} href="#blog" label="Blog" />
          <NavLink icon={<Mail size={20} />} href="#contact" label="Contact" />
        </nav>
      </div>
    </aside>
  );
}