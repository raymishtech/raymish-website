'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X, Code } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';
import Image from 'next/image';

function RaymishLogo({ className = '', style = {} }) {
  return (
    <div className={className} style={style}>
      <Image
        src="/raymish%20logo%20lighttheme.png"
        alt="Raymish logo"
        width={120}
        height={32}
        className="block dark:hidden h-8 w-auto"
        priority
      />
      <Image
        src="/raymish%20logo%20darktheme.png"
        alt="Raymish logo"
        width={120}
        height={32}
        className="hidden dark:block h-8 w-auto"
        priority
      />
    </div>
  );
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <RaymishLogo className="h-8 w-auto" style={{ maxWidth: '120px' }} />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}