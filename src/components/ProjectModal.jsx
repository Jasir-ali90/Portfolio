import React, { useEffect } from 'react';
import { 
  X, ExternalLink, Layers, CheckCircle2, 
  Cpu, Briefcase, ShieldCheck, Sparkles, ArrowRight 
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';


export default function ProjectModal({ project, isOpen, onClose, onOpenContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isLive = Boolean(project.liveUrl);

  return (
    <div className="modal-overlay project-modal-overlay" onClick={onClose}>
      <div 
        className="modal-container project-detail-modal" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <div className="project-modal-topbar">
          <div className="project-modal-top-meta">
            <span className={`project-status-badge ${isLive ? 'live' : 'github'}`}>
              <span className="pulsing-dot" />
              {isLive ? 'Live Deployment' : 'Architecture & Specs'}
            </span>
            {project.badge && (
              <span className="project-category-pill">{project.badge}</span>
            )}
          </div>
          <button type="button" className="project-modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="project-modal-hero">
          <h2 className="project-modal-title">{project.title}</h2>
          <p className="project-modal-shortdesc">{project.shortDesc}</p>
          <div className="project-meta-strip">
            {project.role && (
              <div className="project-meta-pill">
                <Briefcase size={14} />
                <span><strong>Role:</strong> {project.role}</span>
              </div>
            )}
            <div className="project-meta-pill">
              <Layers size={14} />
              <span><strong>Category:</strong> {project.category.toUpperCase()}</span>
            </div>
            {isLive && (
              <div className="project-meta-pill highlight">
                <Sparkles size={14} />
                <span>Live in Production</span>
              </div>
            )}
          </div>

          <div className="project-action-buttons">
            {project.liveUrl ? (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-live-launch"
              >
                <span>Launch Live Site</span>
                <ExternalLink size={16} />
              </a>
            ) : (
              <div className="btn-no-live-notice">
                <span>Enterprise Architecture Repository</span>
              </div>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-github-view"
              >
                <GithubIcon size={16} />
                <span>GitHub Repo</span>
              </a>
            )}
            <button 
              type="button" 
              className="btn-discuss-project"
              onClick={() => {
                onClose();
                if (onOpenContact) onOpenContact();
              }}
            >
              <span>Hire For Project</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <div className="project-modal-content">
          {project.overview && (
            <div className="modal-info-block">
              <div className="block-header">
                <div className="block-icon"><Sparkles size={18} /></div>
                <h3>Executive Summary & Overview</h3>
              </div>
              <p className="block-text">{project.overview}</p>
            </div>
          )}

          <div className="modal-info-block">
            <div className="block-header">
              <div className="block-icon"><Cpu size={18} /></div>
              <h3>Technical Architecture & Engineering Stack</h3>
            </div>
            {project.architecture && (
              <p className="block-text" style={{ marginBottom: '1rem' }}>
                {project.architecture}
              </p>
            )}
            <div className="project-stack-tags">
              {project.tags && project.tags.map((tag, idx) => (
                <span key={idx} className="stack-tag-item">
                  <span className="stack-tag-dot" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.features && project.features.length > 0 && (
            <div className="modal-info-block">
              <div className="block-header">
                <div className="block-icon"><CheckCircle2 size={18} /></div>
                <h3>Key Features & Working Functionality</h3>
              </div>
              <ul className="project-features-list">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} className="feature-list-item">
                    <span className="feature-bullet-check">✓</span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.strategy && (
            <div className="modal-info-block highlight-block">
              <div className="block-header">
                <div className="block-icon"><ShieldCheck size={18} /></div>
                <h3>Working Strategy, Security & Optimization</h3>
              </div>
              <p className="block-text">{project.strategy}</p>
            </div>
          )}

        </div>
        <div className="project-modal-footer">
          <div className="footer-ceo-note">
            <span className="ceo-note-title">Interested in hiring Jasir?</span>
            <span className="ceo-note-sub">Available for Junior MERN Engineer roles & custom Freelance deliveries.</span>
          </div>
          <button 
            type="button" 
            className="footer-hire-btn"
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
          >
            Hire Jasir Ali Khan
          </button>
        </div>

      </div>
    </div>
  );
}
