import React, { useState } from 'react'
import caretIcon from '../assets/^.svg';

const makeSlideStyle = (i, activeIndex, total) => {
  let offset = i - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  const absOffset = Math.abs(offset);
  return {
    top: '50%',
    left: `calc(50% + ${offset * 38}%)`,
    transform: `translateX(-50%) translateY(-50%) scale(${absOffset === 0 ? 1 : 0.50})`,
    opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.20 : 0,
    zIndex: absOffset === 0 ? 3 : 2,
    pointerEvents: absOffset === 0 ? 'auto' : 'none',
    transition: 'left 400ms ease, transform 400ms ease, opacity 400ms ease',
  };
};

export default function Carousel({ images, altPrefix, onSlideClick }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const prev = () => setIndex(i => (i - 1 + total) % total);
  const next = () => setIndex(i => (i + 1) % total);
  const caretStyle = { '--caret-icon': `url(${caretIcon})` };

  return (
    <>
      <div className="carousel">
        <button className="carousel__btn" onClick={prev} aria-label="Previous image">
          <span className="carousel__arrow carousel__arrow--prev" style={caretStyle} aria-hidden="true"></span>
        </button>
        <div className="carousel__viewport">
          {images.map((img, i) => (
            img.type === 'video' ? (
              <video
                key={i}
                src={img.src}
                className="carousel__slide"
                style={{ ...makeSlideStyle(i, index, total), ...(img.imgStyle || {}) }}
                aria-label={img.alt || `${altPrefix} ${i + 1}`}
                onClick={() => onSlideClick && onSlideClick(img.src, img.alt || `${altPrefix} ${i + 1}`, 'video')}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                key={i}
                src={img.src || img}
                className="carousel__slide"
                style={{ ...makeSlideStyle(i, index, total), ...(img.imgStyle || {}) }}
                alt={img.alt || `${altPrefix} ${i + 1}`}
                onClick={() => onSlideClick && onSlideClick(img.src || img, img.alt || `${altPrefix} ${i + 1}`, 'image')}
              />
            )
          ))}
        </div>
        <button className="carousel__btn" onClick={next} aria-label="Next image">
          <span className="carousel__arrow carousel__arrow--next" style={caretStyle} aria-hidden="true"></span>
        </button>
      </div>
      <div className="carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
