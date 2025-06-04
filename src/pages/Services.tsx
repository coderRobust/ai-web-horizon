
import React from 'react';
import Layout from '@/components/Layout';
import { Bot, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation Platform",
      description: "Comprehensive automation tools powered by advanced LLMs",
      features: [
        "Natural language processing",
        "Intelligent workflow automation",
        "Custom AI model training",
        "Real-time decision making"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Database,
      title: "Enterprise AI Integration",
      description: "Seamless integration with your existing enterprise systems",
      features: [
        "API-first architecture",
        "Legacy system compatibility",
        "Custom integration solutions",
        "Scalable cloud deployment"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Enterprise-grade security for AI implementations",
      features: [
        "Data privacy protection",
        "Compliance frameworks",
        "Secure AI model deployment",
        "Audit and monitoring tools"
      ],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Maximize efficiency with optimized AI solutions",
      features: [
        "Model performance tuning",
        "Cost optimization",
        "Speed enhancement",
        "Resource management"
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const industries = [
    { name: "Healthcare", description: "AI-powered diagnostics and patient care optimization" },
    { name: "Finance", description: "Automated trading, risk assessment, and fraud detection" },
    { name: "Manufacturing", description: "Predictive maintenance and quality control automation" },
    { name: "Retail", description: "Personalized customer experiences and inventory optimization" },
    { name: "Technology", description: "Code generation, testing automation, and DevOps enhancement" },
    { name: "Education", description: "Personalized learning and administrative automation" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive AI-powered tools and services designed to transform your business operations and drive intelligent automation across your enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to implementing AI solutions that deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and AI opportunities" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive AI implementation roadmap" },
              { step: "03", title: "Development", description: "Building and training custom AI models for your use case" },
              { step: "04", title: "Deployment", description: "Seamless integration and ongoing optimization support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how CerevynAI can transform your business with intelligent automation and AI-powered solutions.
          </p>
          
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
