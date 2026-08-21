"use client";

import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative">
      {/* Background Blob/Gradient effect */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-[100px] opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Content */}
        <div className="max-w-2xl">
          <div className="badge badge-primary badge-outline badge-lg mb-6 py-4 font-semibold">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight mb-4">
            I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">G. L. Sai Chaitanya</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-base-content/80 mb-6">
            Crafting Digital Experiences That Matter
          </h2>
          
          <p className="text-lg text-base-content/70 mb-8">
            Results-driven Front-End Developer with 2+ years of experience building high-performance, accessible web applications. Proficient in React JS, JavaScript, and creating scalable architectures.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary rounded-full group">
              View My Work 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" download="Sai_Chaitanya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline rounded-full">
              Resume <Download size={18} />
            </a>
            
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/saichaitanya2512" target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost btn-sm text-base-content/70 hover:text-primary" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://linkedin.com/in/saichaitanya-72aa0224b" target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost btn-sm text-base-content/70 hover:text-primary" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Visual Element (Mockup) */}
        <div className="hidden md:flex justify-center">
          <div className="mockup-code bg-base-200/50 backdrop-blur-sm border border-base-content/10 w-full max-w-sm shadow-2xl">
            <pre data-prefix="$"><code>npm install react</code></pre> 
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            <pre data-prefix="~" className="mt-4"><code>npm run build</code></pre>
            <pre data-prefix=">" className="text-success"><code>Successfully compiled!</code></pre>
            <pre data-prefix=">" className="text-success"><code>Ready for deployment.</code></pre>
          </div>
        </div>
        
      </div>
    </section>
  );
}
