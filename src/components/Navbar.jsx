import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Jasir</span>
          <span className="logo-highlight">.Dev</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button 
            type="button" 
            className="nav-cta-btn" 
            onClick={onOpenContact}
          >
            <Sparkles size={14} className="spin-slow" />
            <span>Hire Me</span>
          </button>

          {/* Mobile Toggle Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-dropdown">
          <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#education" className="nav-link" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          <button 
            type="button" 
            className="mobile-hire-btn" 
            onClick={() => {
              setIsOpen(false);
              onOpenContact();
            }}
          >
            <Send size={15} /> Quick Hire / Message
          </button>
        </div>
      )}
    </header>
  );
}
