'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function HabitTrackerInPublicPost() {
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
          <h1 className="text-5xl font-bold text-primary">
            Building a Habit Tracker in Public
          </h1>
          <p className="text-lg text-base-content/70">
            A practical look at a habit tracker being built in phases: validate the product experience early, keep the architecture intentional, and move toward production without a rewrite.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              Most side projects start with a simple idea and quickly run into a familiar problem: the architecture grows faster than the product.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              This Habit Tracker project is an attempt to do the opposite.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              The goal has been clear from day one: build a practical, daily-use habit app with journaling, monthly visibility, and a clean path to production. But instead of overbuilding early, the project is intentionally staged so each layer matures at the right time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What the project is</h2>
            <p className="text-lg leading-relaxed mb-3">
              At its core, this is a full-stack Habit Tracker designed around daily use rather than demo-only behavior.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Frontend: Angular application focused on habit completion and daily journaling</li>
              <li>Backend: Go API scaffold designed for authenticated, database-backed persistence</li>
              <li>Repo strategy: decoupled frontend and backend in a monorepo so both can evolve independently</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4 mb-3">The product experience is centered around:</p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>selecting a month</li>
              <li>checking habits per day</li>
              <li>writing short daily journal entries</li>
              <li>seeing progress over time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why the build started frontend-first</h2>
            <p className="text-lg leading-relaxed mb-3">
              One of the biggest decisions was to prioritize a frontend-first workflow before completing full backend persistence.
            </p>
            <p className="text-lg leading-relaxed mb-3">That choice delivered three immediate benefits:</p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Fast product iteration: the UX for habits and journaling could be tested immediately without waiting on full API implementation</li>
              <li>Zero-cost momentum: local browser persistence kept development moving without deployment or infrastructure overhead</li>
              <li>Stable UI contract early: by building screens and state models first, the API can later map to proven client needs instead of guessed requirements</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              In short: validate the user experience first, then harden the backend around it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Where the project stands today</h2>
            <p className="text-lg leading-relaxed mb-3">
              The current state is best described as: strong product shell, backend seams in place, core integration still ahead.
            </p>
            <h3 className="text-xl font-semibold mb-3">What is implemented now</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4 mb-5">
              <li>Vertical-slice frontend architecture is in place</li>
              <li>Dashboard flow is functional</li>
              <li>Month-based habit matrix is interactive</li>
              <li>Daily journaling UX is implemented</li>
              <li>Local persistence keeps data across browser restarts</li>
              <li>Health check path from frontend to backend exists</li>
              <li>Backend routes, middleware, and feature boundaries are scaffolded</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">What is intentionally not finished yet</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Backend business repositories still return not-implemented placeholders</li>
              <li>Full auth lifecycle is not wired end-to-end (register/login/me token flow)</li>
              <li>Frontend still relies mostly on local state as source of truth</li>
              <li>Production hardening items remain (smoke tests, observability, rate limiting, deployment settings)</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">This is not accidental technical debt. It is staged delivery.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Architectural decisions already made</h2>
            <p className="text-lg leading-relaxed mb-4">
              Several important foundation decisions are already locked in.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Vertical slice on the frontend</h3>
                <p className="text-lg leading-relaxed">
                  Instead of organizing by file type globally, features are grouped by business area such as auth, dashboard, and history. This keeps each slice coherent and reduces cross-folder overhead as the app grows.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2. Thin, explicit Go backend layers</h3>
                <p className="text-lg leading-relaxed">
                  The API uses clear handler to service to repository boundaries. That makes current placeholders obvious while giving a clean seam for swapping in real Postgres-backed repositories.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3. Middleware and boundaries early</h3>
                <p className="text-lg leading-relaxed">
                  Even before full data implementation, the backend includes structured logging, request validation patterns, auth middleware, and protected route grouping. This avoids a painful retrofit later.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4. Local persistence as a transition strategy</h3>
                <p className="text-lg leading-relaxed">
                  Using local browser storage now is a deliberate bridge, not the end state. It keeps user workflows intact while backend integration is brought online in phases.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">5. SSR compatibility decisions for charting and runtime behavior</h3>
                <p className="text-lg leading-relaxed">
                  Frontend integration decisions have already accounted for browser-only behavior and rendering constraints, reducing deployment surprises later.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why this matters</h2>
            <p className="text-lg leading-relaxed mb-3">
              A lot of projects fail in the middle: too complex to keep moving, too incomplete to ship.
            </p>
            <p className="text-lg leading-relaxed mb-3">
              This one is being built to avoid that trap through sequencing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>prove UX</li>
              <li>establish architecture seams</li>
              <li>migrate persistence</li>
              <li>harden for production</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              The team is optimizing for maintainability and delivery cadence, not just feature count.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What comes next</h2>
            <p className="text-lg leading-relaxed mb-3">
              The next major milestone is end-to-end API reality.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Implement real auth issuing and verification flow</li>
              <li>Replace placeholder repositories with Postgres-backed implementations</li>
              <li>Move dashboard data writes and reads from local storage to API</li>
              <li>Add guards, interceptors, and protected route behavior</li>
              <li>Add smoke coverage for auth, habits, journal, and health paths</li>
              <li>Close go-live checklist items for observability and deployment</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Once those are complete, the project transitions from frontend-first prototype architecture to production-capable full stack.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Final takeaway</h2>
            <p className="text-lg leading-relaxed">
              This Habit Tracker is already beyond the toy stage. The product experience is tangible, the architecture is intentional, and the path forward is concrete.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              What exists today is not a half-finished app. It is a deliberately phased system: usable now, extensible next, and built to scale without rewriting from scratch.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}