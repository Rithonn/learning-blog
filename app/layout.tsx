import type { Metadata } from 'next';
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
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}