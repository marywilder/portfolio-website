import React, { useLayoutEffect, useRef, useState } from 'react';
import { TAGS, TAG_COLORS } from '../data/projects';
import SortDropdown from './SortDropdown';
import filterFunnel from '../assets/filter-funnel.svg';

export default function ProjectFilterBar({ selectedTags, onToggleTag, sortOrder, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const wrapperRef = useRef(null);
  const toggleRef = useRef(null);
  const [centerOffset, setCenterOffset] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!wrapperRef.current || !toggleRef.current) return;
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const toggleWidth = toggleRef.current.offsetWidth;
      setCenterOffset((wrapperWidth - toggleWidth) / 2);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const toggleTransform = `translateX(${isOpen ? 0 : centerOffset}px) scale(${isHovered ? 1.08 : 1})`;

  return (
    <div className="filter-bar-wrapper" ref={wrapperRef}>
      <button
        type="button"
        ref={toggleRef}
        className={`filter-toggle${isOpen ? ' filter-toggle--active' : ''}`}
        style={{ transform: toggleTransform }}
        onClick={() => setIsOpen(o => !o)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-expanded={isOpen}
        aria-label="Toggle filters"
      >
        <img src={filterFunnel} alt="" className="filter-toggle__icon" />
      </button>

      <div className={`filter-bar-collapsible${isOpen ? ' filter-bar-collapsible--open' : ''}`}>
        <div className="filter-bar-collapsible__inner">
          <div className="filter-bar">
            {TAGS.map(tag => {
              const active = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  className={`filter-chip${active ? ' filter-chip--active' : ''}`}
                  style={{ '--chip-color': TAG_COLORS[tag] }}
                  onClick={() => onToggleTag(tag)}
                  aria-pressed={active}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          <SortDropdown sortOrder={sortOrder} onSortChange={onSortChange} />
        </div>
      </div>
    </div>
  );
}
