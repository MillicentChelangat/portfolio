import React from 'react';
import { GraduationCap, MapPin, ShieldCheck } from 'lucide-react';
import { COLORS } from '../constants/colors';
import Reveal from './Reveal';

const facts = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Education',
    text: 'BSc Computer Technology, Multimedia University of Kenya (2021 – 2025)'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Based in',
    text: 'Nairobi, Kenya'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Focus',
    text: 'Secure full-stack and mobile apps: authentication, role-based access, and PostgreSQL Row Level Security'
  }
];

const competencies = [
  'Full-Stack Development',
  'REST API Design & Integration',
  'Authentication & RBAC (JWT)',
  'Relational Database Design',
  'Git/GitHub',
  'Agile Development',
  'Functional & Integration Testing',
  'Problem-Solving & Debugging',
  'Technical Documentation',
  'Fast Self-Directed Learning'
];

const About = () => (
  <section
    id="about"
    className="py-20 text-white"
    style={{ backgroundColor: COLORS.primary }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Title */}
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span style={{ color: COLORS.secondary }}>Me</span>
          </h2>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">
            From database design to deployment, I build applications that are secure, reliable, and actually get used.
          </p>
        </div>
      </Reveal>

      {/* Bio */}
      <Reveal delay={150}>
        <div
          className="rounded-2xl border border-white/10 p-8 mb-8"
          style={{ backgroundColor: '#152D45' }}
        >
          <p className="text-lg leading-relaxed opacity-90 mb-6">
            I'm a <span className="font-semibold" style={{ color: COLORS.secondary }}>Junior Software Engineer</span> with
            hands-on full-stack and mobile development experience using React, TypeScript, React Native,
            Django REST Framework, PostgreSQL, and Supabase.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            I've built independent end-to-end applications involving authentication, role-based access control,
            REST APIs, and secure data access through PostgreSQL Row Level Security. I pick up unfamiliar tools quickly through practical projects, and I care about building things that are reliable and easy to maintain.
          </p>
        </div>
      </Reveal>

      {/* Facts */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {facts.map((fact, i) => (
          <Reveal key={i} delay={i * 200} className="h-full">
            <div
              className="h-full p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{ backgroundColor: '#152D45' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -15px ${COLORS.secondary}40`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(53,241,226,0.1)', color: COLORS.secondary }}
              >
                {fact.icon}
              </div>
              <p className="text-xs uppercase tracking-wide opacity-60 mb-1">{fact.title}</p>
              <p className="font-medium leading-snug">{fact.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Core Competencies */}
      <Reveal>
        <h3 className="text-2xl font-bold text-center mb-8">
          Core <span style={{ color: COLORS.secondary }}>Competencies</span>
        </h3>
      </Reveal>

      <Reveal delay={150}>
        <div className="flex flex-wrap justify-center gap-3">
          {competencies.map((item, i) => (
            <span
              key={i}
              className="text-sm px-4 py-2 rounded-full border transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: COLORS.secondary, color: COLORS.secondary }}
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>

    </div>
  </section>
);

export default About;