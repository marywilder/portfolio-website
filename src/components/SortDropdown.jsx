import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import caretIcon from '../assets/^.svg';

const OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
];

export default function SortDropdown({ sortOrder, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPos, setMenuPos] = useState(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const open = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setMenuPos({ top: rect.bottom + 8, right: window.innerWidth - rect.right });
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (
        buttonRef.current && !buttonRef.current.contains(e.target) &&
        menuRef.current && !menuRef.current.contains(e.target)
      ) setIsOpen(false);
    };
    const handleKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    const handleScroll = () => setIsOpen(false);
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  return (
    <div className="sort-dropdown">
      <button
        type="button"
        ref={buttonRef}
        className="sort-dropdown__button"
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        Sort by
        <img
          src={caretIcon}
          alt=""
          className={`sort-dropdown__caret${isOpen ? ' sort-dropdown__caret--up' : ''}`}
        />
      </button>

      {isOpen && menuPos && createPortal(
        <ul
          ref={menuRef}
          className="sort-dropdown__menu"
          role="listbox"
          style={{ top: menuPos.top, right: menuPos.right }}
        >
          {OPTIONS.map(opt => (
            <li key={opt.value}>
              <button
                type="button"
                role="option"
                aria-selected={sortOrder === opt.value}
                className={`sort-dropdown__item${sortOrder === opt.value ? ' sort-dropdown__item--active' : ''}`}
                onClick={() => { onSortChange(opt.value); setIsOpen(false); }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>,
        document.body
      )}
    </div>
  );
}
