'use client';

import dynamic from 'next/dynamic';

const SplineRobot = dynamic(() => import('./SplineRobot'), {
  ssr: false,
});

export default function SplineRobotLazy() {
  return <SplineRobot />;
}
