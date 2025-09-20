'use client';
import Link from 'next/link';
import { Code, Github, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
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
              <li><a href="/blog" className="hover:text-foreground transition-colors">Blogs</a></li>
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