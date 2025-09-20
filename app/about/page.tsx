'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Users, 
  Award, 
  Target, 
  Globe,
  Shield,
  Clock,
  Zap,
  Heart,
  ArrowRight,
  CheckCircle,
  Code,
  Lightbulb,
  Rocket,
  Star,
  Smartphone,
  Bot
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code, every design element, and every feature is crafted with precision and attention to detail.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines. Our agile development process ensures projects are delivered on time, every time.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with clients to understand their needs and deliver solutions that exceed expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends and continuously explore new ways to solve complex problems.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed', icon: Rocket },
    { number: '50+', label: 'Happy Clients', icon: Heart },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];


  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started as a small team with a vision to transform businesses through technology.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Delivered our first enterprise-level web application, establishing our reputation.'
    },
    {
      year: '2021',
      title: 'Mobile Expansion',
      description: 'Expanded services to include mobile app development for iOS and Android.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Added AI and machine learning capabilities to our service offerings.'
    },
    {
      year: '2023',
      title: '50+ Projects',
      description: 'Reached the milestone of 50+ successful project deliveries.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Expanded to serve clients across multiple countries and time zones.'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Building Tomorrow&apos;s Technology Today
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Raymish Technology Solutions, we&apos;re passionate about creating innovative 
              technology solutions that drive business success. Our team of experienced 
              developers and designers work closely with clients to deliver exceptional results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card border-border">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/50 text-secondary-foreground">
                Our Mission
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Empowering Businesses Through Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to help businesses of all sizes leverage cutting-edge technology 
                to achieve their goals, streamline operations, and create exceptional user experiences. 
                We believe that great technology should be accessible, reliable, and transformative.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Deliver high-quality, scalable solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Foster long-term client relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Stay at the forefront of technology</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 bg-card border-border">
                  <value.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Our Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Cutting-Edge Technology Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in delivering comprehensive technology solutions that drive business growth, 
              enhance user experiences, and optimize operational efficiency across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <Code className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Web Applications</h3>
              <p className="text-muted-foreground mb-4">
                Custom web applications built with React, Next.js, and Node.js for scalable business solutions.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cloud Integration</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Performance Optimized</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <Smartphone className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Mobile Applications</h3>
              <p className="text-muted-foreground mb-4">
                Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cross-Platform</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>App Store Ready</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Real-time Sync</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">MVP Development</h3>
              <p className="text-muted-foreground mb-4">
                Rapid prototyping and MVP development to validate ideas and bring products to market faster.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Rapid Prototyping</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Market Validation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cost-Effective</span>
                </div>
              </div>
            </Card>

            <Card className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <Bot className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">AI Applications</h3>
              <p className="text-muted-foreground mb-4">
                Cutting-edge AI and machine learning solutions including chatbots, automation, and intelligent systems.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Machine Learning</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Process Automation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Predictive Analytics</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/50 text-secondary-foreground">
              Industry Solutions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our technology solutions are designed to address the unique challenges and opportunities 
              across various industries, helping businesses achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">E-commerce & Retail</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Custom e-commerce platforms, mobile shopping apps, and AI-powered recommendation systems 
                to boost sales and enhance customer experience.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Online Store Development</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Payment Integration</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Inventory Management</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Healthcare & MedTech</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                HIPAA-compliant healthcare applications, telemedicine platforms, and AI-powered diagnostic 
                tools to improve patient care and streamline operations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Telemedicine Platforms</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Patient Management Systems</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI Diagnostics</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">FinTech & Banking</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Secure financial applications, digital banking solutions, and blockchain-based systems 
                to modernize financial services and enhance security.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Digital Banking Apps</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Payment Processing</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Blockchain Solutions</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">SaaS & Startups</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Scalable SaaS platforms, startup MVPs, and cloud-based solutions to help businesses 
                launch quickly and scale efficiently.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>MVP Development</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cloud Infrastructure</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Scalable Architecture</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-red-600 dark:text-red-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Education & EdTech</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Learning management systems, educational mobile apps, and AI-powered tutoring platforms 
                to enhance learning experiences and outcomes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Learning Management Systems</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Educational Mobile Apps</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI Tutoring Systems</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-teal-600 dark:text-teal-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Manufacturing & IoT</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Industrial IoT solutions, manufacturing automation systems, and predictive maintenance 
                applications to optimize production and reduce costs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>IoT Integration</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Process Automation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Predictive Analytics</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Proven Development Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures successful project delivery, from initial concept to final deployment. 
              We follow industry best practices and agile methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Discovery & Planning</h3>
              <p className="text-muted-foreground">
                We start by understanding your business goals, target audience, and technical requirements 
                to create a comprehensive project roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Design & Prototyping</h3>
              <p className="text-muted-foreground">
                Our design team creates intuitive user interfaces and user experiences, followed by 
                interactive prototypes for validation and feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Development & Testing</h3>
              <p className="text-muted-foreground">
                Using agile methodologies, we develop your solution in iterative sprints with continuous 
                testing and quality assurance throughout the process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Deployment & Support</h3>
              <p className="text-muted-foreground">
                We handle deployment, launch, and provide ongoing support and maintenance to ensure 
                your solution continues to perform optimally.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get a free consultation and project estimate. Our experts will analyze your requirements 
              and provide a detailed proposal tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/50 text-secondary-foreground">
              Our Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Company Milestones
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted technology partner, 
              here&apos;s our journey of growth and innovation.  
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative bg-card border-border">
                <CardHeader>
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  <CardTitle className="text-card-foreground">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {milestone.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Raymish Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Leading Companies Choose Raymish
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise, industry experience, and a client-first approach 
              to deliver solutions that drive real business results and competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Proven Track Record</h3>
              </div>
              <p className="text-muted-foreground">
                With 100+ successful projects and 50+ satisfied clients, we have a proven track record 
                of delivering high-quality solutions on time and within budget.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Security & Compliance</h3>
              </div>
              <p className="text-muted-foreground">
                We prioritize security and compliance in all our solutions, implementing industry-standard 
                security measures and following best practices for data protection.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Cutting-Edge Technology</h3>
              </div>
              <p className="text-muted-foreground">
                We stay ahead of technology trends, using the latest frameworks, tools, and methodologies 
                to build future-proof solutions that scale with your business.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Dedicated Support</h3>
              </div>
              <p className="text-muted-foreground">
                Our 24/7 support team ensures your applications run smoothly with proactive monitoring, 
                maintenance, and rapid response to any issues.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-teal-600 dark:text-teal-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Global Reach</h3>
              </div>
              <p className="text-muted-foreground">
                We serve clients across multiple countries and time zones, providing flexible engagement 
                models and understanding diverse market requirements.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-red-600 dark:text-red-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Client Satisfaction</h3>
              </div>
              <p className="text-muted-foreground">
                Our client-centric approach and focus on long-term partnerships have resulted in 
                high satisfaction rates and numerous repeat engagements.
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join the Growing List of Success Stories
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your business with cutting-edge technology? Let&apos;s discuss how  
              our solutions can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
                <Link href="/contact">
                  Start Your Project Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/50 text-secondary-foreground">
              Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses across various industries achieve their digital 
              transformation goals and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground">Retail Industry</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;Raymish transformed our online presence with a custom e-commerce platform that increased 
                our sales by 300% and improved customer satisfaction significantly.&quot;
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5.0 Rating</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Mobile Banking App</h3>
                  <p className="text-sm text-muted-foreground">Financial Services</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;The mobile banking app developed by Raymish has revolutionized our customer experience, 
                with 95% user satisfaction and 50% reduction in support tickets.&quot;
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5.0 Rating</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">AI-Powered Analytics</h3>
                  <p className="text-sm text-muted-foreground">Healthcare</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                &quot;Their AI solution helped us reduce diagnostic time by 60% and improve accuracy by 40%, 
                transforming our patient care capabilities.&quot;
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5.0 Rating</span>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
              <Link href="/contact">
                Share Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Get Started Today
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transform Your Business with 
              <span className="text-primary"> Cutting-Edge Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join 50+ successful companies who have accelerated their growth with our comprehensive 
              technology solutions. Get a free consultation and discover how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a free consultation with our experts. We&apos;ll analyze your requirements,   
                  discuss your goals, and provide a detailed proposal tailored to your business needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Free consultation & project analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Detailed proposal with timeline & pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">No obligation, transparent communication</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
                  <Link href="/services">
                    Explore Our Services
                  </Link>
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Or call us directly: <span className="font-semibold text-foreground">+1 (555) 123-4567</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Trusted by companies worldwide • 24/7 Support • 100% Satisfaction Guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}