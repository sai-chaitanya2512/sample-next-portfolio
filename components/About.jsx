"use client";

import { Code2, MonitorSmartphone, Palette, Zap } from 'lucide-react';

export default function About() {
  const skillsList = [
    "HTML5", "CSS3 / SASS / SCSS", "JavaScript (ES6+)", "React JS", 
    "Bootstrap 5", "Responsive Web Design", "REST API Integration", 
    "Performance Optimization", "Git & GitHub", "Figma", "Agile / Sprint-Based Development"
  ];

  return (
    <section id="about" className="py-24 bg-base-200">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-extrabold font-heading text-center mb-16">
          About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-lg text-base-content/80 leading-relaxed">
            <p>
              I am a Front-End Developer currently working at Imaginnovate in Visakhapatnam. I have a Master of Computer Applications (MCA) and a Bachelor of Computer Science.
            </p>
            <p>
              My experience includes spearheading a responsive e-commerce platform, refactoring legacy codebases, and acting as a Team Lead during manager absences. I am passionate about writing clean code and improving overall maintainability.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill, index) => (
                <span key={index} className="badge badge-primary badge-outline badge-lg py-4 px-4 font-semibold hover:bg-primary hover:text-primary-content transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
