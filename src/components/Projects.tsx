import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { COLORS } from '../constants/colors';
import Reveal from '../components/Reveal';

const Projects = () => {
  const projects = [
    {
      title: "CIC Micro-Shield",
      category: "Mobile",
      description: "A mobile micro-insurance app built independently with Expo Router and React Query. Real user authentication and a Postgres backend via Supabase, including Row Level Security policies on profiles, policies, and claims tables.",
      tech: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
      github: "https://github.com/MillicentChelangat/cic-micro-shield",
      image: "/images/projects/cic-microshield.png"
    },
    {
      title: "SmartSeason Field Monitoring System",
      category: "Web App",
      description: "Role-based dashboards giving administrators and field agents access to information relevant to their responsibilities. Authentication, RBAC, and REST APIs connecting frontend and backend, built with Agile practices throughout.",
      tech: ["React", "TypeScript", "Django REST Framework", "PostgreSQL"],
      github: "https://github.com/MillicentChelangat/SmartSeason-Field-Monitoring-System",
      live: "https://smart-season-field-monitoring-syste-liard.vercel.app/",
      image: "/images/projects/smartseason.png"
    },
    {
      title: "Job Tracker System",
      category: "Web App",
      description: "Application tracking, progress monitoring, authentication, and profile management. A relational database with referential integrity manages user, job, and application records, with automated workflows reducing manual effort.",
      tech: ["React", "TypeScript", "Django", "PostgreSQL", "JWT"],
      github: "https://github.com/MillicentChelangat/Job-Tracker",
      live: "https://job-tracker-eta.vercel.app/",
      image: "/images/projects/jobtracker.png"
    },
    {
      title: "Abukeans Investment Limited",
      category: "Website",
      description: "A responsive company website for a construction and design-build firm, featuring a services showcase, project gallery, about/vision-mission sections, and light/dark theme support.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/MillicentChelangat/Abukeans",
      live: "https://abukeans-zeta.vercel.app/",
      image: "/images/projects/abukeans.png"
    }
  ];

  return (
    <section id="projects" className="py-20 text-white" style={{ backgroundColor: COLORS.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span style={{ color: COLORS.secondary }}>Projects</span>
            </h2>
            <p className="text-xl opacity-70 max-w-3xl mx-auto">
              A showcase of my recent work, highlighting technical expertise and creative problem-solving.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 200}>
              <div
                className="rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-2 group"
                style={{ backgroundColor: '#152D45' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -15px ${COLORS.secondary}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                {/* Image slot */}
                <div className="w-full h-44 bg-black/20 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="p-6">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{ borderColor: COLORS.secondary, color: COLORS.secondary }}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {project.title}
                  </h3>
                  <p className="opacity-75 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 opacity-70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-semibold"
                      style={{ color: COLORS.secondary }}
                    >
                      <Github className="h-4 w-4" />
                      <span>View Code</span>
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-semibold"
                        style={{ color: COLORS.secondary }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

            </div>
      </div>
    </section>
  );
};

export default Projects;