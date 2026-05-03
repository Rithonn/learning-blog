'use client';

import Link from 'next/link';
import { useSidebar } from './context/SidebarContext';

export default function Home() {
  const { isOpen } = useSidebar();

  return (
      <div className={`flex flex-col justify-start items-start min-h-screen gap-6 pl-8 pt-75 transition-all duration-300 ${
        isOpen ? 'ml-64' : 'ml-20'
      }`}>
      <h1 className="text-7xl font-bold">Hello World</h1>
      <Link href="/blog" className="btn btn-primary btn-xl">
        Explore Posts
      </Link>
    </div>
  );
}