'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function DeveloperQuizVsCodeExtensionPost() {
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
          <h1 className="text-5xl font-bold text-primary">Developer Quiz VS Code Extension</h1>
          <p className="text-lg text-base-content/70">
            A practical concept for a VS Code extension that asks grounded developer quiz questions from official documentation and evaluates answers with AI.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Vision</h2>
            <p className="text-lg leading-relaxed">
              Build a VS Code extension that asks developers focused quiz questions derived strictly from official documentation. The extension should feel lightweight and useful for daily learning without turning into a gamified tracking platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Goals</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Ask ad-hoc questions about languages and libraries</li>
              <li>Ask one daily question to encourage consistent practice</li>
              <li>Use retrieval-augmented generation (RAG) to ground questions in docs</li>
              <li>Use AI to evaluate answers against the same source material</li>
              <li>Avoid user profiles, scores, and progress tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Architecture</h2>
            <p className="text-lg leading-relaxed mb-3">
              The extension can be kept modular with a small set of focused components:
            </p>
            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`VS Code Extension
 ├─ Commands
 ├─ Documentation Retriever
 ├─ Chunking/Index
 ├─ RAG Retrieval
 ├─ AI Question Generator
 └─ AI Answer Evaluator`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Suggested Stack</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full text-base">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Technology</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Extension</td>
                    <td>TypeScript</td>
                  </tr>
                  <tr>
                    <td>AI</td>
                    <td>OpenAI, Claude, Gemini, or Ollama</td>
                  </tr>
                  <tr>
                    <td>Parsing</td>
                    <td>markdown-it, cheerio, pdf-parse</td>
                  </tr>
                  <tr>
                    <td>Index</td>
                    <td>Local vector index</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Core Commands</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Developer Quiz: Ask Question</li>
              <li>Developer Quiz: Daily Question</li>
              <li>Developer Quiz: Configure Sources</li>
              <li>Developer Quiz: Refresh Documentation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Workflow</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>User selects a library</li>
              <li>Extension retrieves relevant documentation chunks</li>
              <li>AI generates one question from retrieved docs only</li>
              <li>User submits an answer</li>
              <li>AI evaluates the answer against the same documentation</li>
              <li>Extension cites the documentation section used</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Prompting Principles</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Never invent APIs</li>
              <li>Use only supplied documentation</li>
              <li>Cite the documentation used</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              These constraints are critical. They keep the generated quiz content trustworthy and make answer evaluations auditable for learners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Future Enhancements</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Context-aware questions based on the currently open file</li>
              <li>Support for multiple AI providers through a common adapter</li>
              <li>Expanded documentation support for Markdown, HTML, PDF, and GitHub docs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              This concept is a strong fit for developers who want short, documentation-grounded practice inside their editor. By combining RAG retrieval with strict prompting rules, the extension can stay practical, transparent, and focused on learning instead of scoring.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">References</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>
                <a href="https://code.visualstudio.com/api" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Visual Studio Code API Documentation
                </a>
              </li>
              <li>
                <a href="https://platform.openai.com/docs/guides/retrieval" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  OpenAI Retrieval Guide
                </a>
              </li>
              <li>
                <a href="https://www.anthropic.com/engineering/building-effective-agents" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Anthropic - Building Effective Agents
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
