"use client";

import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-base-200">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-extrabold font-heading text-center mb-16">
          Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="bg-base-100 p-8 md:p-12 rounded-3xl shadow-xl border border-base-content/5 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Let's talk about everything!</h3>
            <p className="text-base-content/70 mb-10 text-lg">
              Feel free to reach out for collaborations, freelance projects, or just to say hi. I'm always open to discussing new opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-base-content/80">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saichaitanya5191@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-lg font-medium">saichaitanya5191@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-base-content/80">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-medium">+91 8019471141</span>
              </div>
              <div className="flex items-center gap-4 text-base-content/80">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-medium">Visakhapatnam, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          <form className="bg-base-100 p-8 md:p-12 rounded-3xl shadow-xl border border-base-content/5" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium text-base-content/70">Your Name</span>
              </label>
              <input type="text" placeholder="John Doe" className="input input-bordered w-full focus:input-primary" />
            </div>
            
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium text-base-content/70">Your Email</span>
              </label>
              <input type="email" placeholder="john@example.com" className="input input-bordered w-full focus:input-primary" />
            </div>
            
            <div className="form-control w-full mb-8">
              <label className="label">
                <span className="label-text font-medium text-base-content/70">Message</span>
              </label>
              <div className='w-full'>
                <textarea className="textarea textarea-bordered h-32 focus:textarea-primary w-full" placeholder="Tell me about your project..."></textarea>
              </div>
            </div>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saichaitanya5191@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block text-lg h-auto py-3 rounded-full">
              Send Email
            </a>
          </form>
          
        </div>
      </div>
    </section>
  );
}
