import React, { useEffect, useMemo, useState } from 'react';
import { PROJECTS } from '../data/projects';
import ProjectFilterBar from './ProjectFilterBar';
import ProjectCard from './ProjectCard';
import Lightbox from './Lightbox';

function useIsTwoColumn() {
  const [isTwoColumn, setIsTwoColumn] = useState(() => window.innerWidth > 770);

  useEffect(() => {
    const onResize = () => setIsTwoColumn(window.innerWidth > 770);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isTwoColumn;
}

export default function Portfolio() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');
  const [lightbox, setLightbox] = useState(null);
  const isTwoColumn = useIsTwoColumn();

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const openLightbox = (src, alt, type = 'video') => setLightbox({ src, alt, type });
  const closeLightbox = () => setLightbox(null);

  const projects = useMemo(() => {
    const visible = PROJECTS.filter(p => !p.hidden);
    const filtered = selectedTags.length
      ? visible.filter(p => p.tags.some(t => selectedTags.includes(t)))
      : visible;

    return [...filtered].sort((a, b) =>
      sortOrder === 'newest' ? a.order - b.order : b.order - a.order
    );
  }, [selectedTags, sortOrder]);

  const leftColumn = isTwoColumn ? projects.filter((_, i) => i % 2 === 0) : projects;
  const rightColumn = isTwoColumn ? projects.filter((_, i) => i % 2 === 1) : [];

  return (
    <section className="portfolio-page">
      <h1 className="portfolio-title">work</h1>

      <ProjectFilterBar
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      <div className="project-grid">
        <div className="project-grid__column">
          {leftColumn.map(project => (
            <ProjectCard key={project.id} project={project} onOpenLightbox={openLightbox} />
          ))}
        </div>
        {isTwoColumn && (
          <div className="project-grid__column">
            {rightColumn.map(project => (
              <ProjectCard key={project.id} project={project} onOpenLightbox={openLightbox} />
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} type={lightbox.type} onClose={closeLightbox} />
      )}
    </section>
  );
}
