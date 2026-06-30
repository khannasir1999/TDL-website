'use client';

import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineRobot() {
  const wrapRef = useRef(null);
  const splineRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const syncSpline = (isVisible) => {
      const spline = splineRef.current;
      if (!spline) return;

      if (isVisible) {
        spline.setGlobalEvents(true);
        spline.play();
      } else {
        spline.setGlobalEvents(false);
        spline.stop();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => syncSpline(entry.isIntersecting),
      { rootMargin: '50px 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="montek-banner__spline">
      <Spline
        scene="https://prod.spline.design/AqtlWJlNbO-ZMkvz/scene.splinecode"
        renderOnDemand
        onLoad={(spline) => {
          splineRef.current = spline;
          spline.setGlobalEvents(true);
        }}
      />
    </div>
  );
}
