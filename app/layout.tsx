import type { Metadata } from 'next';
import Sidebar from './components/sidebar/Sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Learning Blog',
  description: 'A simple learning blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}