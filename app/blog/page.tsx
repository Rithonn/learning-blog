'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function Blog() {
  const { isOpen } = useSidebar();
  const posts = [
    {
      title: 'Vertical Slice Architecture',
      href: '/blog/vertical-slice-architecture',
      summary: 'A concise exploratory post on what vertical slice architecture is, why teams use it, and the tradeoffs that come with it.',
      publishedDate: 'July 15, 2026',
    },
    {
      title: 'Onion Architecture',
      href: '/blog/onion-architecture',
      summary: 'A beginner-friendly guide to onion architecture, its dependency direction, and where it fits best.',
      publishedDate: 'July 15, 2026',
    },
  ];

  return (
    <div className={`flex flex-col justify-start items-center min-h-screen gap-6 px-6 pt-36 pb-24 transition-all duration-300 ${
      isOpen ? 'ml-64' : 'ml-20'
    }`}>
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Blog Page</h1>
          <p className="text-lg text-base-content/70">
            Explore the latest posts below.
          </p>
        </div>
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="block w-full rounded-xl border border-base-300 bg-base-200 p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-primary">{post.title}</h2>
                <p className="text-base text-base-content/70">{post.summary}</p>
              </div>
              <time className="shrink-0 text-sm text-base-content/60">{post.publishedDate}</time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}