import React from 'react';
import Carousel from './Carousel';
import { TAG_COLORS, ToolIcons } from '../data/projects';

function ProjectMedia({ media, onOpenLightbox }) {
  if (!media) return null;

  if (media.type === 'image') {
    return (
      <div className="project-card__media project-card__media--image">
        <img src={media.src} alt={media.alt} />
      </div>
    );
  }

  if (media.type === 'video') {
    return (
      <div className={`project-card__media project-card__media--video${media.variant === 'phone' ? ' project-card__media--video-phone' : ''}`}>
        <video src={media.src} aria-label={media.alt} autoPlay loop muted playsInline />
      </div>
    );
  }

  if (media.type === 'phone-video') {
    return (
      <div className="project-card__media project-card__media--phone">
        <div className="phone-frame">
          <img className="phone-frame__png" src={media.frame} alt="" aria-hidden="true" />
          <video className="phone-frame__video" src={media.src} aria-label={media.alt} autoPlay loop muted playsInline />
        </div>
      </div>
    );
  }

  if (media.type === 'row') {
    return (
      <div className="project-card__media project-card__media--row">
        {media.items.map(item => (
          <img key={item.src} src={item.src} alt={item.alt} />
        ))}
      </div>
    );
  }

  if (media.type === 'carousel') {
    // carousel lightbox deactivated for now, revisit later
    return (
      <div className="project-card__media project-card__media--carousel">
        <Carousel images={media.images} altPrefix={media.altPrefix} />
      </div>
    );
  }

  return null;
}

export default function ProjectCard({ project, onOpenLightbox }) {
  const isCarousel = project.media?.type === 'carousel';
  const singleLink = project.links && project.links.length === 1 ? project.links[0] : null;
  const isClickable = !isCarousel && (project.minimal || singleLink);

  const handleCardClick = () => {
    if (project.minimal) {
      onOpenLightbox(project.media.src, project.media.alt, 'video');
    } else if (singleLink) {
      window.open(singleLink.href, '_blank', 'noopener,noreferrer');
    }
  };

  const cardClassName = `project-card${isCarousel ? ' project-card--carousel' : ''}${isClickable ? ' project-card--clickable' : ''}`;

  return (
    <article
      className={cardClassName}
      onClick={isClickable ? handleCardClick : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => { if (e.key === 'Enter') handleCardClick(); } : undefined}
    >
      <div className="project-card__header">
        {!project.minimal && <h2>{project.title}</h2>}
        {!project.minimal && project.subtitle && <h5>{project.subtitle}</h5>}

        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="project-card__tag"
              style={{ '--tag-color': TAG_COLORS[tag] }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ProjectMedia media={project.media} onOpenLightbox={onOpenLightbox} />

      <div className="project-card__body">
        {!project.minimal && project.description}

        {project.tools && <ToolIcons tools={project.tools} />}

        {!project.minimal && project.links && project.links.length > 0 && (
          <div className={`project-card__links${project.links.length > 1 ? ' project-card__links--persist' : ''}`}>
            {project.links.map(link => (
              <a
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
                onClick={(e) => e.stopPropagation()}
              >
                <button>{link.label}</button>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
