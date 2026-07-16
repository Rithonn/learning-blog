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
            A build log on where the project is at, what I have been learning from an unfamiliar stack, and what still needs real implementation work.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              I wanted to write this one more like a real project checkpoint than a polished post.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              The Habit Tracker has been one of those projects where it is very easy to get distracted by architecture, backend setup, auth flows, deployment, and all the usual infrastructure work before the core product even feels good to use.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              I have been trying not to do that here. The goal from the start was pretty simple: make a habit app I would actually want to use, make sure journaling fits naturally into it, and only then keep hardening the stack around that.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              Another reason I picked this project is that parts of the stack were not familiar to me. I wanted something real enough to force me to learn instead of just reading docs or following small tutorials. Building the app while figuring out Angular, the Go backend shape, and how those pieces should meet has probably been the most useful part of the whole thing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What I am building</h2>
            <p className="text-lg leading-relaxed mb-3">
              At a high level, this is a full-stack habit tracker with a journaling layer built into the daily workflow.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Frontend: Angular application focused on habit completion and daily journaling</li>
              <li>Backend: Go API scaffold designed for authenticated, database-backed persistence</li>
              <li>Repo strategy: decoupled frontend and backend in a monorepo so both can evolve independently</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4 mb-3">The basic workflow I am aiming for is:</p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>selecting a month</li>
              <li>checking habits per day</li>
              <li>writing short daily journal entries</li>
              <li>seeing progress over time</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Nothing especially flashy. The whole point is for it to feel lightweight enough to use every day.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              It has also been a good excuse to learn by doing. I tend to understand new tools better when I have to make actual product decisions with them instead of building another throwaway demo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why I started with the frontend</h2>
            <p className="text-lg leading-relaxed mb-3">
              The biggest call early on was to not wait for the backend to be fully real before building the main product flow.
            </p>
            <p className="text-lg leading-relaxed mb-3">That helped in a few ways right away:</p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>I could test the habit and journaling flow immediately instead of designing API contracts in a vacuum</li>
              <li>Local browser persistence let me keep moving without dealing with deployment or infrastructure up front</li>
              <li>The frontend state and screens started revealing what the API actually needs to support</li>
              <li>I could get comfortable with an unfamiliar stack by building visible features first instead of hiding in setup work</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              So the rough strategy became: make the UX feel real first, then make the backend catch up to it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Where the project is right now</h2>
            <p className="text-lg leading-relaxed mb-3">
              Right now it feels like a strong shell with the right seams in place, but not a finished full-stack app yet.
            </p>
            <h3 className="text-xl font-semibold mb-3">What is already working</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4 mb-5">
              <li>Vertical-slice frontend architecture is in place</li>
              <li>Dashboard flow is functional</li>
              <li>Month-based habit matrix is interactive</li>
              <li>Daily journaling UX is implemented</li>
              <li>Local persistence keeps data across browser restarts</li>
              <li>Health check path from frontend to backend exists</li>
              <li>Backend routes, middleware, and feature boundaries are scaffolded</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">What is still unfinished</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Backend business repositories still return not-implemented placeholders</li>
              <li>Full auth lifecycle is not wired end-to-end (register/login/me token flow)</li>
              <li>Frontend still relies mostly on local state as source of truth</li>
              <li>Production hardening items remain (smoke tests, observability, rate limiting, deployment settings)</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              I do not really see that list as accidental mess. It is more that I have been choosing what to finish later on purpose instead of pretending everything needs to be production-ready on day one.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Decisions I already feel good about</h2>
            <p className="text-lg leading-relaxed mb-4">
              A few decisions have made the project easier to reason about, even though the implementation is still incomplete.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Vertical slices on the frontend</h3>
                <p className="text-lg leading-relaxed">
                  Grouping the frontend by feature instead of file type has already made the app easier to navigate. Auth stays with auth, dashboard stays with dashboard, and I do not have to bounce across a bunch of global folders to understand one feature.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2. Keeping the Go backend layers explicit</h3>
                <p className="text-lg leading-relaxed">
                  The handler to service to repository split is probably the most useful backend decision so far. It makes the placeholders obvious, but it also means I know exactly where the real Postgres-backed code is supposed to land.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3. Putting middleware in early</h3>
                <p className="text-lg leading-relaxed">
                  Even though the backend is not fully wired up, having logging, request validation patterns, auth middleware, and protected route groups in place already makes the shape of the API feel more real.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4. Using local persistence as a bridge</h3>
                <p className="text-lg leading-relaxed">
                  Local storage is not the destination, but it has been useful. It let me test whether the app flow actually works before forcing everything through the API.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">5. Being careful about browser-only behavior</h3>
                <p className="text-lg leading-relaxed">
                  Some frontend integration work already had to account for SSR and browser-only behavior, which is the kind of thing that is easy to ignore until deployment starts breaking.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why I am building it this way</h2>
            <p className="text-lg leading-relaxed mb-3">
              A lot of side projects die in the middle.
            </p>
            <p className="text-lg leading-relaxed mb-3">
              They get too complicated to keep moving on, but they never become complete enough to feel real either. I am trying to avoid that by working in this order:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>prove UX</li>
              <li>establish architecture seams</li>
              <li>migrate persistence</li>
              <li>harden for production</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              That order just feels more honest for this project. I would rather have something usable with known gaps than a huge amount of backend code supporting a product flow that still feels wrong.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">What I need to do next</h2>
            <p className="text-lg leading-relaxed mb-3">
              The next big step is making the backend real enough that the frontend can stop treating local state as the main source of truth.
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
              Once those pieces are in place, the project stops being mostly a frontend-first prototype and starts feeling like an actual production path.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Current takeaway</h2>
            <p className="text-lg leading-relaxed">
              The Habit Tracker is in a good place, but it is definitely still in-between stages.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              The product flow is real enough to use and evaluate, the architecture is clear enough that I know where the missing work belongs, and the next milestones are obvious. That is honestly the main thing I wanted at this stage.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}