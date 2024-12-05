import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Master in Digital Design",
    institution: "ELISAVA Barcelona School of Design and Engineering",
    location: "Barcelona, Spain",
    period: "2019 - 2020",
    description: "Specialized in interaction design and digital experiences, focusing on user-centered design methodologies and digital innovation."
  },
  {
    degree: "Bachelor in Design",
    institution: "Universidad Diego Portales",
    location: "Santiago, Chile",
    period: "2012 - 2016",
    description: "Comprehensive design education with emphasis on visual communication, digital media, and interactive design principles."
  }
];

export function Education() {
  return (
    <section className="py-32 px-8" id="education">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium mb-4">EDUCATION</span>
          <h2 className="text-4xl font-bold text-white mb-4">Academic Background</h2>
          <p className="text-gray-400 max-w-2xl">
            My educational journey has equipped me with a strong foundation in design,
            technology, and creative problem-solving.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <GraduationCap className="text-emerald-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-emerald-400 font-medium mb-4">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}