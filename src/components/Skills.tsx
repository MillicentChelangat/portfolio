import React from 'react';
import { Code2, Server, Cloud } from 'lucide-react';
import { COLORS } from '../constants/colors'
import Reveal from '../components/Reveal';

const skillsData = [
  {
    icon: <Code2 className="h-6 w-6" style={{ color: COLORS.secondary }} />,
    title: "Frontend",
    skills: ["React", "TypeScript", "React Native (Expo)", "JavaScript"]
  },
  {
    icon: <Server className="h-6 w-6" style={{ color: COLORS.secondary }} />,
    title: "Backend",
    skills: ["Django REST Framework", "Python", "REST APIs", "JWT Authentication"]
  },
  {
    icon: <Cloud className="h-6 w-6" style={{ color: COLORS.secondary }} />,
    title: "Cloud & Tools",
    skills: ["PostgreSQL", "Supabase", "Git/GitHub", "Vercel", "Render", "Postman"]
  }
];

const Skills = () => (
  <section id="skills" className="py-20 text-white" style={{ backgroundColor: COLORS.primary }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Skills & <span style={{ color: COLORS.secondary }}>Technologies</span>
          </h2>
        </div>
      </Reveal>

      <p className="text-center opacity-70 max-w-2xl mx-auto -mt-12 mb-16">
        A comprehensive tool set for building modern, scalable applications.
      </p>
    </div>

    {/* Skills Grid */}
    <div className=" grid md:grid-cols-3 gap-8">
      {skillsData.map((category, index) => (
        <Reveal key={index} delay={index * 200} className="h-full">
          <div
            className="h-full p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 cursor-default"
            style={{ backgroundColor: '#152D45' }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 40px -15px ${COLORS.secondary}40`}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            <div className="flex items-center mb-6 space-x-3">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1.5 rounded-full border transition-colors"
                  style={{ borderColor: COLORS.secondary, color: COLORS.secondary }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section >
);
export default Skills;
