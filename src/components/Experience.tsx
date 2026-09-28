import React, { useEffect, useRef, useState } from 'react';
import { COLORS } from '../constants/colors';
import Reveal from './Reveal';

const experience = [
  {
    role: "ICT Intern",
    company: "Ministry of Education",
    dates: "June 2025 – September 2025",
    points: [
      "Performed end-to-end functional testing of enrolment and registration workflows on NEMIS, validating new functionality before deployment.",
      "Gathered and translated business requirements into documented findings for system improvements.",
      "Assisted in developing dashboards and status reports used by stakeholders to track performance.",
      "Documented system changes and maintained audit trails for governance and compliance."
    ]
  },
  {
    role: "IT Attachee",
    company: "Technical and Vocational Education and Training Authority (TVETA)",
    dates: "May 2023 – August 2023",
    points: [
      "Acted as first point of contact for technical support, coordinating resolution with relevant teams.",
      "Participated in functional and integration testing during software updates.",
      "Supported software deployment, system monitoring, and data backup procedures.",
      "Maintained project documentation and technical specifications."
    ]
  }
];

// Wraps each timeline entry so it can detect when it scrolls into view
const TimelineItem = ({ job, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only animate in once
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Dot marker on the center line */}
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
        style={{ backgroundColor: COLORS.secondary }}
      ></div>

      {/* Card — alternates left/right on desktop, stacks on mobile */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
        <div
          className="rounded-lg border border-white/10 px-6 py-4 transition-all duration-300 hover:-translate-y-2 cursor-default"
          style={{ backgroundColor: '#152D45' }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -15px ${COLORS.secondary}40`)}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
        >
          <div className="flex flex-wrap items-baseline gap-2 mb-1" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
            <h3 className="text-lg font-semibold">{job.role}</h3>
          </div>
          <p className="text-sm mb-1" style={{ color: COLORS.secondary }}>{job.company}</p>
          <p className="text-xs opacity-60 mb-3">{job.dates}</p>
          <ul className="space-y-1.5" style={{ textAlign: isLeft ? 'right' : 'left' }}>
            {job.points.map((point, i) => (
              <li key={i} className="text-sm opacity-80 leading-relaxed">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="py-20 text-white" style={{ backgroundColor: COLORS.primary }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span style={{ color: COLORS.secondary }}>Experience</span>
          </h2>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">
            Hands-on experience across development, testing, and system support.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        {/* The connecting vertical line */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
        ></div>

        {experience.map((job, index) => (
          <TimelineItem key={index} job={job} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;