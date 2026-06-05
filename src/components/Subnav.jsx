import React, { useRef, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const ROUTES = ['/productdesign', '/webdev', '/illustration'];
const COLORS = ['var(--dark-blue)', 'var(--dark-pink)', 'var(--dark-orange)'];

let cache = { left: 0, width: 0, color: 'transparent', opacity: 0, ready: false };

export default function Subnav() {
  const location = useLocation();
  const trackRef = useRef(null);
  const linkRefs = [useRef(null), useRef(null), useRef(null)];
  const reenableRef = useRef(null);

  const activeIndex = ROUTES.findIndex(r => location.pathname.includes(r));

  // On remount, initialize with cached old position + transition ENABLED so the
  // navigation effect can animate from old → new position correctly
  const [indicator, setIndicator] = useState({
    left: cache.left,
    width: cache.width,
    color: cache.color,
    opacity: cache.opacity,
    transition: cache.ready,
  });

  const measure = () => {
    const el = linkRefs[activeIndex]?.current;
    if (!el || activeIndex < 0) return null;
    return { left: el.offsetLeft, width: el.offsetWidth };
  };

  const snapTo = (p, color) => {
    if (reenableRef.current) cancelAnimationFrame(reenableRef.current);
    setIndicator({ left: p.left, width: p.width, color, opacity: 1, transition: false });
    requestAnimationFrame(() => {
      reenableRef.current = requestAnimationFrame(() =>
        setIndicator(prev => ({ ...prev, transition: true }))
      );
    });
  };

  // Navigation — old position is already painted with transition:true, so this
  // state update slides the indicator from old → new in the correct direction
  useEffect(() => {
    const p = measure();
    if (!p) return;
    const color = COLORS[activeIndex];

    if (!cache.ready) {
      snapTo(p, color);
    } else {
      setIndicator({ left: p.left, width: p.width, color, opacity: 1, transition: true });
    }
    cache = { left: p.left, width: p.width, color, opacity: 1, ready: true };
  }, [activeIndex]);

  // Resize — skip the first fire (ResizeObserver always fires once on observe())
  // so it doesn't kill the navigation animation on mount
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let initialFire = true;
    const ro = new ResizeObserver(() => {
      if (initialFire) { initialFire = false; return; }
      const p = measure();
      if (!p || !cache.ready) return;
      cache.left = p.left;
      cache.width = p.width;
      snapTo(p, cache.color);
    });
    ro.observe(track);
    return () => ro.disconnect();
  }, [activeIndex]);

  return (
    <div className="sub-nav">
      <div className="sub-nav__track" ref={trackRef}>
        <div
          className="sub-nav__indicator"
          style={{
            left: indicator.left,
            width: indicator.width,
            background: indicator.color,
            opacity: indicator.opacity,
            transition: indicator.transition ? undefined : 'none',
          }}
        />
        <div className="product-link-wrapper" ref={linkRefs[0]}>
          <NavLink to='/productdesign' className="product-link" onClick={() => window.scrollTo(0, 0)}>product design</NavLink>
        </div>
        <span className="subnav-divider">✿</span>
        <div className="web-dev-link-wrapper" ref={linkRefs[1]}>
          <NavLink to='/webdev' className="web-dev-link" onClick={() => window.scrollTo(0, 0)}>web dev</NavLink>
        </div>
        <span className="subnav-divider">✿</span>
        <div className="illustration-link-wrapper" ref={linkRefs[2]}>
          <NavLink to='/illustration' className="illustration-link" onClick={() => window.scrollTo(0, 0)}>graphic design</NavLink>
        </div>
      </div>
    </div>
  )
}
