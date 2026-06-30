'use client';

import { useRef } from 'react';
import Image from 'next/image';
import SplineRobotLazy from '../SplineRobotLazy';
import './RobotBanner.css';
import defaultDownIcon from '@/public/assets/img/robotbanner/down.png';

export default function RobotBanner({
  backgroundImage = '/images/montek-banner-bg.jpg',
  title = <>Creative <br /> Space</>,
  textLeft = <>Design and Development Agency  <br /> for Digital-First Brands</>,
  textRight = <>Enhancing potential and <br /> driving prosperity.</>,
  scrollTarget,
  downIcon = defaultDownIcon,
}) {
  const bannerRef = useRef(null);

  const handleScroll = () => {
    const target =
      (scrollTarget && document.querySelector(scrollTarget)) ||
      bannerRef.current?.nextElementSibling;

    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      ref={bannerRef}
      className="montek-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="montek-banner__robot">
        <SplineRobotLazy />
      </div>

      <div className="montek-banner__container">
        <div className="montek-banner__content">
          <div className="montek-banner__content-inner">
            <h1 className="montek-banner__heading">{title}</h1>

            <div className="montek-banner__lower-box">
              <div className="montek-banner__text">{textLeft}</div>
              <div className="montek-banner__text-two">{textRight}</div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="montek-banner__down-box"
          onClick={handleScroll}
          aria-label="Scroll down"
        >
          <Image src={downIcon} alt="" width={125} height={125} />
        </button>
      </div>
    </section>
  );
}