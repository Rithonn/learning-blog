'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function OptionsPatternCSharpPost() {
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
          <h1 className="text-5xl font-bold text-primary">The Options Pattern in C#</h1>
          <p className="text-lg text-base-content/70">
            A practical guide to strongly typed configuration in .NET, including validation, lifetimes, and when to use IOptions, IOptionsSnapshot, and IOptionsMonitor.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">What The Options Pattern Solves</h2>
            <p className="text-lg leading-relaxed">
              In many projects, configuration starts as string lookups scattered across services. That approach is fragile and hard to maintain. The options pattern maps configuration into typed classes so configuration becomes discoverable, testable, and safer to refactor.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              Instead of reading values with <code>Configuration["Some:Path"]</code> everywhere, you define a class once and inject it where needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Step 1: Define a Strongly Typed Options Class</h2>
            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`public sealed class GitHubOptions
{
    public const string SectionName = "GitHub";

    public string BaseUrl { get; init; } = "https://api.github.com";
    public string Repository { get; init; } = string.Empty;
    public int TimeoutSeconds { get; init; } = 30;
}`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Step 2: Add Configuration In appsettings.json</h2>
            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`{
  "GitHub": {
    "BaseUrl": "https://api.github.com",
    "Repository": "dotnet/runtime",
    "TimeoutSeconds": 10
  }
}`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Step 3: Bind and Validate in Program.cs</h2>
            <p className="text-lg leading-relaxed mb-3">
              Bind once at startup. Add validation rules so invalid configuration fails fast before requests are served.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddOptions<GitHubOptions>()
    .Bind(builder.Configuration.GetSection(GitHubOptions.SectionName))
    .Validate(o => Uri.IsWellFormedUriString(o.BaseUrl, UriKind.Absolute), "BaseUrl must be a valid absolute URI")
    .Validate(o => !string.IsNullOrWhiteSpace(o.Repository), "Repository is required")
    .Validate(o => o.TimeoutSeconds > 0 && o.TimeoutSeconds <= 120, "TimeoutSeconds must be between 1 and 120")
    .ValidateOnStart();

builder.Services.AddHttpClient<GitHubClient>((sp, client) =>
{
    var options = sp.GetRequiredService<IOptions<GitHubOptions>>().Value;
    client.BaseAddress = new Uri(options.BaseUrl);
    client.Timeout = TimeSpan.FromSeconds(options.TimeoutSeconds);
});`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Choosing The Right Interface</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li><strong>IOptions&lt;T&gt;</strong>: singleton-style access to options, generally fixed for app lifetime</li>
              <li><strong>IOptionsSnapshot&lt;T&gt;</strong>: scoped value, recomputed per request, useful in request pipelines</li>
              <li><strong>IOptionsMonitor&lt;T&gt;</strong>: singleton access with change notifications and current value updates</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              A common rule of thumb is: prefer <code>IOptions&lt;T&gt;</code> for stable config, use <code>IOptionsSnapshot&lt;T&gt;</code> for request-scoped recalculation, and use <code>IOptionsMonitor&lt;T&gt;</code> when you need live updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Example Service Using IOptionsSnapshot</h2>
            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`public sealed class ReleaseNotesService
{
    private readonly GitHubOptions _options;

    public ReleaseNotesService(IOptionsSnapshot<GitHubOptions> options)
    {
        _options = options.Value;
    }

    public string BuildReleasesPath()
        => $"/repos/{_options.Repository}/releases";
}`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Example Worker Using IOptionsMonitor</h2>
            <p className="text-lg leading-relaxed mb-3">
              Background services are typically singletons, so <code>IOptionsMonitor&lt;T&gt;</code> is the safest fit when configuration may change.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`public sealed class SyncWorker : BackgroundService
{
    private readonly IOptionsMonitor<GitHubOptions> _optionsMonitor;
    private readonly ILogger<SyncWorker> _logger;

    public SyncWorker(IOptionsMonitor<GitHubOptions> optionsMonitor, ILogger<SyncWorker> logger)
    {
        _optionsMonitor = optionsMonitor;
        _logger = logger;

        _optionsMonitor.OnChange(options =>
        {
            _logger.LogInformation("GitHub options changed. New timeout: {Timeout}", options.TimeoutSeconds);
        });
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            var options = _optionsMonitor.CurrentValue;
            _logger.LogInformation("Polling {Repository}", options.Repository);
            await Task.Delay(TimeSpan.FromSeconds(options.TimeoutSeconds), stoppingToken);
        }
    }
}`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Named Options</h2>
            <p className="text-lg leading-relaxed mb-3">
              Named options help when you need multiple configurations for the same type, such as calling multiple third-party APIs with different credentials or base URLs.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`builder.Services.Configure<GitHubOptions>("PublicApi",
    builder.Configuration.GetSection("GitHub:PublicApi"));

builder.Services.Configure<GitHubOptions>("EnterpriseApi",
    builder.Configuration.GetSection("GitHub:EnterpriseApi"));

public sealed class MultiEndpointClient
{
    private readonly IOptionsMonitor<GitHubOptions> _monitor;

    public MultiEndpointClient(IOptionsMonitor<GitHubOptions> monitor)
    {
        _monitor = monitor;
    }

    public GitHubOptions GetEnterprise() => _monitor.Get("EnterpriseApi");
}`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Common Pitfalls</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Injecting <code>IOptionsSnapshot&lt;T&gt;</code> into singleton services, which causes lifetime mismatch</li>
              <li>Skipping validation and discovering bad config only after runtime failures</li>
              <li>Using magic strings throughout code instead of a single options class and section constant</li>
              <li>Putting secrets directly in source-controlled appsettings files instead of secure providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              The options pattern is one of the simplest upgrades you can make in a .NET codebase. It gives you a clean boundary around configuration, safer refactoring, and better startup feedback when settings are invalid.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">References</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>
                <a href="https://learn.microsoft.com/en-us/dotnet/core/extensions/options" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Microsoft Learn - Options pattern in .NET
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  .NET Options Pattern (ASP.NET Core Docs)
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Microsoft Learn - Configuration in .NET
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}