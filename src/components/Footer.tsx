import React from 'react';
import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { COLORS } from '../constants/colors';
import Reveal from './Reveal';

const iconBox =
  'w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 transition-all duration-300 hover:-translate-y-1';

const Footer = () => {
  return (
    <footer
      className="text-white py-12 border-t border-white/10"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand + Follow Me */}
          <Reveal>
            <div>
              <div className="text-2xl font-bold mb-4">
                Millicent<span style={{ color: COLORS.secondary }}>Dev</span>
              </div>

              <p className="opacity-70 mb-6 max-w-xs">
                Building secure, full-stack web and mobile applications with clean code and real-world impact.
              </p>

              <p className="text-sm font-semibold mb-3">Follow Me</p>

              <div className="flex gap-3">
                <a href="https://github.com/MillicentChelangat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={iconBox}
                  style={{ backgroundColor: '#152D45', color: COLORS.secondary }}
                >
                  <Github className="h-5 w-5" />
                </a>

                <a href="https://linkedin.com/in/millicent-chelangat-ba71b6256"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={iconBox}
                  style={{ backgroundColor: '#152D45', color: COLORS.secondary }}
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a href="mailto:millicentchelangat42@gmail.com"
                  aria-label="Email"
                  className={iconBox}
                  style={{ backgroundColor: '#152D45', color: COLORS.secondary }}
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={150}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 opacity-70">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#skills" className="hover:underline">Skills</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#experience" className="hover:underline">Experience</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </Reveal>

          {/* Get In Touch */}
          <Reveal delay={300}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3 opacity-70">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: COLORS.secondary }} />
                  <span className="break-all">millicentchelangat42@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: COLORS.secondary }} />
                  <span>+254 725 995 840</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: COLORS.secondary }} />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Millicent Chelangat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;