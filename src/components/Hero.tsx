import React from 'react';
import { COLORS } from '../constants/colors';
import Reveal from './Reveal';

const handleScroll = () => {
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};
const handleScroll2 = () => {
  const contactSection = document.getElementById('projects');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};
const Hero = () => {


  return (
    <section
      id="home"
      // className="relative bg-gradient-to-br from-amber-900 to-amber-950 text-white overflow-hidden"
      className="relative text-white overflow-hidden"
      style={{ backgroundColor: COLORS.primary }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{

        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <Reveal>
              <p className="text-lg lg:text-xl mb-8" style={{ color: COLORS.onPrimary }}>
                Hello, I'm
              </p>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span style={{ color: COLORS.secondary }}>Full-Stack</span>{' '}
                <span style={{ color: '#ffffff' }}>Developer</span>
              </h1>
            </Reveal>
            <Reveal delay={400}>
              <p className="text-base lg:text-lg mb-8 max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
                Full-stack and mobile developer specializing in React, React Native, Django REST Framework, and PostgreSQL — with hands-on experience in authentication, RBAC, and REST API design. Now exploring AI agent engineering and LLM-powered workflows.
              </p>
            </Reveal>
            <Reveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                <button
                  onClick={handleScroll}
                  style={{ backgroundColor: COLORS.secondary, color: COLORS.onsecondary }}
                  className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors"
                >
                  Let's Connect
                </button>

                <button
                  onClick={handleScroll2}
                  style={{ backgroundColor: 'transparent', color: '#ffffff', border: `1px solid ${COLORS.secondary}` }}
                  className="px-8 py-4 rounded-lg font-semibold transition-colors hover:opacity-90"
                >
                  View Projects
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
