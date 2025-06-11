
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio built with React, Three.js, and Framer Motion featuring smooth animations and 3D elements.",
      tech: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and sentiment analysis capabilities.",
      tech: ["React", "Socket.io", "Python", "OpenAI API"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
              <div className="text-4xl font-bold text-white/50">
                {project.title.charAt(0)}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
