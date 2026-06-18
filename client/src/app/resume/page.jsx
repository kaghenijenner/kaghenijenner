'use client';
import dynamic from 'next/dynamic';

const Resume = dynamic(() => import('../../views/Resume'), { ssr: false });

export default function Page() {
  return <Resume />;
}
