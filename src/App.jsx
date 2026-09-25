import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import AuroraBackground from './components/AuroraBackground';
import MotionLayer from './components/MotionLayer';
import Welcome3DAvatar from './components/Welcome3DAvatar';
import Hero3DCube from './components/Hero3DCube';

import { Button, Card, Tag, Modal } from './components/UIComponents';
import { 
  ArrowRight, Mail, Sparkles, Code2, Atom, Server, Database, 
  Phone, MapPin, ExternalLink, GraduationCap, Briefcase, 
  Layers, Globe, ChevronRight, Rocket, Zap
} from 'lucide-react';
import { GithubIcon } from './components/GithubIcon';

import { 
  personalInfo, stats, skills, projects, liveProjects, 
  experiences, education, valueProps 
} from './data';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Shukriya! Aapka message mil gaya hai. Jasir will get back to you shortly.");
    setIsContactModalOpen(false);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'live') return Boolean(project.liveUrl);
    if (activeFilter === 'mern') return project.category === 'mern';
    if (activeFilter === 'dotnet') return project.category === 'dotnet';
    if (activeFilter === 'other') return project.category === 'php' || project.category === 'mobile';
    return true;
  });

  // Technology ribbon shown under the skills grid.
  const marqueeItems = [...skills.frontend, ...skills.backend, ...skills.databases].map(
    (skill) => skill.name
  );

  return (
    <div className="portfolio-app-root">
      {/* Animated gradient backdrop (pure CSS) + scroll & pointer driven motion */}
      <AuroraBackground />
      <MotionLayer />

      {/* Background Ambient Orbs */}
      <div className="ambient-glow-sphere ambient-sphere-1" />
      <div className="ambient-glow-sphere ambient-sphere-2" />

      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />

      {/* 1. HERO SECTION */}
      <section id="home" className="container hero-section text-center">
        <div className="badge">
          <Atom size={16} className="spin-slow" />
          <span>{personalInfo.title} • SMUFTECH</span>
        </div>

        <h1 className="hero-title hero-title-extreme">
          Architecting Scalable <br />
          <span className="animated-gradient-text">MERN, React & AI Solutions</span>
          <span className="hero-subtitle-role">{personalInfo.roleSub}</span>
        </h1>

        <p className="hero-description">
          Hi, I’m <strong>{personalInfo.name}</strong>. {personalInfo.summary}
        </p>

        <div className="button-group">
          <a href="#projects">
            <Button icon={Code2}>Explore {projects.length}+ Projects</Button>
          </a>
          <Button variant="secondary" icon={Sparkles} onClick={() => setIsContactModalOpen(true)}>
            Hire Me / Quick Message
          </Button>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" icon={GithubIcon}>GitHub Profile</Button>
          </a>
        </div>

        {/* 3D Interactive MERN Core Visual */}
        <Hero3DCube />

        {/* Dynamic Metric Stats Bar */}
        <div className="hero-stats-bar">
          {stats.map((st, sIdx) => (
            <div key={sIdx} className="hero-stat-card">
              <div className="hero-stat-value">{st.value}</div>
              <div className="hero-stat-label">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ABOUT & VALUE PROPOSITIONS */}
      <section id="about" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Why Engineering Teams & CEOs Hire Me</h2>
            <p className="section-subtitle">
              Delivering high-performance software with zero compromise on clean architecture, security, and velocity.
            </p>
          </div>

          <div className="value-props-grid">
            {valueProps.map((vp, vIdx) => (
              <div key={vIdx} className="value-prop-card">
                <div className="value-prop-icon">
                  {vIdx === 0 && <Code2 size={22} />}
                  {vIdx === 1 && <Rocket size={22} />}
                  {vIdx === 2 && <Zap size={22} />}
                  {vIdx === 3 && <Database size={22} />}
                </div>
                <h3 className="value-prop-title">{vp.title}</h3>
                <p className="value-prop-desc">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Technical Mastery & Stack</h2>
            <p className="section-subtitle">
              Battle-tested tools and frameworks utilized across production systems at SMUFTECH and client deployments.
            </p>
          </div>

          <div className="grid-3">
            <Card title="Front-End Engineering" icon={Atom}>
              <div className="tag-list">
                {skills.frontend.map((s, i) => (
                  <Tag key={i} text={s.name} highlight={s.highlight} />
                ))}
              </div>
            </Card>

            <Card title="Back-End & Microservices" icon={Server}>
              <div className="tag-list">
                {skills.backend.map((s, i) => (
                  <Tag key={i} text={s.name} highlight={s.highlight} />
                ))}
              </div>
            </Card>

            <Card title="Databases & DevOps" icon={Database}>
              <div className="tag-list">
                {skills.databases.map((s, i) => (
                  <Tag key={i} text={s.name} highlight={s.highlight} />
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Infinite technology marquee (pure CSS, edits nothing else) */}
        <div className="tech-marquee" aria-hidden="true">
          <div className="tech-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span className="tech-marquee-item" key={`${item}-${idx}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIVE CLIENT PROJECTS SPOTLIGHT */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(8, 47, 73, 0.15) 0%, transparent 100%)' }}>
        <div className="container">
          <div className="text-center">
            <div className="badge">
              <Sparkles size={14} className="spin-slow" />
              <span>LIVE IN PRODUCTION</span>
            </div>
            <h2 className="section-title">Featured Live Deployments</h2>
            <p className="section-subtitle">
              Real-world client sites and my proprietary brand running live on custom domains & Vercel.
            </p>
          </div>

          <div className="grid-3">
            {liveProjects.map((p) => (
              <Card
                key={p.id}
                title={p.title}
                desc={p.shortDesc}
                icon={Globe}
                badge={p.badge}
                onClick={() => setSelectedProject(p)}
              >
                <div>
                  <div className="tag-list">
                    {p.tags.slice(0, 4).map((tag, tIdx) => (
                      <Tag key={tIdx} text={tag} highlight={true} />
                    ))}
                  </div>
                  <div className="card-cta-row">
                    <span className="card-details-trigger">
                      View Architecture & Specs <ChevronRight size={14} />
                    </span>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-live-direct"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Site <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALL PROJECTS SECTION (WITH CLICKABLE MODAL) */}
      <section id="projects" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Complete Software Engineering Portfolio</h2>
            <p className="section-subtitle">
              Click any project card to inspect complete system architecture, features, database models, and strategy.
            </p>

            <div className="project-filter-bar">
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Projects <span className="filter-count">{projects.length}</span>
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'live' ? 'active' : ''}`}
                onClick={() => setActiveFilter('live')}
              >
                Live Websites <span className="filter-count">{liveProjects.length}</span>
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'mern' ? 'active' : ''}`}
                onClick={() => setActiveFilter('mern')}
              >
                MERN & AI Platform <span className="filter-count">11</span>
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'dotnet' ? 'active' : ''}`}
                onClick={() => setActiveFilter('dotnet')}
              >
                ASP.NET & SQL Server <span className="filter-count">5</span>
              </button>
              <button
                type="button"
                className={`filter-btn ${activeFilter === 'other' ? 'active' : ''}`}
                onClick={() => setActiveFilter('other')}
              >
                PHP & Flutter Mobile <span className="filter-count">3</span>
              </button>
            </div>
          </div>

          <div className="grid-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                desc={project.shortDesc}
                icon={Layers}
                badge={project.badge}
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="tag-list">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <Tag key={tIdx} text={tag} />
                    ))}
                    {project.tags.length > 4 && (
                      <Tag text={`+${project.tags.length - 4} more`} />
                    )}
                  </div>

                  <div className="card-cta-row">
                    <span className="card-details-trigger">
                      Full Specs & Strategy <ChevronRight size={14} />
                    </span>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-live-direct"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.725rem', color: '#64748b' }}>
                        MERN Repo
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* 6. PROFESSIONAL WORK EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Work Experience & Industry Track Record</h2>
            <p className="section-subtitle">
              Professional journey at SMUFTECH and independent freelance engineering deliveries.
            </p>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card-wrap">
                <div className={`experience-timeline-node ${exp.current ? 'current' : ''}`} />
                <div className="experience-card">
                  <div className="exp-header">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className={`exp-badge ${exp.current ? 'current' : ''}`}>
                      {exp.type} • {exp.period}
                    </span>
                  </div>

                  <div className="exp-company-bar">
                    <span className="exp-company">
                      <Briefcase size={15} /> {exp.company}
                    </span>
                    <span>
                      <MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> {exp.location}
                    </span>
                  </div>

                  <ul className="exp-highlights">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="exp-highlight-item">
                        <span className="exp-check">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FORMAL EDUCATION */}
      <section id="education" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Education & Credentials</h2>
            <p className="section-subtitle">
              Formal computer science foundations and software engineering accreditations.
            </p>
          </div>

          <div className="education-grid">
            {education.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <div className="card-icon"><GraduationCap size={20} /></div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                </div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-period">{edu.period}</div>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 8. CONTACT & QUICK HIRE */}
      <section id="contact" className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="contact-box">
            <div className="badge">
              <Sparkles size={14} />
              <span>READY TO COLLABORATE</span>
            </div>
            <h2 className="section-title">Let’s Build High-Impact Software Together</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
              Currently open for Full-Time Junior Full Stack MERN Developer roles, React development positions, and bespoke freelance software projects in 2026.
            </p>

            <div className="contact-meta">
              <span className="contact-item">
                <MapPin size={14} style={{ color: 'var(--accent-cyan)' }} /> {personalInfo.location}
              </span>
              <span className="contact-item">
                <Phone size={14} style={{ color: 'var(--accent-cyan)' }} /> {personalInfo.phone}
              </span>
              <span className="contact-item">
                <Mail size={14} style={{ color: 'var(--accent-cyan)' }} /> {personalInfo.email}
              </span>
            </div>

            <div className="button-group">
              <Button icon={Mail} onClick={() => setIsContactModalOpen(true)}>
                Send Direct Message
              </Button>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                <Button variant="secondary" icon={GithubIcon}>Visit GitHub</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT MODAL (Clean Pill Form) */}
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        title=""
      >
        <div className="quote-modal-wrapper">
          <h2 className="quote-modal-title">Get in Touch with Jasir</h2>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
            Looking for a MERN developer or need a high-converting web application? Fill out this quick inquiry:
          </p>

          <form onSubmit={handleFormSubmit} className="quote-form">
            <div className="quote-grid-2">
              <input 
                type="text" 
                className="quote-input" 
                placeholder="First Name *" 
                required 
              />
              <input 
                type="text" 
                className="quote-input" 
                placeholder="Last Name *" 
                required 
              />
            </div>

            <div className="quote-field-full">
              <input 
                type="email" 
                className="quote-input" 
                placeholder="Work Email *" 
                required 
              />
            </div>

            <div className="quote-field-full">
              <select className="quote-input quote-select" required defaultValue="">
                <option value="" disabled>Select Engagement Type</option>
                <option value="fulltime">Full-Time Junior MERN Developer Role</option>
                <option value="react">React / Next.js Web Development</option>
                <option value="fullstack">Complete Full Stack MERN App</option>
                <option value="freelance">Freelance Client Project</option>
              </select>
            </div>

            <div className="quote-field-full">
              <textarea 
                className="quote-input quote-textarea" 
                rows={3} 
                placeholder="Tell Jasir about your company, role, or project requirements..."
                required
              />
            </div>

            <button type="submit" className="quote-submit-btn">
              <span>SEND INQUIRY</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={20} />
              </div>
            </button>
          </form>
        </div>
      </Modal>

      {/* 10. PROJECT DETAIL MODAL (FOR CEOS & HIRING MANAGERS) */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* 3D Interactive Welcome Bot Avatar Assistant */}
      <Welcome3DAvatar onChatOpen={() => setIsContactModalOpen(true)} />

      {/* FOOTER */}
      <footer className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>© {new Date().getFullYear()} Jasir Ali Khan. Junior Full Stack MERN Developer at SMUFTECH.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#home" style={{ color: 'var(--accent-cyan)' }}>Back to Top ↑</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}>GitHub</a>
            <a href={`mailto:${personalInfo.email}`} style={{ color: '#94a3b8' }}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
