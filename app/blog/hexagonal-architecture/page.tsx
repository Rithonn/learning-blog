'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function HexagonalArchitecturePost() {
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
          <h1 className="text-5xl font-bold text-primary">Hexagonal Architecture</h1>
          <p className="text-lg text-base-content/70">
            A practical guide to hexagonal architecture, how ports and adapters work, and when this style helps you isolate your core application logic.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">What It Is</h2>
            <p className="text-lg leading-relaxed">
              Hexagonal architecture, often called ports and adapters, is a way of structuring software so the application core does
              not depend directly on UI frameworks, databases, message brokers, or third-party APIs. Instead, the core defines ports,
              and outer adapters implement those ports or translate external input into forms the core can use.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              The shape is called hexagonal not because six sides matter, but because the application is shown in the center with
              multiple equally valid entry and exit points around it. HTTP is just one adapter. A CLI, a test harness, a queue
              consumer, or a scheduled job could drive the same use case through a different adapter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why Teams Use It</h2>
            <p className="text-lg leading-relaxed">
              Teams use hexagonal architecture when they want the application core to remain stable while integrations change. It is
              especially useful when the same business capability may be triggered through more than one interface or when external
              systems are volatile enough that direct coupling would make testing and change harder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">The Core Idea: Ports and Adapters</h2>
            <p className="text-lg leading-relaxed mb-3">
              A port is a boundary defined by the application. It expresses what the core needs from the outside world or what the
              outside world can ask the core to do.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Inbound ports describe use cases the application exposes, such as creating an order or resetting a password</li>
              <li>Outbound ports describe dependencies the application needs, such as loading an order, sending an email, or publishing an event</li>
              <li>Adapters sit on the outside and translate between technical protocols and those ports</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              This allows the application core to speak its own language while adapters deal with HTTP, SQL, SDKs, queues, and file formats.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How It Differs from Clean and Onion</h2>
            <p className="text-lg leading-relaxed mb-3">
              Hexagonal, clean, and onion architecture all aim to protect business logic from infrastructure concerns. In practice,
              they overlap heavily, and many codebases could reasonably be described by more than one label.
            </p>
            <p className="text-lg leading-relaxed">
              Hexagonal architecture usually emphasizes interaction boundaries most directly. The language of ports and adapters makes
              it very explicit which parts of the system are input mechanisms, which are output mechanisms, and where the application
              core sits between them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Pros</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>The application core stays independent from framework and transport details</li>
              <li>Testing becomes easier because adapters can be replaced with simple in-memory implementations</li>
              <li>Multiple entry points can reuse the same application behavior without duplicating business rules</li>
              <li>Replacing a database, queue, or external provider is more manageable when dependencies are behind outbound ports</li>
              <li>The architecture makes integration boundaries visible instead of letting them spread across the codebase</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Cons</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>It introduces extra abstractions that can feel heavy in a small app</li>
              <li>If every action becomes a port and adapter too early, the structure can become more ceremonial than useful</li>
              <li>Teams can over-engineer boundaries around simple dependencies that are unlikely to change</li>
              <li>Poor naming can make ports feel vague, especially when they mirror technical details instead of business intent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Common Misconceptions</h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed pl-4">
              <li>
                <strong>&quot;The hexagon shape defines the design.&quot;</strong> The drawing is just a teaching device. The important part is the dependency boundary, not the number of sides.
              </li>
              <li>
                <strong>&quot;Ports are just interfaces for everything.&quot;</strong> A useful port represents a meaningful application boundary, not a reflex to abstract every class.
              </li>
              <li>
                <strong>&quot;Controllers are the application.&quot;</strong> In a hexagonal design, controllers, endpoints, and consumers are adapters. They should translate and delegate, not own business decisions.
              </li>
              <li>
                <strong>&quot;Hexagonal architecture is only for microservices.&quot;</strong> It works inside a monolith too, especially when you want strong seams around domain behavior and integrations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">When to Choose It</h2>
            <p className="text-lg leading-relaxed">
              Choose hexagonal architecture when your application has real business workflows and several technical integration points,
              or when the same use case should be callable from multiple interfaces. It is especially helpful when you want testable
              application services that are not tied to HTTP, a specific ORM, or one messaging technology.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              It is a weaker fit for a tiny application with one interface and minimal domain behavior. In that situation, the cost of
              ports, adapters, and mapping layers may exceed the value until the application grows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Example Structure</h2>
            <p className="text-lg leading-relaxed mb-3">
              One way to organize a .NET solution is to make the core explicit and keep adapters at the edge:
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`src/
  Billing.Core/
    Ports/
      In/
        ICreateInvoiceUseCase.cs
      Out/
        IInvoiceRepository.cs
        IEmailGateway.cs
    Invoices/
      CreateInvoice/
        CreateInvoiceCommand.cs
        CreateInvoiceService.cs
    Domain/
      Invoice.cs
  Billing.Adapters.Web/
    Controllers/
      InvoicesController.cs
    Requests/
      CreateInvoiceRequest.cs
  Billing.Adapters.Persistence/
    EfCoreInvoiceRepository.cs
    BillingDbContext.cs
  Billing.Adapters.Notifications/
    SendGridEmailGateway.cs
  Billing.Bootstrap/
    DependencyInjection.cs
    Program.cs`}
            </pre>

            <p className="text-lg leading-relaxed mt-4">
              The naming varies by team, but the idea is consistent: the core defines the contracts, and the adapters implement or drive them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Code Example</h2>
            <p className="text-lg leading-relaxed mb-3">
              A service in the core can depend on outbound ports while an HTTP controller acts only as an inbound adapter.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`// Billing.Core/Ports/Out/IInvoiceRepository.cs
namespace Billing.Core.Ports.Out;

public interface IInvoiceRepository
{
    Task AddAsync(Invoice invoice, CancellationToken cancellationToken = default);
}

// Billing.Core/Invoices/CreateInvoice/CreateInvoiceService.cs
namespace Billing.Core.Invoices.CreateInvoice;

public sealed class CreateInvoiceService : ICreateInvoiceUseCase
{
    private readonly IInvoiceRepository _invoiceRepository;
    private readonly IEmailGateway _emailGateway;

    public CreateInvoiceService(IInvoiceRepository invoiceRepository, IEmailGateway emailGateway)
    {
        _invoiceRepository = invoiceRepository;
        _emailGateway = emailGateway;
    }

    public async Task Handle(CreateInvoiceCommand command, CancellationToken cancellationToken)
    {
        var invoice = Invoice.Create(command.CustomerId, command.Amount);

        await _invoiceRepository.AddAsync(invoice, cancellationToken);
        await _emailGateway.SendInvoiceCreatedAsync(invoice.Id, cancellationToken);
    }
}

// Billing.Adapters.Web/Controllers/InvoicesController.cs
[ApiController]
[Route("api/invoices")]
public sealed class InvoicesController : ControllerBase
{
    [HttpPost]
    public Task Create(
        [FromBody] CreateInvoiceRequest request,
        [FromServices] ICreateInvoiceUseCase useCase,
        CancellationToken cancellationToken)
    {
        return useCase.Handle(new CreateInvoiceCommand(request.CustomerId, request.Amount), cancellationToken);
    }
}`}
            </pre>

            <p className="text-lg leading-relaxed mt-4">
              The controller knows about HTTP. The service knows about the use case. The repository and email gateway adapters know
              about technical implementation. Each part stays in its lane.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Hexagonal architecture is a strong option when you need your application core to remain stable across changing
              integrations and multiple delivery mechanisms. It adds abstraction, so it should be used intentionally, but its ports
              and adapters model gives teams a clear way to separate business behavior from technical plumbing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">References</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>
                <a href="https://alistair.cockburn.us/hexagonal-architecture" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Alistair Cockburn - Hexagonal Architecture
                </a>
              </li>
              <li>
                <a href="https://marcolenzo.eu/the-hexagonal-architecture-explained-ports-and-adapters-pattern/" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Marco Lenzo - Hexagonal Architecture Explained
                </a>
              </li>
              <li>
                <a href="https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Microsoft - Common Web Application Architectures
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}