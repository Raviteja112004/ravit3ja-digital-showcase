
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Award, Globe, Code2 } from 'lucide-react';

export const ResumeSection = () => {
  const education = [
    {
      degree: "B.Tech in Information Science and Engineering",
      institution: "University of Visvesvaraya College of Engineering, Bangalore",
      period: "2022 - Present",
      location: "Bangalore, India",
      grade: "9.36 CGPA (up to 4th Semester)"
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "MKCPM PU College, Chikkamagaluru",
      period: "2020 - 2022",
      location: "Chikkamagaluru",
      grade: "97.8%"
    },
    {
      degree: "Class 10 (CBSE)",
      institution: "DCMC CBSE School, Chikkamagaluru",
      period: "2019 - 2020",
      location: "Chikkamagaluru",
      grade: "91.6%"
    }
  ];

  const experience = [
    {
      title: "BitNBuild & CodeFury Hackathons",
      company: "Participant",
      period: "6.0, 7.0 editions",
      location: "Remote",
      description: "Showcased teamwork, rapid prototyping, and problem-solving under pressure. Earned CodeFury 6.0 and 7.0 certificates.",
      type: "hackathon"
    },
    {
      title: "Summer Internship Training",
      company: "UVCE",
      period: "Summer 2023",
      location: "Bangalore",
      description: "Gained hands-on experience in MongoDB and React; acquired essential soft skills including communication, teamwork, and problem-solving.",
      type: "internship"
    },
    {
      title: "Event Coordinator & Logistics",
      company: "IMPETUS 24.0",
      period: "2024",
      location: "UVCE, Bangalore",
      description: "Assisted in event coordination and logistics for technical fest, developing organizational and leadership skills.",
      type: "volunteer"
    }
  ];

  const projects = [
    {
      title: "Travel Agency Management System",
      tech: ["Node.js", "Express.js", "MySQL", "Handlebars", "Tailwind CSS"],
      description: "Built a travel booking platform with user registration, hotel selection, trip booking, and profile-based status tracking. Developed an admin dashboard to manage customers, bookings, and hotel data."
    },
    {
      title: "Chit-Chat App",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      description: "Real-time chat app with authentication, image sharing, themes, and Socket.io messaging. Designed a responsive UI with efficient state handling.",
      links: { live: "chit-chat-app-gfr.onrender.com" }
    },
    {
      title: "SafeGuard",
      tech: ["Express.js", "Node.js", "MongoDB", "Weather API"],
      description: "Built a disaster safety platform with geolocation, weather alerts, secure login, and role-based access. Delivered real-time UI with responsive design.",
      links: { live: "codefury-7-0.vercel.app" }
    }
  ];

  const certifications = [
    "Blockchain Basics - University at Buffalo (Coursera)",
    "50 Days of Coding Challenge - LeetCode (Solved problems for 50 consecutive days)"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Resume
        </h2>
        <p className="text-gray-400 mb-6">Bangalore, India • +91 80733 28516 • raviteja112004@gmail.com</p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://linkedin.com/in/raviteja-m" className="text-blue-400 hover:text-blue-300 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/Raviteja112004" className="text-gray-400 hover:text-gray-300 transition-colors">
            GitHub
          </a>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          <Download size={20} />
          <span>Download Resume</span>
        </motion.button>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
            <Award className="mr-2" size={24} />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                <p className="text-purple-300 mb-2">{edu.institution}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-pink-300 font-medium text-sm">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Training */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center">
            <Code2 className="mr-2" size={24} />
            Experience & Training
          </h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    exp.type === 'hackathon' ? 'bg-purple-600/20 text-purple-300' :
                    exp.type === 'internship' ? 'bg-blue-600/20 text-blue-300' :
                    'bg-green-600/20 text-green-300'
                  }`}>
                    {exp.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">{exp.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects */}
      <motion.div variants={itemVariants} className="mt-8">
        <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
          <Globe className="mr-2" size={24} />
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.links && (
                <div className="flex space-x-4">
                  {project.links.live && (
                    <a
                      href={`https://${project.links.live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div variants={itemVariants} className="mt-8">
        <h3 className="text-2xl font-bold text-green-400 mb-6">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300"
            >
              <p className="text-gray-300 text-sm">{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
