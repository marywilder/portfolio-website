import React, { useState } from 'react';
import { TAGS, TAG_COLORS } from '../data/projects';
import SortDropdown from './SortDropdown';
import filterFunnel from '../assets/filter-funnel.svg';

export default function ProjectFilterBar({ selectedTags, onToggleTag, sortOrder, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-bar-wrapper">
      <button
        type="button"
        className={`filter-toggle${isOpen ? ' filter-toggle--active' : ''}`}
        onClick={() => setIsOpen(o => !o)}
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
