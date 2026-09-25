import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';

// Sections tracked by the animated nav underline (ids must match App.jsx).
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);

      // Scrollspy: the active section is the last one whose top has passed the
      // 45% line of the viewport. Reads only, so it costs one layout pass.
      const band = window.innerHeight * 0.45;
      let current = SECTION_IDS[0];
      SECTION_IDS.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= band) current = id;
      });
      setActiveSection(current);
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    measure();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
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
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
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
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
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
