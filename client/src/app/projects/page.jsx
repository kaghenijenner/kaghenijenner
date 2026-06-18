'use client';
import dynamic from 'next/dynamic';

const Project = dynamic(() => import('../../components/Project'), { ssr: false });

export default function Page() {
  return <Project />;
}
