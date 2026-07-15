'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function OnionArchitecturePost() {
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
          <h1 className="text-5xl font-bold text-primary">Onion Architecture</h1>
          <p className="text-lg text-base-content/70">
            A beginner-friendly guide to onion architecture, how its layers work, and when it helps teams keep business rules clean and stable.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">What It Is</h2>
            <p className="text-lg leading-relaxed">
              Onion architecture is a layered architectural style that places business logic at the center and pushes technical details to the outside. The key idea is that core domain rules should not depend on frameworks, databases, UI code, or external services.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              Dependencies flow inward. Outer layers can reference inner layers, but inner layers do not know anything about outer ones. This helps protect domain logic from frequent infrastructure changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why Teams Use It</h2>
            <p className="text-lg leading-relaxed">
              Teams often choose onion architecture when they want long-term maintainability and clear boundaries between business decisions and technical implementation. By keeping domain models and use cases independent, teams can swap infrastructure choices with less disruption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Typical Layers</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Domain: entities, value objects, and core business rules</li>
              <li>Application: use cases and orchestration of domain behavior</li>
              <li>Infrastructure: database access, external APIs, file systems, queues</li>
              <li>Presentation: HTTP endpoints, UI controllers, or GraphQL resolvers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Naming Tip: Infrastructure</h2>
            <p className="text-lg leading-relaxed mb-3">
              Infrastructure is a strong and common name for concrete implementations. A simple rule of thumb is:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Use Infrastructure for technical details like EF Core repositories, message brokers, file storage, email providers, cache clients, and third-party API clients</li>
              <li>Keep domain logic out of Infrastructure</li>
              <li>Let Domain and Application define contracts, and let Infrastructure implement them</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4 mb-3">
              If one Infrastructure project gets too broad, split by capability:
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`src/
  Ordering.Infrastructure.Persistence/
    AppDbContext.cs
    Repositories/
      OrderRepository.cs
  Ordering.Infrastructure.Messaging/
    KafkaProducer.cs
    OutboxDispatcher.cs
  Ordering.Infrastructure.Identity/
    JwtTokenService.cs
  Ordering.Infrastructure.Integrations/
    StripePaymentGateway.cs
    SendGridEmailSender.cs`}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Pros</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Business logic remains independent of framework and infrastructure choices</li>
              <li>Testing core behavior is easier because domain and use cases can be tested without I/O</li>
              <li>Boundaries are explicit, which can reduce accidental coupling over time</li>
              <li>Swapping infrastructure (for example, a database provider) becomes more manageable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Cons</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>There is more upfront structure and ceremony compared to simpler architectures</li>
              <li>Small projects may feel over-engineered if boundaries are too strict too early</li>
              <li>Teams need discipline to keep dependency direction correct</li>
              <li>Extra abstractions can slow development if used without clear purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Common Misconceptions</h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed pl-4">
              <li>
                <strong>"Every class needs an interface."</strong> Onion architecture does not require interfaces everywhere. Add abstractions where they protect business logic from volatile dependencies such as databases, external APIs, or time providers.
              </li>
              <li>
                <strong>"Infrastructure is bad code that belongs far away."</strong> Infrastructure is essential code, not second-class code. The goal is separation of concerns, not lower quality.
              </li>
              <li>
                <strong>"Domain entities cannot have behavior."</strong> Rich domain models are encouraged. Entities should enforce invariants and business rules instead of becoming passive data containers.
              </li>
              <li>
                <strong>"You cannot use EF Core with Onion architecture."</strong> You can. Keep EF Core in Infrastructure and avoid leaking EF-specific concerns into Domain and Application.
              </li>
              <li>
                <strong>"Onion architecture always means many projects."</strong> You can start in one project with folders and dependency rules, then split into multiple projects as complexity grows.
              </li>
              <li>
                <strong>"It automatically makes code clean."</strong> The structure helps, but teams still need consistent naming, good tests, and disciplined boundaries.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Swappable Infrastructure Choices</h2>
            <p className="text-lg leading-relaxed mb-3">
              One practical benefit of onion architecture is that teams can replace technical dependencies with less disruption when contracts stay stable.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Database engine: SQL Server to PostgreSQL while keeping repository interfaces unchanged</li>
              <li>Data access style: EF Core to Dapper by swapping repository implementations in Infrastructure</li>
              <li>Message broker: RabbitMQ to Azure Service Bus or Kafka behind an event bus abstraction</li>
              <li>Cache provider: in-memory cache to Redis through a shared cache interface</li>
              <li>File storage: local disk to Azure Blob Storage or S3 behind a file storage adapter</li>
              <li>Email or SMS provider: SendGrid or Twilio to alternatives behind notification interfaces</li>
              <li>Identity provider: Auth0 to Azure AD B2C or another OIDC provider behind an auth boundary</li>
              <li>Search engine: SQL full-text to Elasticsearch or OpenSearch behind a search service contract</li>
              <li>Background jobs: Hangfire to Quartz.NET or cloud jobs through job scheduling abstractions</li>
              <li>Observability stack: logging and metrics backends can change with minimal domain impact</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              This only works well if inner layers avoid vendor-specific types. Once Domain or Application depends directly on a framework SDK model, swapping providers becomes significantly harder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">When to Choose It</h2>
            <p className="text-lg leading-relaxed">
              Onion architecture fits well when business rules are complex and likely to outlive specific frameworks or tools. It is especially useful in systems where domain correctness matters more than quickly shipping a thin CRUD layer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Example Structure</h2>
            <p className="text-lg leading-relaxed mb-3">
              A realistic C# solution often separates each layer into its own project:
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`src/
  Ordering.sln
  Ordering.Domain/
    Entities/
      Order.cs
      OrderItem.cs
    ValueObjects/
      Money.cs
    Interfaces/
      IOrderRepository.cs
      IUnitOfWork.cs
  Ordering.Application/
    Orders/
      PlaceOrder/
        PlaceOrderCommand.cs
        PlaceOrderHandler.cs
      GetOrderById/
        GetOrderByIdQuery.cs
        GetOrderByIdHandler.cs
    Abstractions/
      IClock.cs
      ICurrentUserService.cs
  Ordering.Infrastructure/
    Persistence/
      AppDbContext.cs
      Repositories/
        OrderRepository.cs
    Services/
      SystemClock.cs
  Ordering.Api/
    Controllers/
      OrdersController.cs
    DependencyInjection.cs
    Program.cs`}
            </pre>

            <p className="text-lg leading-relaxed mt-4 mb-3">
              This keeps domain and application independent, while infrastructure and API reference inward to implement and expose behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Code Example</h2>
            <p className="text-lg leading-relaxed mb-3">
              The application layer depends on domain interfaces, while infrastructure provides concrete implementations:
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`// Ordering.Domain/Interfaces/IOrderRepository.cs
namespace Ordering.Domain.Interfaces;

public interface IOrderRepository
{
    Task AddAsync(Order order, CancellationToken cancellationToken = default);
    Task<Order?> GetByIdAsync(Guid orderId, CancellationToken cancellationToken = default);
}

// Ordering.Application/Orders/PlaceOrder/PlaceOrderHandler.cs
namespace Ordering.Application.Orders.PlaceOrder;

public sealed class PlaceOrderHandler
{
    private readonly IOrderRepository _orderRepository;
    private readonly IUnitOfWork _unitOfWork;

    public PlaceOrderHandler(IOrderRepository orderRepository, IUnitOfWork unitOfWork)
    {
        _orderRepository = orderRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Guid> Handle(PlaceOrderCommand command, CancellationToken cancellationToken)
    {
        var order = Order.Create(command.CustomerId, command.Items);

        await _orderRepository.AddAsync(order, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return order.Id;
    }
}

// Ordering.Infrastructure/Persistence/Repositories/OrderRepository.cs
namespace Ordering.Infrastructure.Persistence.Repositories;

public sealed class OrderRepository : IOrderRepository
{
    private readonly AppDbContext _dbContext;

    public OrderRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task AddAsync(Order order, CancellationToken cancellationToken = default)
        => _dbContext.Orders.AddAsync(order, cancellationToken).AsTask();

    public Task<Order?> GetByIdAsync(Guid orderId, CancellationToken cancellationToken = default)
        => _dbContext.Orders.FirstOrDefaultAsync(o => o.Id == orderId, cancellationToken);
}`}
            </pre>

            <p className="text-lg leading-relaxed mt-4">
              The handler has no dependency on Entity Framework directly, which keeps application logic stable even if persistence technology changes later.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Onion architecture is a strong option when long-term clarity and domain integrity are priorities. It adds structure, but that structure can pay off when systems grow and technical choices evolve.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">References</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>
                <a href="https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Jeffrey Palermo - The Onion Architecture
                </a>
              </li>
              <li>
                <a href="https://www.cosmicpython.com/book/chapter_02_repository.html" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Cosmic Python - Repository Pattern and Layering
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
