'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Zap, 
  Code, 
  Smartphone, 
  Lightbulb, 
  Bot,
  CheckCircle,
  Star,
  Users,
  Award,
  Target,
  Globe,
  Clock,
  Calendar
} from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Applications',
      description: 'Custom web applications built with modern frameworks for scalable business solutions.',
      features: ['Responsive Design', 'Cloud Integration', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android platforms.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Optimization']
    },
    {
      icon: Lightbulb,
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development to validate your ideas quickly.',
      features: ['Rapid Prototyping', 'Market Validation', 'Cost-Effective']
    },
    {
      icon: Bot,
      title: 'AI Applications',
      description: 'Cutting-edge AI and machine learning solutions for intelligent systems.',
      features: ['Machine Learning', 'Natural Language Processing', 'Automation']
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of AI in Business Applications',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.',
      author: 'Alex Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'Learn the best practices for creating high-performance, scalable web applications using modern frameworks and cloud technologies.',
      author: 'Sarah Chen',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Web Development',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Mobile App Development Trends for 2024',
      excerpt: "Explore the latest trends in mobile app development and how they're shaping the future of user experience and business innovation.",
      author: 'Michael Rodriguez',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Mobile Development',
      image: '/api/placeholder/400/250'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Raymish Technology delivered an exceptional web application that transformed our business operations. Their expertise and attention to detail are unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, InnovateLab',
      content: 'The mobile app they developed exceeded our expectations. The team was professional, responsive, and delivered on time.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, DataFlow Solutions',
      content: 'Their AI solutions helped us automate complex processes and improve efficiency by 40%. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Zap className="w-3 h-3 mr-1" />
              Innovative Technology Solutions
            </Badge>
            {mounted && (
              <>
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                >
              Transform Your Business with
                  <span className={theme === 'light' ? 'text-black' : 'text-white'}>
                {' '}Cutting-Edge Technology
              </span>
            </h1>
                <p
                  className={`text-xl mb-8 max-w-3xl mx-auto ${theme === 'light' ? 'text-black/80' : 'text-white/80'}`}
                >
                  We specialize in web applications, mobile apps, MVP development, and AI solutions 
                  that drive growth and innovation for businesses.
                </p>
              </>
            )}
            {!mounted && (
              <>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Transform Your Business with
                  <span className="text-white">{' '}Cutting-Edge Technology</span>
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto text-white/80">
              We specialize in web applications, mobile apps, MVP development, and AI solutions 
                  that drive growth and innovation for businesses.
            </p>
              </>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/50 text-secondary-foreground">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we deliver end-to-end technology solutions 
              that help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Web Applications */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground">Web Applications</CardTitle>
                    <Badge className="ml-2 bg-green-100 text-green-800">Custom Solutions</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  <strong>SEO-Optimized, Scalable, and Secure Web Apps</strong><br/>
                  We build high-performance web applications tailored for your business, using the latest frameworks and cloud technologies. Our solutions are designed for speed, security, and search engine visibility, helping you reach more customers online.
                </CardDescription>
                <ul className="mb-4 list-disc list-inside text-sm text-muted-foreground">
                  <li>Responsive Design for all devices</li>
                  <li>Cloud Integration for global reach</li>
                  <li>Performance Optimization for fast load times</li>
                  <li>Industry-specific features (e.g., e-commerce, SaaS, portals)</li>
                </ul>
              </CardContent>
            </Card>
            {/* Mobile Applications */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-cyan-600 dark:text-cyan-300" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground">Mobile Applications</CardTitle>
                    <Badge className="ml-2 bg-purple-100 text-purple-800">iOS & Android</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  <strong>Native & Cross-Platform Mobile Apps</strong><br/>
                  We create beautiful, high-performance mobile apps for iOS and Android, optimized for user experience, discoverability, and app store rankings. Reach your audience wherever they are.
                </CardDescription>
                <ul className="mb-4 list-disc list-inside text-sm text-muted-foreground">
                  <li>Cross-Platform & Native Development</li>
                  <li>App Store Optimization (ASO)</li>
                  <li>Push Notifications & Analytics</li>
                  <li>Secure Payments & Integrations</li>
                </ul>
              </CardContent>
            </Card>
            {/* MVP Development */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground">MVP Development</CardTitle>
                    <Badge className="ml-2 bg-blue-100 text-blue-800">Rapid Launch</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  <strong>Validate Your Ideas Quickly</strong><br/>
                  We help you launch Minimum Viable Products (MVPs) fast, so you can test, iterate, and attract investors or early adopters. Our agile process ensures you get to market with confidence.
                </CardDescription>
                <ul className="mb-4 list-disc list-inside text-sm text-muted-foreground">
                  <li>Rapid Prototyping & Iteration</li>
                  <li>Market Validation & User Feedback</li>
                  <li>Cost-Effective Launch</li>
                  <li>Scalable Architecture for Growth</li>
                </ul>
              </CardContent>
            </Card>
            {/* AI Applications */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <Bot className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <CardTitle className="text-card-foreground">AI Applications</CardTitle>
                    <Badge className="ml-2 bg-pink-100 text-pink-800">Intelligent Solutions</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  <strong>Cutting-Edge AI & Machine Learning</strong><br/>
                  We deliver AI-powered solutions for automation, analytics, and customer engagement. Boost efficiency, gain insights, and stay ahead with our custom AI applications.
                </CardDescription>
                <ul className="mb-4 list-disc list-inside text-sm text-muted-foreground">
                  <li>Machine Learning & Predictive Analytics</li>
                  <li>Natural Language Processing (NLP)</li>
                  <li>Chatbots & Virtual Assistants</li>
                  <li>Process Automation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Use Cases Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-background dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Industry Use Cases
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Solutions Tailored for Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Raymish delivers technology that fits your business. Explore how our services empower different industries to grow, innovate, and lead.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Globe className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">E-Commerce</h3>
              <p className="text-muted-foreground">Boost online sales with custom storefronts, secure payments, and AI-driven recommendations. Our web and mobile apps help you reach customers worldwide.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Smartphone className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Healthcare</h3>
              <p className="text-muted-foreground">Enable telemedicine, patient portals, and secure data management. Our HIPAA-compliant solutions improve care and streamline operations.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Lightbulb className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Startups & Innovation</h3>
              <p className="text-muted-foreground">Launch MVPs, validate ideas, and scale fast. We help entrepreneurs and innovators turn concepts into market-ready products.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Finance</h3>
              <p className="text-muted-foreground">Secure, compliant fintech solutions for banking, payments, and analytics. Drive trust and efficiency with our custom platforms.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Bot className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">AI & Automation</h3>
              <p className="text-muted-foreground">Automate workflows, analyze data, and engage customers with AI-powered tools. Stay ahead in a digital-first world.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Enterprises</h3>
              <p className="text-muted-foreground">Modernize legacy systems, integrate cloud solutions, and drive digital transformation at scale. We partner with enterprises for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Latest Insights
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in technology and business innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border overflow-hidden">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Blog Image</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How to Collaborate with Raymish */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-background dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              How to Collaborate with Raymish
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Seamless Collaboration for Global Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with Raymish for innovative, scalable, and future-ready technology solutions. Our proven process ensures clarity, transparency, and results—no matter where you are in the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">1. Connect & Discover</h3>
              <p className="text-muted-foreground">Schedule a free consultation to discuss your goals, challenges, and vision. We listen, analyze, and propose tailored solutions for your business and region.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Lightbulb className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">2. Strategize & Plan</h3>
              <p className="text-muted-foreground">Our experts design a roadmap with clear milestones, transparent pricing, and agile methodology. We optimize for search engines, answer engines, and local markets (SEO, AEO, GEO).</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Globe className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">3. Build, Launch & Grow</h3>
              <p className="text-muted-foreground">We deliver, iterate, and support your project with global best practices. Our team ensures your solution ranks, answers, and performs—attracting leads and driving growth worldwide.</p>
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Link href="/contact">
                Start Your Collaboration
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
              Ready to elevate your business? Raymish is your trusted partner for digital transformation, local and global reach, and sustainable success. Contact us today for a personalized strategy session.
            </p>
          </div>
                  </div>
      </section>

      {/* Why Choose Raymish Technology Solutions? */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-background dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Why Choose Raymish Technology Solutions?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Trusted Partner for Digital Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover why businesses worldwide trust Raymish for innovative, reliable, and scalable technology solutions. We combine local expertise with global reach to deliver results that matter.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Proven Track Record</h3>
              <p className="text-muted-foreground">100+ successful projects, 50+ happy clients, and 5+ years of experience. Our portfolio spans industries and continents, ensuring your project is in expert hands.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Target className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Results-Driven Approach</h3>
              <p className="text-muted-foreground">We focus on measurable outcomes: higher search rankings (SEO), better answer visibility (AEO), and local/global discoverability (GEO). Your growth is our mission.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Globe className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Global & Local Expertise</h3>
              <p className="text-muted-foreground">From startups to enterprises, we tailor solutions for your market—leveraging the latest tech, local insights, and global best practices for maximum impact.</p>
            </div>
                  </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Link href="/contact">
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
              Ready to experience the Raymish advantage? Contact us today to unlock your business’s full digital potential with a partner who cares about your success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your technology goals and drive innovation in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}