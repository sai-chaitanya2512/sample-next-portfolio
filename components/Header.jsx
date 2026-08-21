"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-base-100/80 backdrop-blur-md shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center w-full">
        
        {/* Logo */}
        <div className="flex-1">
          <a href="#home" className="btn btn-ghost text-xl font-heading font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent normal-case">
            G. L. Sai Chaitanya
          </a>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-none items-center gap-2">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saichaitanya5191@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary btn-sm ml-2 rounded-full">Hire Me</a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex-none md:hidden">
          <button className="btn btn-square btn-ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-lg border-t border-base-200 p-4 flex flex-col gap-2 md:hidden">
          <ul className="menu menu-vertical w-full font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="py-3">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saichaitanya5191@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block rounded-full mt-2" onClick={() => setMobileMenuOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
