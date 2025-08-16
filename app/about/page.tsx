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
  Star
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

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      description: 'Full-stack developer with 8+ years of experience in building scalable web applications.',
      skills: ['React', 'Node.js', 'AWS', 'Leadership']
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Mobile Developer',
      description: 'Mobile app specialist with expertise in React Native and Flutter development.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      name: 'Michael Rodriguez',
      role: 'AI/ML Engineer',
      description: 'AI specialist focused on machine learning, NLP, and computer vision solutions.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI']
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      description: 'Creative designer passionate about creating intuitive and beautiful user experiences.',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
    }
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
              Building Tomorrow's Technology Today
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Raymish Technology Solutions, we're passionate about creating innovative 
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

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Our Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet the Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of talented professionals brings together years of experience 
              and expertise in various technology domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-card border-border">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
              here's our journey of growth and innovation.
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the growing list of satisfied clients who have transformed their businesses with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
              <Link href="/contact">
                Start Your Project
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
      </section>
    </div>
  );
}