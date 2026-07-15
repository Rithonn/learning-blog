'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function Blog() {
  const { isOpen } = useSidebar();
  const publishedDate = 'July 15, 2026';

  return (
    <div className={`flex flex-col justify-start items-center min-h-screen gap-6 px-6 pt-36 pb-24 transition-all duration-300 ${
      isOpen ? 'ml-64' : 'ml-20'
    }`}>
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Blog Page</h1>
          <p className="text-lg text-base-content/70">
            Explore the latest post below.
          </p>
        </div>
        <Link
          href="/blog/vertical-slice-architecture"
          className="block w-full rounded-xl border border-base-300 bg-base-200 p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-primary">Vertical Slice Architecture</h2>
              <p className="text-base text-base-content/70">
                A concise exploratory post on what vertical slice architecture is, why teams use it, and the tradeoffs that come with it.
              </p>
            </div>
            <time className="shrink-0 text-sm text-base-content/60">{publishedDate}</time>
          </div>
        </Link>
      </div>
    </div>
  );
}