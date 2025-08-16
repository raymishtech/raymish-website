'use client';
import Link from 'next/link';
import { Code, Github, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useTheme } from 'next-themes';
import React from 'react';

function RaymishLogo({ className = '', style = {} }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  if (!mounted) {
    return (
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <rect width="120" height="32" fill="transparent" />
      </svg>
    );
  }
  return (
    <svg
      width="120"
      height="32"
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect width="120" height="32" fill="transparent" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="bold"
        fontSize="22"
        fill={theme === 'dark' ? '#fff' : '#111'}
        letterSpacing="2"
      >
        Raymish
      </text>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <RaymishLogo className="h-8 w-auto" style={{ maxWidth: '120px' }} />
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/services" className="hover:text-foreground transition-colors">Web Applications</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">MVP Development</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">AI Applications</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Our Team</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2024 Raymish Technology Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}