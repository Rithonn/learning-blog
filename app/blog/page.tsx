'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

enum BlogTag {
  ArchitectureDesign = 'architecture-design',
  ProjectIdeas = 'project-ideas',
  OngoingProjects = 'ongoing-projects',
  Research = 'research',
}

type BlogPost = {
  title: string;
  href: string;
  summary: string;
  publishedDate: string;
  tags: BlogTag[];
};

const BLOG_TAG_LABELS: Record<BlogTag, string> = {
  [BlogTag.ArchitectureDesign]: 'Architecture/Design',
  [BlogTag.ProjectIdeas]: 'Project Ideas',
  [BlogTag.OngoingProjects]: 'Ongoing Projects',
  [BlogTag.Research]: 'Research',
};

export default function Blog() {
  const { isOpen } = useSidebar();
  const [searchQuery, setSearchQuery] = useState('');
  const posts: BlogPost[] = [
    {
      title: 'Comparing Common Architecture Patterns',
      href: '/blog/comparing-architecture-patterns',
      summary: 'A practical comparison of common architecture patterns with a quick-scan matrix, detailed differences, and examples for each approach.',
      publishedDate: 'July 20, 2026',
      tags: [BlogTag.ArchitectureDesign, BlogTag.Research],
    },
    {
      title: 'Hexagonal Architecture',
      href: '/blog/hexagonal-architecture',
      summary: 'A practical guide to hexagonal architecture, how ports and adapters work, and when this style helps isolate core application logic.',
      publishedDate: 'July 20, 2026',
      tags: [BlogTag.ArchitectureDesign, BlogTag.Research],
    },
    {
      title: 'Clean Architecture',
      href: '/blog/clean-architecture',
      summary: 'A practical guide to clean architecture, how the dependency rule works, and when the added structure is worth it.',
      publishedDate: 'July 20, 2026',
      tags: [BlogTag.ArchitectureDesign, BlogTag.Research],
    },
    {
      title: 'The Options Pattern',
      href: '/blog/options-pattern-csharp',
      summary: 'A practical guide to configuring, validating, and consuming strongly typed options in .NET using IOptions, IOptionsSnapshot, and IOptionsMonitor.',
      publishedDate: 'July 17, 2026',
      tags: [BlogTag.ArchitectureDesign, BlogTag.Research],
    },
    {
      title: 'Building a Habit Tracker in Public',
      href: '/blog/habit-tracker-in-public',
      summary: 'A dev-log style update on the habit tracker: what I have built so far, why I started with the frontend, how I used an unfamiliar stack to learn, and what I still need to finish.',
      publishedDate: 'July 16, 2026',
      tags: [BlogTag.OngoingProjects],
    },
    {
      title: 'Developer Quiz VS Code Extension',
      href: '/blog/developer-quiz-vscode-extension',
      summary: 'An architecture and workflow concept for a VS Code extension that asks doc-grounded quiz questions and evaluates answers with AI.',
      publishedDate: 'July 16, 2026',
      tags: [BlogTag.ProjectIdeas, BlogTag.Research],
    },
    {
      title: 'Vertical Slice Architecture',
      href: '/blog/vertical-slice-architecture',
      summary: 'A concise exploratory post on what vertical slice architecture is, why teams use it, and the tradeoffs that come with it.',
      publishedDate: 'July 15, 2026',
      tags: [BlogTag.ArchitectureDesign, BlogTag.Research],
    },
    {
      title: 'Onion Architecture',
      href: '/blog/onion-architecture',
      summary: 'A beginner-friendly guide to onion architecture, its dependency direction, and where it fits best.',
      publishedDate: 'July 15, 2026',
      tags: [BlogTag.ArchitectureDesign, BlogTag.Research],
    },
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [
      post.title,
      post.summary,
      ...post.tags.map((tag) => BLOG_TAG_LABELS[tag]),
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  const [mostRecentPost, ...otherPosts] = filteredPosts;

  return (
    <div className={`flex flex-col justify-start items-center min-h-screen gap-6 px-6 pt-36 pb-24 transition-all duration-300 ${
      isOpen ? 'ml-64' : 'ml-20'
    }`}>
      <div className="w-full max-w-5xl space-y-8">
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-stretch">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Blog Page</h1>
            <p className="text-lg text-base-content/70">
              Explore the latest posts below.
            </p>
          </div>

          <div className="flex h-full flex-col justify-center">
            <input
              id="blog-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              aria-label="Search blog posts"
              placeholder="Search by title, summary, or topic"
              className="block w-full rounded-lg border border-primary bg-base-100 px-4 py-4 text-base outline outline-2 outline-primary/30 transition focus:outline-primary"
            />
          </div>
        </section>

        {mostRecentPost ? (
          <>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-base-content/80">
                {normalizedQuery ? 'Top Matching Post' : 'Most Recent Post'}
              </h2>
              <Link
                href={mostRecentPost.href}
                className="block w-full rounded-xl border border-primary/40 bg-base-200 p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-primary">{mostRecentPost.title}</h3>
                    <p className="text-base text-base-content/70">{mostRecentPost.summary}</p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      {mostRecentPost.tags.slice(0, 3).map((tag) => (
                        <span
                          key={`${mostRecentPost.href}-${tag}`}
                          className="inline-flex items-center rounded-md border border-base-300 bg-base-100 px-2.5 py-1 text-xs font-medium text-base-content/80"
                        >
                          {BLOG_TAG_LABELS[tag]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <time className="shrink-0 text-sm text-base-content/60">{mostRecentPost.publishedDate}</time>
                </div>
              </Link>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-base-content/80">
                {normalizedQuery ? 'More Matching Posts' : 'More Posts'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="block h-full rounded-xl border border-base-300 bg-base-200 p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                  >
                    <div className="flex h-full flex-col justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-primary">{post.title}</h3>
                        <p className="text-base text-base-content/70">{post.summary}</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={`${post.href}-${tag}`}
                              className="inline-flex items-center rounded-md border border-base-300 bg-base-100 px-2.5 py-1 text-xs font-medium text-base-content/80"
                            >
                              {BLOG_TAG_LABELS[tag]}
                            </span>
                          ))}
                        </div>
                        <time className="block text-sm text-base-content/60">{post.publishedDate}</time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="rounded-xl border border-dashed border-base-300 bg-base-200 p-8 text-center">
            <h2 className="text-2xl font-semibold text-base-content">No matching posts</h2>
            <p className="mt-2 text-base text-base-content/70">
              Try a different title, keyword, or topic.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}