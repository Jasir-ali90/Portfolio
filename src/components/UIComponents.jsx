import React, { useEffect } from 'react';
import { X } from 'lucide-react';

// 1. REUSABLE BUTTON
export function Button({ children, onClick, variant = 'primary', type = 'button', icon: Icon }) {
  const btnClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  return (
    <button type={type} onClick={onClick} className={`btn ${btnClass}`}>
      {Icon && <Icon size={16} />}
      <span>{children}</span>
    </button>
  );
}

// 2. REUSABLE CARD
export function Card({ title, desc, children, icon: Icon, badge, onClick, className = '' }) {
  return (
    <div 
      className={`card project-card ${onClick ? 'interactive-card' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(e); } : undefined}
    >
      <div>
        <div className="card-header">
          {Icon && <div className="card-icon"><Icon size={20} /></div>}
          {badge && <span className="featured-pill">{badge}</span>}
        </div>
        {title && <h3 className="card-title">{title}</h3>}
        {desc && <p className="card-desc">{desc}</p>}
      </div>
      {children}
    </div>
  );
}


// 3. REUSABLE TAG
export function Tag({ text, highlight }) {
  return (
    <span className={`tag ${highlight ? 'highlight' : ''}`}>
      {text}
    </span>
  );
}

// 4. REUSABLE MODAL (Popup)
export function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button className="modal-close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

// 5. REUSABLE INPUT & TEXTAREA
export function Input({ label, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea({ label, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea className="form-control" {...props} />
    </div>
  );
}