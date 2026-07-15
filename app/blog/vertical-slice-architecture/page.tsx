'use client';

import Link from 'next/link';
import { useSidebar } from '@/app/context/SidebarContext';

export default function NewPost() {
  const { isOpen } = useSidebar();

  return (
    <div className={`flex flex-col justify-start items-center min-h-screen gap-8 px-6 pt-36 pb-24 transition-all duration-300 ${
      isOpen ? 'ml-64' : 'ml-20'
    }`}>
      <div className="max-w-4xl w-full space-y-6">
        <div className="space-y-2">
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="text-5xl font-bold text-primary">Vertical Slice Architecture</h1>
          <p className="text-lg text-base-content/70">
            A beginner-friendly overview of what vertical slice architecture is, why teams use it, and where it can create tradeoffs.
          </p>
        </div>

        <article className="bg-base-200 rounded-lg p-8 border border-base-300 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">What It Is</h2>
            <p className="text-lg leading-relaxed">
              Vertical slice architecture is a way of organizing software around features instead of technical layers. Rather than splitting an application into broad folders like controllers, services, and repositories, you keep everything needed for one feature together in the same place.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              This approach is designed to make change safer and faster when features evolve independently. In a layered architecture, shared classes often connect unrelated features. That can make simple updates riskier, because changing shared code for one feature may unintentionally affect another.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Why You Should Use It</h2>
            <p className="text-lg leading-relaxed">
              Vertical slices keep each feature self-contained. That makes the codebase easier to understand, because the structure reflects what the system actually does for users. Instead of piecing together one feature from several technical folders, you can often understand it by opening a single feature area.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Pros</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>Changes stay smaller and more localized because features do not rely heavily on shared classes</li>
              <li>Each feature can evolve with less risk of breaking unrelated behavior</li>
              <li>It is easier to understand one capability without tracing code across multiple technical layers</li>
              <li>New team members can often understand the system faster by reading feature names and boundaries</li>
              <li>It fits well when requirements are still changing and the product is still being shaped</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Cons</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>You may duplicate code across slices, which is often intentional but still requires discipline</li>
              <li>Shared infrastructure such as authentication, logging, and other cross-cutting concerns still needs coordination</li>
              <li>If feature boundaries are not managed carefully, the structure can become inconsistent over time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">When to Choose It</h2>
            <p className="text-lg leading-relaxed">
              Choose this approach when requirements are still emerging, features change often, and the team needs to move quickly. It is especially useful when you are still learning the domain and want an architecture that supports fast iteration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Examples</h2>
            <p className="text-lg leading-relaxed mb-3">
              A common example is a checkout flow in an e-commerce application. Instead of splitting the work across several technical layers, the team keeps the UI, validation, business rules, and persistence for checkout together.
            </p>
            <p className="text-lg leading-relaxed mb-3">
              Another example is a password reset feature. The request form, email workflow, token validation, and password update logic can all live in one cohesive slice.
            </p>
            <p className="text-lg leading-relaxed mb-3">
              A good example of intentional duplication is user-related validation or lookup logic. In a layered architecture, teams often create one shared <code>UserService</code> or <code>UserRepository</code> for registration, login, profile updates, and password reset. In vertical slices, each of those features may keep its own request model, validation rules, and database query because the business rules are different and they change at different times.
            </p>
            <p className="text-lg leading-relaxed mb-3">
              That can look repetitive at first, but it helps prevent unrelated features from becoming tightly coupled through a shared abstraction. Registration should not become harder to change just because profile editing happens to use the same user table.
            </p>
            <p className="text-lg leading-relaxed">
              In both cases, the goal is the same: treat each feature as a complete unit that can be understood, changed, and shipped with minimal impact on the rest of the system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Code and File Structure Examples</h2>
            <p className="text-lg leading-relaxed mb-3">
              One simple way to picture vertical slices is to group files by feature instead of by technical role.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`src/
  features/
    checkout/
      CheckoutPage.tsx
      checkoutService.ts
      checkoutValidator.ts
      checkoutRepository.ts
    passwordReset/
      PasswordResetPage.tsx
      passwordResetService.ts
      passwordResetValidator.ts
      passwordResetRepository.ts`}
            </pre>

            <p className="text-lg leading-relaxed mt-4 mb-3">
              Here is a small example of a feature-oriented service:
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`// passwordResetService.ts
export async function resetPassword(email: string) {
  const user = await findUserByEmail(email);
  if (!user) return { success: false, message: 'User not found' };

  const token = createResetToken(user);
  await sendResetEmail(user.email, token);

  return { success: true, message: 'Reset email sent' };
}`}
            </pre>

            <p className="text-lg leading-relaxed mt-4 mb-3">
              Intentional duplication often shows up when two features both work with users but solve different problems. Instead of forcing both features through one shared service, each slice keeps its own small query and validation logic.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
                {`src/
  features/
    registerUser/
      RegisterUserPage.tsx
      registerUserHandler.ts
      registerUserValidator.ts
      registerUserRepository.ts
    updateProfile/
      UpdateProfilePage.tsx
      updateProfileHandler.ts
      updateProfileValidator.ts
      updateProfileRepository.ts`}
            </pre>

            <p className="text-lg leading-relaxed mt-4 mb-3">
              Both slices may query the same users table, but they do it independently because the business rules are different.
            </p>

            <pre className="bg-base-300 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
                {`// registerUserRepository.ts
export async function findUserByEmail(email: string) {
  return db.user.findUnique({ where: { email } });
}

export async function createUser(input: RegisterUserInput) {
  return db.user.create({ data: input });
}

// updateProfileRepository.ts
export async function findUserProfileById(userId: string) {
  return db.user.findUnique({ where: { id: userId } });
}

export async function updateUserProfile(userId: string, input: UpdateProfileInput) {
  return db.user.update({ where: { id: userId }, data: input });
}`}
            </pre>

            <p className="text-lg leading-relaxed mt-4">
              In another architecture, these functions might be merged into one shared <code>UserRepository</code>. In a vertical slice approach, keeping them separate is often the point. Registration and profile updates evolve independently, so their code stays close to the feature that owns it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Vertical slice architecture is a strong choice when you want software to stay practical, feature-oriented, and easy to change. It works especially well for fast-moving teams, as long as the team also maintains clear conventions and a shared understanding of the architecture.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">References</h2>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed pl-4">
              <li>
                <a href="https://www.jimmybogard.com/vertical-slice-architecture/" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Jimmy Bogard — Vertical Slice Architecture
                </a>
              </li>
              <li>
                <a href="https://www.architecture-weekly.com/p/my-thoughts-on-vertical-slices-cqrs" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Architecture Weekly — My Thoughts on Vertical Slices & CQRS
                </a>
              </li>
              <li>
                <a href="https://milanjovanovic.tech/blog/vertical-slice-architecture" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Milan Jovanović — Vertical Slice Architecture
                </a>
              </li>
              <li>
                <a href="https://www.underdog-blog.com/posts/choosing-an-architecture#vertical-slice-architecture" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  Underdog Blog — Choosing an Architecture
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}