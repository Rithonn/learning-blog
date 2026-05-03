'use client';
import { useSidebar } from '@/app/context/SidebarContext';
import { useState } from 'react';
import Link from 'next/link';
import { Home, FileText, BookOpen, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Purpose', href: '/purpose', icon: FileText },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Other', href: '/other', icon: MoreHorizontal },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-base-200 text-base-content transition-all duration-300 z-40 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 hover:bg-base-300 w-full flex items-center justify-center transition-colors"
        >
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded hover:bg-base-300 transition-colors flex items-center gap-4"
              >
                <Icon size={24} className="flex-shrink-0" />
                {isOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Spacer to push content right */}
      <div className={isOpen ? 'ml-64' : 'ml-20'} />
    </>
  );
}