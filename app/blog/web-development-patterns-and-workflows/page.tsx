'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function WebDevelopmentPatternsAndWorkflowsPost() {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`flex flex-col justify-start items-center min-h-screen gap-8 px-6 pt-36 pb-24 transition-all duration-300 ${
        isOpen ? 'ml-64' : 'ml-20'
      }`}
    >
      <div className="max-w-5xl w-full space-y-6">
        <div className="space-y-2">
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="text-5xl font-bold text-primary">Modern Web Development Vocabulary and Patterns</h1>
          <p className="text-lg text-base-content/70">
            A practical guide to common words, patterns, and workflows developers use in modern web application development.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Why This Matters</h2>
            <p className="text-lg leading-relaxed">
              Teams move faster when they share a common language. Words like dependency injection, idempotency, optimistic updates,
              or contract testing are not just buzzwords. They describe design decisions that affect maintainability, reliability,
              and delivery speed.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              This article gives two levels of detail: a quick glossary you can scan in minutes and deeper explanations with examples
              that help you apply each concept in day-to-day work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vocabulary Quick Reference</h2>
            <div className="overflow-x-auto rounded-lg border border-base-300 bg-base-100">
              <table className="table w-full text-sm md:text-base">
                <thead>
                  <tr>
                    <th>Term</th>
                    <th>What It Means</th>
                    <th>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">Dependency Injection</td>
                    <td>Pass dependencies into a component instead of creating them inside it</td>
                    <td>Improves testability and lowers coupling</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Separation of Concerns</td>
                    <td>Split responsibilities so each unit does one clear job</td>
                    <td>Makes code easier to change and reason about</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Idempotency</td>
                    <td>Repeating the same operation gives the same outcome</td>
                    <td>Protects APIs and jobs from duplicate requests</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Optimistic Update</td>
                    <td>Update UI immediately before server confirmation</td>
                    <td>Improves perceived performance and UX</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Pagination and Cursoring</td>
                    <td>Fetch data in chunks instead of all at once</td>
                    <td>Keeps pages fast and scalable</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Feature Flag</td>
                    <td>Toggle behavior without redeploying</td>
                    <td>Enables safer rollout and quick rollback</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Observability</td>
                    <td>Logs, metrics, and traces that explain system behavior</td>
                    <td>Shortens debugging and incident response time</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Contract Testing</td>
                    <td>Validate that service interfaces remain compatible</td>
                    <td>Prevents integration breakage between teams</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Detailed Definitions</h2>
            <div className="space-y-5 text-lg leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-2">Dependency Injection</h3>
                <p>
                  Dependency injection means a class or function receives the tools it needs from the outside instead of creating
                  them internally. For example, a service receives an HTTP client or repository in its constructor. This keeps code
                  easier to test and easier to swap when implementation details change.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Separation of Concerns</h3>
                <p>
                  Separation of concerns means each part of the system should own one responsibility. UI components should focus on
                  rendering and interaction, services should focus on workflow rules, and repositories should focus on data access.
                  Clear separation reduces accidental coupling and makes changes more predictable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Idempotency</h3>
                <p>
                  Idempotency means doing the same operation multiple times has the same effect as doing it once. A common example is
                  payment APIs using idempotency keys so retrying a request does not create duplicate charges. It is a key reliability
                  concept for distributed systems and network retries.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Optimistic Update</h3>
                <p>
                  Optimistic updates apply a UI change immediately before the server confirms success. If the server later fails, the
                  UI rolls back or shows an error. This pattern improves responsiveness in interactions like likes, toggles, and
                  inline edits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Pagination and Cursoring</h3>
                <p>
                  Pagination loads a dataset in pages instead of all at once. Cursor-based pagination uses a stable pointer such as
                  the last seen ID or timestamp, which is often safer than page numbers for frequently changing data. Both approaches
                  improve performance and user experience for large lists.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Feature Flag</h3>
                <p>
                  A feature flag is a runtime switch that turns behavior on or off without redeploying code. Teams use flags for
                  gradual rollouts, A/B testing, and fast rollback when issues appear in production.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Observability</h3>
                <p>
                  Observability is the ability to understand what a system is doing from the outside by using logs, metrics, and
                  traces. It helps answer questions like what failed, where it failed, and which requests were affected.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Contract Testing</h3>
                <p>
                  Contract testing checks that two services still agree on request and response structure, status codes, and field
                  expectations. It catches integration breakages early, before one team ships a change that breaks another team.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Architecture and Design Patterns</h2>
            <p className="text-lg leading-relaxed">
              Most modern web teams pick architecture based on how quickly features change and how complex business rules are.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4 mt-3">
              <li>Layered architecture for straightforward apps and familiar team structure</li>
              <li>Vertical slice architecture for feature-focused delivery and localized changes</li>
              <li>Clean, Onion, or Hexagonal architecture for protecting domain logic from infrastructure details</li>
              <li>Modular monolith as a practical middle ground before microservices</li>
              <li>Microservices when independent scaling, deployment, and team ownership justify operational complexity</li>
            </ul>
            <p className="text-lg leading-relaxed mt-3">
              The right question is not which pattern is most popular. It is which pattern reduces the cost of the changes your team
              makes most often.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Platform and Delivery Definitions</h3>
            <div className="space-y-5 text-lg leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-2">API (Application Programming Interface)</h3>
                <p>
                  An API is a defined way for one piece of software to communicate with another. In web development, this usually
                  means HTTP endpoints that expose operations and data, but it can also include GraphQL schemas, gRPC contracts, or
                  SDK methods.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Interface</h3>
                <p>
                  An interface is a contract that defines what operations are available without specifying how they are implemented.
                  Teams use interfaces to decouple business logic from infrastructure details such as database access, email providers,
                  or third-party APIs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">SSR (Server-Side Rendering)</h3>
                <p>
                  SSR means HTML is generated on the server for each request, then sent to the browser. This can improve first load
                  performance, SEO, and perceived speed, especially for content-heavy pages.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Client State vs Backend State</h3>
                <p>
                  Client state is UI-local data such as modal visibility, form input, and temporary selection state. Backend state
                  comes from server data and includes entities like users, orders, and permissions. Modern apps treat backend state as
                  cache-synchronized data that can become stale, while client state is usually immediate and local to the browser.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Unit Testing and Integration Testing</h3>
                <p>
                  Unit tests verify one small unit of behavior in isolation, often with mocked dependencies. Integration tests verify
                  that multiple parts work together, such as service plus database or API endpoint plus persistence layer. Both are
                  important: unit tests give fast feedback, while integration tests catch wiring and contract issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Service Contract</h3>
                <p>
                  A service contract is the agreed interface between systems, including payload shape, field meaning, status codes,
                  and versioning expectations. Clear service contracts reduce breaking changes and make cross-team integration safer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">CI/CD (Continuous Integration and Continuous Delivery or Deployment)</h3>
                <p>
                  Continuous integration means developers merge changes frequently and run automated checks on every commit or pull
                  request. Continuous delivery or deployment extends this by automatically preparing or releasing validated changes to
                  production. Together, CI/CD shortens feedback loops and reduces release risk.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Dependency Injection in Practice</h3>
            <p className="text-lg leading-relaxed">
              Dependency injection means your components receive dependencies from the outside rather than instantiating them directly.
              In web apps, this often applies to repositories, API clients, caches, clocks, and message publishers.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed mt-4">
{`// Bad: hard-coded dependency
class UserService {
  private client = new ApiClient();

  async getUser(id: string) {
    return this.client.get('/users/' + id);
  }
}

// Better: injected dependency
type HttpClient = {
  get: (url: string) => Promise<unknown>;
};

class UserService {
  constructor(private client: HttpClient) {}

  async getUser(id: string) {
    return this.client.get('/users/' + id);
  }
}`}
            </pre>

            <p className="text-lg leading-relaxed mt-4">
              The injected version is easier to test because you can provide a fake or mock client. It also makes refactoring safer,
              because service logic is not tied to one specific HTTP library.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Common Design Patterns in Web Apps</h3>
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">Repository Pattern</h3>
                <p className="text-lg leading-relaxed">
                  Isolates data access behind a consistent interface so business logic does not depend on database details.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Strategy Pattern</h3>
                <p className="text-lg leading-relaxed">
                  Lets you swap algorithms based on context, such as pricing rules, notification channels, or authentication flows.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Adapter Pattern</h3>
                <p className="text-lg leading-relaxed">
                  Wraps a third-party API so your internal code depends on your own interface instead of vendor-specific types.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">CQRS-lite</h3>
                <p className="text-lg leading-relaxed">
                  Separates writes from read projections where helpful, without forcing a full event-sourced architecture.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Outbox Pattern</h3>
                <p className="text-lg leading-relaxed">
                  Stores events in the same transaction as data changes, then publishes asynchronously to avoid lost messages.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Team Workflow and Tooling</h2>
            <div className="overflow-x-auto rounded-lg border border-base-300 bg-base-100">
              <table className="table w-full text-sm md:text-base">
                <thead>
                  <tr>
                    <th>Workflow</th>
                    <th>Expected Practice</th>
                    <th>Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">Pull Request Workflow</td>
                    <td>Small PRs, clear context, and review checklist</td>
                    <td>Faster reviews and fewer regressions</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Trunk-Based Integration</td>
                    <td>Frequent merges to main with short-lived branches</td>
                    <td>Lower integration risk and faster delivery</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">CI Validation</td>
                    <td>Lint, tests, and build checks on every push</td>
                    <td>Detect failures early</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Incremental Releases</td>
                    <td>Feature flags and staged rollout</td>
                    <td>Safer deployments and easier rollback</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Incident Workflow</td>
                    <td>Logs, traces, runbooks, and retrospectives</td>
                    <td>Faster recovery and better learning loops</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Additional Terms Every Developer Should Be Comfortable With</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Latency and throughput</li>
              <li>Consistency and eventual consistency</li>
              <li>Retry with backoff and circuit breaker</li>
              <li>Idempotency key</li>
              <li>Schema migration and backward compatibility</li>
              <li>Rate limiting and throttling</li>
              <li>Authentication versus authorization</li>
              <li>Cross-cutting concerns</li>
              <li>SLA, SLO, and error budget</li>
              <li>Blue-green and canary deployment</li>
            </ul>
            <p className="text-lg leading-relaxed mt-3">
              Knowing these terms helps you contribute in planning, implementation, reviews, and incident response conversations.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Most Used Libraries and Platforms Today</h3>
            <p className="text-lg leading-relaxed">
              Tooling changes over time, but some categories show up in most modern web teams. The names below are common choices
              in current production stacks and are worth understanding even if your project uses alternatives.
            </p>

            <div className="overflow-x-auto rounded-lg border border-base-300 bg-base-100 mt-5">
              <table className="table w-full text-sm md:text-base">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Common Options</th>
                    <th>What They Are Used For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">Frontend Frameworks</td>
                    <td>React, Vue, Angular, Svelte</td>
                    <td>Building interactive user interfaces and component-based apps</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Meta Frameworks</td>
                    <td>Next.js, Nuxt, Remix, SvelteKit</td>
                    <td>Routing, SSR, data loading, and full-stack app conventions</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Backend Frameworks</td>
                    <td>Express, NestJS, FastAPI, ASP.NET Core, Spring Boot</td>
                    <td>APIs, authentication, business workflows, and integrations</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">ORM and Data Access</td>
                    <td>Prisma, TypeORM, Drizzle, Entity Framework Core, Hibernate</td>
                    <td>Database schema management, queries, and persistence patterns</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">State and Data Fetching</td>
                    <td>Redux Toolkit, Zustand, TanStack Query, SWR</td>
                    <td>Client state, server cache, optimistic updates, and API sync</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Testing</td>
                    <td>Jest, Vitest, Playwright, Cypress, xUnit, NUnit</td>
                    <td>Unit, integration, and end-to-end quality checks in CI</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">API and Contract Tooling</td>
                    <td>OpenAPI, Swagger, GraphQL, gRPC</td>
                    <td>Defining, documenting, and validating service contracts</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Observability</td>
                    <td>OpenTelemetry, Prometheus, Grafana, Datadog, Sentry</td>
                    <td>Tracing, metrics, logs, alerting, and error monitoring</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Platform and Deployment</td>
                    <td>Vercel, Netlify, Azure, AWS, GCP, Docker, Kubernetes</td>
                    <td>Hosting, scaling, CI/CD, and production operations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed mt-4">
              A useful strategy is to standardize on a small set of tools per category. Teams move faster when everyone understands
              one testing stack, one deployment path, and one observability baseline instead of mixing too many overlapping tools.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">A Practical Baseline for Most Web Projects</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Start with a simple architecture that your team can explain in one minute.</li>
              <li>Use dependency injection for external dependencies and side effects.</li>
              <li>Keep business rules out of controllers and UI glue code.</li>
              <li>Add tests around use cases and contract boundaries, not only around implementation details.</li>
              <li>Ship behind feature flags when risk is high.</li>
              <li>Track logs, metrics, and traces from the beginning.</li>
              <li>Evolve architecture in response to real pressure, not trends.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Modern web development is less about memorizing pattern names and more about choosing clear boundaries, safe delivery
              workflows, and a shared vocabulary that helps teams collaborate. Dependency injection, architectural awareness, and
              consistent workflows are practical habits that scale from hobby projects to enterprise systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">References</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>
                <a href="https://martinfowler.com/articles/injection.html" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Martin Fowler - Inversion of Control Containers and the Dependency Injection Pattern
                </a>
              </li>
              <li>
                <a href="https://12factor.net/" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  The Twelve-Factor App
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Microsoft - Cloud Design Patterns
                </a>
              </li>
              <li>
                <a href="https://www.pragmaticengineer.com/" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  The Pragmatic Engineer - Engineering workflow and delivery topics
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}