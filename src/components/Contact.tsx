import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { COLORS } from '../constants/colors';
import emailjs from 'emailjs-com';
import Reveal from './Reveal';

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Email',
    value: 'millicentchelangat42@gmail.com',
    href: 'mailto:millicentchelangat42@gmail.com'
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: 'Phone',
    value: '+254 725 995 840',
    href: 'tel:+254725995840'
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Location',
    value: 'Nairobi, Kenya',
    href: null
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    title: 'LinkedIn',
    value: 'millicent-chelangat',
    href: 'https://linkedin.com/in/millicent-chelangat-ba71b6256'
  },
  {
    icon: <Github className="h-5 w-5" />,
    title: 'GitHub',
    value: 'MillicentChelangat',
    href: 'https://github.com/MillicentChelangat'
  }
];

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-white/10 bg-[#0F2438] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#35f1e2] focus:border-transparent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    emailjs
      .send(
        'service_13aiv0j',
        'template_4fkl41k',
        formData,
        'M1fZfh1JxpZ0oU5eN'
      )
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus({ type: 'error', message: 'Failed to send message. Try again later.' });
      });
  };

  // Auto-hide status message after 4 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="py-20 text-white"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Let's <span style={{ color: COLORS.secondary }}>Connect</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70">
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Get in Touch */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="opacity-70 mb-8">
                I'm always open to discussing new opportunities, whether it's an internship, a junior role, or a project collaboration.
              </p>
            </Reveal>

            <div className="space-y-4">
              {contactItems.map((item, i) => {
                const content = (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: '#152D45' }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -15px ${COLORS.secondary}40`)}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(53,241,226,0.1)', color: COLORS.secondary }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide opacity-60">{item.title}</p>
                      <p className="font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                );

                return (
                  <Reveal key={i} delay={i * 120}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right: Send a Message */}
          <Reveal delay={200} className="h-full">
            <div
              className="h-full p-8 rounded-2xl border border-white/10 px-6 py-4 transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{ backgroundColor: '#152D45' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -15px ${COLORS.secondary}40`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-80">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-80">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={inputClass}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: COLORS.secondary, color: COLORS.onsecondary }}
                >
                  Send Message
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                {status.message && (
                  <p
                    className={`text-sm text-center ${
                      status.type === 'success'
                        ? 'text-green-400'
                        : status.type === 'error'
                        ? 'text-red-400'
                        : 'opacity-70'
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;