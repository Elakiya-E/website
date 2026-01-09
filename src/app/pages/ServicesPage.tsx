import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Target, Zap, CheckCircle2, ArrowRight, BarChart3, MessageSquare, Users, Shield, Globe, Cpu, Sparkles, Building2, Scale, Rocket } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ServicesPage() {
  const solutions = [
    {
      id: 'retrofit',
      icon: <Building2 className="w-16 h-16" />,
      title: 'Retrofit & Energy',
      subtitle: 'Driving High-Intent Homeowner Demand at Scale',
      description: 'Retrofit and energy businesses operate in a trust-driven, incentive-led market. AdSyncro helps you attract, qualify, and convert homeowners using AI-optimized journeys aligned with grants, subsidies, and compliance requirements.',
      image: 'https://images.unsplash.com/photo-1631277190979-1704e8c7d574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW5zdWxhdGlvbiUyMHJldHJvZml0fGVufDF8fHx8MTc2NjU2MjYwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      enable: [
        'Homeowner & postcode-level targeting',
        'Grant- and incentive-aligned messaging',
        'Conversion-focused landing systems',
        'Automated lead qualification & routing',
        'Performance tracking across the funnel'
      ],
      outcomes: [
        'Higher quality retrofit leads',
        'Reduced acquisition costs',
        'Predictable, scalable demand'
      ],
      cta: 'Get a Free Retrofit Audit',
      color: '#1fb57a',
    },
    {
      id: 'regulated',
      icon: <Scale className="w-16 h-16" />,
      title: 'Regulated Services',
      subtitle: 'Compliance-Ready Growth Systems',
      description: 'For regulated industries, growth must balance performance with precision. AdSyncro provides AI-powered systems built with compliance, data security, and auditability at the core.',
      designedFor: [
        'Financial services',
        'Healthcare',
        'Legal & professional services',
        'Any compliance-led sector'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NjU1OTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      enable: [
        'Lead validation & filtering',
        'Approval-based workflows',
        'Privacy-first data handling',
        'Audit-ready tracking & reporting',
        'Controlled automation'
      ],
      outcomes: [
        'Safer lead generation',
        'Reduced operational risk',
        'Transparent, compliant growth'
      ],
      cta: 'Request a Compliance-Ready Audit',
      color: '#16a5b2',
    },
    {
      id: 'digital',
      icon: <Rocket className="w-16 h-16" />,
      title: 'Digital Growth (SMEs)',
      subtitle: 'Automation-Led Scaling for Growing Businesses',
      description: 'SMEs need efficiency before scale. AdSyncro helps growing businesses implement AI-driven systems that reduce manual work while improving performance.',
      image: 'https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjUxMzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      enable: [
        'AI-assisted campaign execution',
        'CRM-driven pipelines',
        'Automated follow-ups & scoring',
        'Real-time performance dashboards'
      ],
      outcomes: [
        'Faster growth without added headcount',
        'Better visibility into performance',
        'Scalable, repeatable systems'
      ],
      cta: 'Get a Free Growth Audit',
      color: '#1fb57a',
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block px-4 py-2 bg-[#1fb57a]/10 rounded-full border border-[#1fb57a]/20 mb-6"
            >
              <span className="text-sm font-semibold text-[#1fb57a]">Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#102028]">
              AI-Powered Growth Solutions <span className="text-[#1fb57a]">by Industry</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AdSyncro delivers intelligent growth systems designed around industry realities — not generic marketing tactics. Each solution combines AI automation, data intelligence, and performance optimization to drive predictable outcomes.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#1fb57a] text-white rounded-lg hover:bg-[#1a9d69] transition-all duration-300 shadow-lg"
              >
                Find Your Solution
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    className="inline-block p-4 bg-gradient-to-br from-[#1fb57a]/10 to-[#16a5b2]/10 rounded-2xl mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div style={{ color: solution.color }}>
                      {solution.icon}
                    </div>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#102028] mb-2">{solution.title}</h2>
                  <h3 className="text-xl font-semibold text-[#1fb57a] mb-4">{solution.subtitle}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  {solution.designedFor && (
                    <div className="mb-6">
                      <h4 className="font-bold text-[#102028] mb-3 border-b border-gray-100 pb-2">Designed For</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {solution.designedFor.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-[#16a5b2]" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="font-bold text-[#102028] mb-4">What We Enable</h4>
                    <ul className="space-y-3">
                      {solution.enable.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#1fb57a] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-[#102028] mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#16a5b2]" />
                      Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {solution.outcomes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-[#1fb57a] rounded-full" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-[#1fb57a] text-white rounded-lg hover:bg-[#1a9d69] transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102028]/60 via-transparent to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose & Primary CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#102028] rounded-3xl p-8 md:p-16 relative overflow-hidden text-white shadow-2xl"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#1fb57a]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#16a5b2]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                How to Choose the Right Solution
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Not sure where you fit? Our audit identifies the right solution based on your industry, data maturity, and growth goals.
              </p>

              <div className="flex flex-col items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#1fb57a] text-white rounded-lg hover:bg-[#1a9d69] transition-all duration-300 shadow-lg font-bold text-lg"
                >
                  Get a Free Audit
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Sparkles className="w-4 h-4 text-[#1fb57a]" />
                  <span>We’ll respond within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
