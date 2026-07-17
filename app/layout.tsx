import type { Metadata } from 'next';
import { ViewTransition } from 'react';
import './globals.css';
import { SidebarProvider } from './context/SidebarContext';
import Sidebar from './components/sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'Dev Journal',
  description: 'A personal blog about software development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <Sidebar />
          <ViewTransition enter="page-enter" exit="page-exit">
            {children}
          </ViewTransition>
        </SidebarProvider>
      </body>
    </html>
  );
}