
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin } from 'lucide-react';

export const ResumeSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "University Name",
      period: "2021 - 2025",
      location: "City, Country"
    }
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Startup Inc.",
      period: "June 2024 - Present",
      location: "Remote",
      description: "Developed responsive web applications using React and TypeScript, improving user engagement by 30%."
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      period: "Jan 2023 - May 2024",
      location: "Remote",
      description: "Built custom websites for small businesses, focusing on performance optimization and modern design."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Resume
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          <Download size={20} />
          <span>Download Resume</span>
        </motion.button>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-6">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
              <p className="text-gray-300 mb-2">{edu.institution}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-pink-400 mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                <p className="text-gray-300 mb-2">{exp.company}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
