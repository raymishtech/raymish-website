'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  Globe
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tech@raymish.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-8754494846',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Adyar Chennai',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon-Fri: 8am-6pm IST',
      description: 'We respond within 24 hours'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive maintenance and support packages to keep your applications running smoothly.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We specialize in modern technologies including React, Next.js, Node.js, React Native, Python, and various AI/ML frameworks.'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! We can help improve, maintain, or add features to your existing applications.'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                projectType: '',
                budget: '',
                message: ''
              });
            }}
            variant="outline"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              We&apos;d love to hear about your project and discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Send us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91-1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="web-app">Web Application</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="mvp">MVP Development</option>
                        <option value="ai-app">AI Application</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.value}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/50 text-secondary-foreground">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Raymish Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Why Choose Raymish
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Leading Companies Contact Raymish First
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t let your competitors get ahead. Contact us today to discover how our technology 
              solutions can transform your business and give you the competitive edge you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Free Consultation</h3>
              </div>
              <p className="text-muted-foreground">
                Get expert advice on your project at no cost. Our team will analyze your requirements 
                and provide actionable insights to help you make informed decisions.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">24-Hour Response</h3>
              </div>
              <p className="text-muted-foreground">
                We understand time is money. That&apos;s why we guarantee a response within 24 hours 
                to all inquiries, ensuring you never miss a business opportunity.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">No Obligation</h3>
              </div>
              <p className="text-muted-foreground">
                Our initial consultation comes with no strings attached. We&apos;re here to help you   
                succeed, whether you choose to work with us or not.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Global Expertise</h3>
              </div>
              <p className="text-muted-foreground">
                With experience serving clients worldwide, we understand diverse market requirements 
                and can help you scale your business globally.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-teal-600 dark:text-teal-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Flexible Scheduling</h3>
              </div>
              <p className="text-muted-foreground">
                We work around your schedule. Book a call at your convenience, including evenings 
                and weekends, to discuss your project requirements.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-red-600 dark:text-red-300" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">Quick Start</h3>
              </div>
              <p className="text-muted-foreground">
                Ready to get started immediately? We can begin your project within days of 
                initial contact, helping you launch faster than your competitors.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don&apos;t Wait - Your Competitors Aren&apos;t
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Every day you wait is a day your competitors get ahead. Contact us now and let&apos;s 
                discuss how we can help you dominate your market with cutting-edge technology.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
                <a href="#contact-form">
                  Start Your Project Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Happens After You Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;ve streamlined our process to get you from initial contact to project launch 
              as quickly and efficiently as possible. Here&apos;s exactly what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Initial Response</h3>
              <p className="text-muted-foreground">
                Within 24 hours, our team will review your inquiry and send you a detailed response 
                with next steps and preliminary questions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Consultation</h3>
              <p className="text-muted-foreground">
                We&apos;ll schedule a 30-60 minute consultation call to discuss your project in detail, 
                understand your goals, and answer all your questions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Proposal & Quote</h3>
              <p className="text-muted-foreground">
                Within 2-3 business days, you&apos;ll receive a comprehensive proposal with timeline, 
                pricing, and detailed project specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Project Kickoff</h3>
              <p className="text-muted-foreground">
                Once approved, we&apos;ll begin your project within 1-2 weeks, starting with detailed  
                planning and design phases.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Don&apos;t wait another day. Every moment you delay is a moment your competitors get ahead. 
                Contact us now and let&apos;s discuss how we can help you achieve your goals.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
                <a href="#contact-form">
                  Start Your Project Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Guarantees Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Our Guarantees
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Success is Our Guarantee
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re so confident in our ability to deliver exceptional results that we back   
              our work with comprehensive guarantees and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">100% Satisfaction</h3>
              <p className="text-muted-foreground">
                We guarantee your complete satisfaction with our work. If you&apos;re not happy, 
                we&apos;ll make it right or refund your money.
              </p>
            </Card>

            <Card className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                We commit to delivering your project on time, every time. Late delivery means 
                automatic discounts on your final invoice.
              </p>
            </Card>

            <Card className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Support Team</h3>
              <p className="text-muted-foreground">
                Our support team is available around the clock to help you with any issues 
                or questions you may have.
              </p>
            </Card>

            <Card className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Lifetime Updates</h3>
              <p className="text-muted-foreground">
                We provide lifetime updates and security patches for all our applications 
                to keep them running smoothly and securely.
              </p>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
}