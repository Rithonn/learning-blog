'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function CleanArchitecturePost() {
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
          <h1 className="text-5xl font-bold text-primary">Clean Architecture</h1>
          <p className="text-lg text-base-content/70">
            A practical guide to clean architecture, how its dependency rule works, and when the added structure is worth it.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">What It Is</h2>
            <p className="text-lg leading-relaxed">
              Clean architecture is an approach to software design that keeps business rules at the center and pushes frameworks,
              databases, and external services to the edges. The main goal is to make the core of the application independent of
              delivery mechanisms and infrastructure details.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              The central rule is usually called the dependency rule: source code dependencies should point inward. Inner layers may
              define policies and contracts, while outer layers implement technical details. That direction helps prevent the domain
              model and use cases from being shaped by a web framework or ORM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why Teams Use It</h2>
            <p className="text-lg leading-relaxed">
              Teams use clean architecture when they want business behavior to remain stable even as tools, integrations, and UI
              choices change. It is especially attractive in systems where use cases matter more than the transport layer and where
              the cost of coupling business logic to infrastructure would accumulate over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Typical Layers</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Entities: core business rules and invariants</li>
              <li>Use Cases: application-specific workflows that coordinate domain behavior</li>
              <li>Interface Adapters: controllers, presenters, view models, and repository implementations that translate between layers</li>
              <li>Frameworks and Drivers: web frameworks, databases, queues, file systems, and external APIs</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Different teams name these layers differently, but the idea stays the same: policies are inside, details are outside.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How It Differs from Onion Architecture</h2>
            <p className="text-lg leading-relaxed mb-3">
              Clean architecture and onion architecture are closely related. Both protect the domain from infrastructure and both
              keep dependencies flowing inward. In practice, many codebases use the same project structure for either label.
            </p>
            <p className="text-lg leading-relaxed">
              The main difference is emphasis. Onion architecture is often explained in terms of concentric dependency layers around
              the domain. Clean architecture usually emphasizes use cases, input and output boundaries, and adapters that isolate the
              application from delivery concerns such as HTTP, persistence, or messaging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Pros</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Business rules stay isolated from web, database, and vendor-specific details</li>
              <li>Use cases become easier to test because they can run without real I/O</li>
              <li>Infrastructure choices are easier to replace when boundaries are explicit</li>
              <li>The structure makes application workflows and responsibilities more visible</li>
              <li>It can support long-lived systems where technical dependencies are expected to change</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Cons</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>There is more ceremony than in a straightforward CRUD application</li>
              <li>Poorly chosen abstractions can create indirection without delivering real flexibility</li>
              <li>Small apps may end up with too many folders, interfaces, and mapping types too early</li>
              <li>Teams need discipline to stop framework concerns from leaking inward over time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Common Misconceptions</h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed pl-4">
              <li>
                <strong>&quot;Clean architecture means no framework.&quot;</strong> You can absolutely use frameworks. The point is to keep them at the edge instead of letting them dictate core design.
              </li>
              <li>
                <strong>&quot;Every dependency needs an interface.&quot;</strong> It is better to introduce boundaries around volatile details and side effects, not to abstract every class by default.
              </li>
              <li>
                <strong>&quot;It guarantees good code.&quot;</strong> The structure helps, but naming, tests, and business modeling still matter more than folder layout.
              </li>
              <li>
                <strong>&quot;Controllers should contain use-case logic.&quot;</strong> In clean architecture, controllers should translate requests and delegate to use cases rather than becoming the place where application rules live.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">When to Choose It</h2>
            <p className="text-lg leading-relaxed">
              Choose clean architecture when the application has meaningful business workflows, multiple integrations, or a long
              expected lifetime. It is a strong fit when you want use cases to remain readable and testable without being buried in
              controller actions, ORM entities, or SDK-specific code.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              Avoid forcing the full structure into a tiny app that mostly performs simple CRUD with little domain logic. In that
              case, the ceremony can outweigh the benefit until complexity actually appears.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Example Structure</h2>
            <p className="text-lg leading-relaxed mb-3">
              A simple .NET solution might separate policy from implementation like this:
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`src/
  SupportTickets.Domain/
    Entities/
      Ticket.cs
    ValueObjects/
      TicketPriority.cs
  SupportTickets.Application/
    Tickets/
      CreateTicket/
        CreateTicketCommand.cs
        CreateTicketHandler.cs
        ICreateTicketOutputPort.cs
      GetTicket/
        GetTicketQuery.cs
        GetTicketHandler.cs
    Abstractions/
      ITicketRepository.cs
      IUnitOfWork.cs
  SupportTickets.Infrastructure/
    Persistence/
      AppDbContext.cs
      TicketRepository.cs
    Notifications/
      EmailNotifier.cs
  SupportTickets.Api/
    Controllers/
      TicketsController.cs
    Presenters/
      CreateTicketPresenter.cs
    DependencyInjection.cs
    Program.cs`}
            </pre>

            <p className="text-lg leading-relaxed mt-4">
              The application layer defines the workflow and contracts. The API and Infrastructure layers translate requests and
              implement the details needed to execute that workflow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Code Example</h2>
            <p className="text-lg leading-relaxed mb-3">
              A common pattern is to keep the use case free from HTTP and ORM concerns, then have outer layers adapt to it.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`// SupportTickets.Application/Tickets/CreateTicket/CreateTicketHandler.cs
namespace SupportTickets.Application.Tickets.CreateTicket;

public sealed class CreateTicketHandler
{
    private readonly ITicketRepository _ticketRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly ICreateTicketOutputPort _outputPort;

    public CreateTicketHandler(
        ITicketRepository ticketRepository,
        IUnitOfWork unitOfWork,
        ICreateTicketOutputPort outputPort)
    {
        _ticketRepository = ticketRepository;
        _unitOfWork = unitOfWork;
        _outputPort = outputPort;
    }

    public async Task Handle(CreateTicketCommand command, CancellationToken cancellationToken)
    {
        var ticket = Ticket.Create(command.Title, command.Description, command.Priority);

        await _ticketRepository.AddAsync(ticket, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        _outputPort.Ok(new CreateTicketResponse(ticket.Id));
    }
}

// SupportTickets.Api/Controllers/TicketsController.cs
[ApiController]
[Route("api/tickets")]
public sealed class TicketsController : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateTicketRequest request,
        [FromServices] CreateTicketHandler handler,
        CancellationToken cancellationToken)
    {
        await handler.Handle(
            new CreateTicketCommand(request.Title, request.Description, request.Priority),
            cancellationToken);

        return Accepted();
    }
}`}
            </pre>

            <p className="text-lg leading-relaxed mt-4">
              The controller is thin. It accepts transport-specific input, translates it into a command, and lets the use case own
              the workflow. That separation is the point.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Clean architecture is most useful when business behavior deserves protection from short-lived implementation details.
              It adds structure and indirection, so it should be chosen deliberately, but it can pay off when an application needs
              stable use cases, explicit boundaries, and room to evolve over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">References</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>
                <a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Robert C. Martin - The Clean Architecture
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Microsoft - Common Web Application Architectures
                </a>
              </li>
              <li>
                <a href="https://www.dandoescode.com/blog/unpacking-the-layers-of-clean-architecture-domain-application-and-infrastructure-services" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Dan Does Code - Unpacking the Layers of Clean Architecture
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}