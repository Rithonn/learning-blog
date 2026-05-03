'use client';

import { useSidebar } from '@/app/context/SidebarContext';

export default function Purpose() {
  const { isOpen } = useSidebar();

  return (
    <div className={`flex flex-col justify-start items-center min-h-screen gap-8 pl-8 pt-36 pb-24 transition-all duration-300 ${
      isOpen ? 'ml-64' : 'ml-20'
    }`}>
      <h1 className="text-7xl font-bold text-primary">Purpose</h1>
      
      <div className="max-w-3xl space-y-24 text-center">
        <section className="bg-base-200 rounded-lg p-8 border border-primary border-opacity-20 hover:border-opacity-40 transition-all">
          <h2 className="text-3xl font-bold mb-4 text-primary">Why I Created This Website</h2>
          <p className="text-lg leading-relaxed">
            This website serves as a personal development log and journal. It's a space where I document my growth as a developer, capturing both my accomplishments and setbacks throughout my journey.
          </p>
        </section>

        <section className="bg-base-200 rounded-lg p-8 border border-secondary border-opacity-20 hover:border-opacity-40 transition-all">
          <h2 className="text-3xl font-bold mb-4 text-secondary">My Intentions</h2>
          <p className="text-lg leading-relaxed mb-4">
            My primary goal is to maintain a comprehensive record of my work and learning experiences. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-left pl-8">
            <li>Documenting professional accomplishments and challenges from my job</li>
            <li>Sharing personal projects and hobby development work</li>
            <li>Creating a reference point to review previous solutions and approaches</li>
            <li>Building a public portfolio of my development journey</li>
            <li>Contributing to the developer community through shared knowledge</li>
          </ul>
        </section>

        <section className="bg-base-200 rounded-lg p-8 border border-accent border-opacity-20 hover:border-opacity-40 transition-all">
          <h2 className="text-3xl font-bold mb-4 text-accent">Post Structure: ADR Format</h2>
          <p className="text-lg leading-relaxed mb-4">
            I structure my posts using the ADR (Architecture Decision Record) format. This approach provides a consistent and comprehensive way to document decisions, challenges, and solutions. Here's the template I use:
          </p>
          
          <div className="bg-base-300 p-6 rounded-lg mb-4 overflow-x-auto border border-base-content border-opacity-10">
            <pre className="text-sm font-mono text-left whitespace-pre-wrap">
{`# [ADR Title]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
[Describe the issue or problem that necessitated this decision. Include relevant background information and constraints.]

## Decision
[Explain the decision that was made and why it was chosen. Include the rationale and key reasons behind this choice.]

## Consequences
[Describe the results of adopting this decision. Include both positive outcomes and potential drawbacks or trade-offs.]

## Alternatives Considered
[List other options that were evaluated and why they were not chosen.]

## References
[Include any relevant links, documentation, or resources.]`}
            </pre>
          </div>

          <p className="text-lg leading-relaxed">
            This structured approach makes it easier to understand the reasoning behind past decisions and apply those lessons to future challenges.
          </p>
        </section>
      </div>
    </div>
  );
}