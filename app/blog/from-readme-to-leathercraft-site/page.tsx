'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function FromReadmeToLeathercraftSitePost() {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`flex flex-col justify-start items-center min-h-screen gap-8 px-6 pt-36 pb-24 transition-all duration-300 ${
        isOpen ? 'ml-64' : 'ml-20'
      }`}
    >
      <div className="max-w-4xl w-full space-y-6">
        <div className="space-y-2">
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="text-5xl font-bold text-primary">From README to Leathercraft Website</h1>
          <p className="text-lg text-base-content/70">
            A build plan for turning my leather-info-repo into a full website while keeping the same Next.js framework as this blog.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Why This Project Exists</h2>
            <p className="text-lg leading-relaxed">
              I started leather-info-repo as a personal reference so I could keep practical shop knowledge in one place: leather sizing
              charts, leather type notes, store links, pattern resources, and a captain&apos;s log for in-progress work. It began as a
              README, but the content has grown into something I use as an actual working system.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              At this point, the limitation is no longer content. The limitation is format. A long README is easy to start and hard to
              scale. Navigation, filtering, and day-to-day updates become slower than they should be.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What Is Already There</h2>
            <p className="text-lg leading-relaxed mb-3">
              The repository already contains strong raw material for a real site:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Leather sizing chart data by ounce and common project types</li>
              <li>Leather type breakdowns (full grain, top grain, split, genuine, bonded)</li>
              <li>Vendor and tool reference lists I actually use</li>
              <li>Pattern resources and long-form creator lists</li>
              <li>A dated captain&apos;s log with project updates, mistakes, and lessons learned</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              The hard work has already been done: collecting and curating useful information over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Goal: Keep the Same Framework</h2>
            <p className="text-lg leading-relaxed">
              I want this leathercraft project to stay in the same framework as this blog: Next.js with the App Router. That gives me a
              consistent stack, shared UI patterns, and one mental model for building pages. Instead of learning a separate platform,
              I can focus on modeling my content better.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Migration Strategy</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Keep the README as the source of truth during phase one</li>
              <li>Extract each major section into structured JSON or Markdown data files</li>
              <li>Create dedicated pages for charts, references, and captain&apos;s log entries</li>
              <li>Add search and filters where discovery is painful today</li>
              <li>Move to fully structured content updates once page coverage is complete</li>
            </ol>
            <p className="text-lg leading-relaxed mt-4">
              This avoids a risky rewrite and lets me ship improvements in slices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Proposed Site Structure</h2>
            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`app/
  leather/
    page.tsx                // Landing page
    charts/page.tsx         // Leather sizing charts
    materials/page.tsx      // Leather type reference
    stores/page.tsx         // Supplier links and notes
    patterns/page.tsx       // Pattern resources
    creators/page.tsx       // YouTube and inspiration list
    captains-log/page.tsx   // Log index
    captains-log/[slug]/page.tsx // Individual entries

content/
  leather/
    charts.json
    materials.json
    stores.json
    patterns.json
    creators.json
    captains-log/
      2025-07-23.md
      2025-07-24.md`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Model Sketch</h2>
            <p className="text-lg leading-relaxed mb-3">
              A small amount of structure unlocks better rendering and filtering immediately.
            </p>
            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`// charts.json
[
  {
    "ounce": "5 to 6 oz",
    "inches": "5/64 to 3/32 in",
    "millimeters": "2.0 to 2.4 mm",
    "commonProjects": ["phone and tablet cases", "book covers", "light moccasins"]
  }
]

// captains-log frontmatter example
---
title: "Knife Sheath Iteration"
date: "2025-07-23"
tags: ["commission", "knife sheath", "design constraints"]
status: "in-progress"
---

Today I revised two sheath concepts and documented what failed and why.`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">MVP Roadmap</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>MVP 1: Render charts and leather types as dedicated pages</li>
              <li>MVP 2: Convert stores, patterns, and creator lists into searchable cards</li>
              <li>MVP 3: Turn captain&apos;s log into dated entries with tags and archives</li>
              <li>MVP 4: Add project dashboard widgets (active commission, next build, blocked tasks)</li>
              <li>MVP 5: Deploy and iterate based on real usage in the workshop</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why This Is Worth Doing</h2>
            <p className="text-lg leading-relaxed">
              The point is not just to make something that looks nicer than a README. The point is to build a system that helps me make
              better leather projects over time. If it is faster to find sizing guidance, easier to review old mistakes, and simpler to
              track active builds, then the site is doing real work.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              This project started as notes. The next step is turning those notes into a tool I can actually run my craft with.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Keeping the same Next.js framework lowers the migration cost and keeps momentum high. I can port content section by
              section, publish early, and keep using the system while it grows. This is exactly the kind of project that starts simple,
              gets used daily, and eventually becomes much bigger than the original plan.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}