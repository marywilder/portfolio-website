import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Lightbox({ src, alt, type = 'video', onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!src) return null;

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      {type === 'video' ? (
        <video
          src={src}
          aria-label={alt}
          className="lightbox-video"
          onClick={(e) => e.stopPropagation()}
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="lightbox-image"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>,
    document.body
  );
}
