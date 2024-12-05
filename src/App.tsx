import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkGrid } from './components/WorkGrid';
import { Education } from './components/Education';
import { YouTubeProjects } from './components/YouTubeProjects';
import { InstagramFeed } from './components/InstagramFeed';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Sidebar />
      <Header />
      <main className="pl-20">
        <Hero />
        <Education />
        <WorkGrid />
        <YouTubeProjects />
        <InstagramFeed />
      </main>
    </div>
  );
}

export default App;