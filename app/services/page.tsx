'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Code, 
  Smartphone, 
  Lightbulb, 
  Bot,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Shield,
  Zap,
  Users,
  Palette,
  Search,
  BarChart,
  Cloud,
  Cpu,
  Eye,
  MessageSquare
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Applications',
      description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js for scalable business solutions.',
      features: [
        'Responsive Design',
        'Cloud Integration',
        'Performance Optimization',
        'Security First',
        'SEO Optimized',
        'Progressive Web Apps'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      pricing: 'Starting from $5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Real-time Sync'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      pricing: 'Starting from $8,000'
    },
    {
      icon: Lightbulb,
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development to validate your ideas and bring products to market faster.',
      features: [
        'Rapid Prototyping',
        'Market Validation',
        'Cost-Effective Solutions',
        'Agile Development',
        'User Testing',
        'Iterative Improvement'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'CI/CD'],
      pricing: 'Starting from $3,000'
    },
    {
      icon: Bot,
      title: 'AI Applications',
      description: 'Cutting-edge AI and machine learning solutions including chatbots, automation, and intelligent systems.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Process Automation',
        'Predictive Analytics',
        'Custom AI Solutions'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS AI'],
      pricing: 'Starting from $10,000'
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Efficient database architecture and performance optimization for your applications.'
    },
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments and implementation of best practices.'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications to cloud platforms like AWS, Azure, or GCP.'
    },
    {
      icon: BarChart,
      title: 'Analytics Integration',
      description: 'Implementation of analytics tools to track user behavior and business metrics.'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search engine optimization to improve your online visibility and rankings.'
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Strategic technology consulting to help you make informed decisions.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes to visualize the solution.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your application using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure quality, performance, and security standards.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launch your application with proper monitoring and support systems in place.'
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and enhancements to keep your application running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From web applications to AI solutions, we provide end-to-end technology services 
              that help businesses innovate, scale, and succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden bg-card border-border">
                <div className="grid lg:grid-cols-2 gap-8">
                  <CardHeader className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">{service.pricing}</div>
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 bg-muted/50">
                    <h4 className="font-semibold text-card-foreground mb-4">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-background text-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to enhance and maintain your technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/50 text-secondary-foreground">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven development process ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="relative bg-card border-border">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">{step.step}</div>
                  <CardTitle className="text-card-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
              <Link href="/about">
                Learn About Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}