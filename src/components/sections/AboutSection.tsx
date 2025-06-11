
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Graduation, Heart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I'm Raviteja M, a passionate Information Technology student with a deep love for creating 
            innovative digital solutions. My journey in tech began with curiosity and has evolved into a 
            comprehensive skill set spanning web development, software engineering, and emerging technologies.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            I believe in the power of technology to transform ideas into reality, and I'm constantly exploring 
            new frameworks, tools, and methodologies to stay at the forefront of innovation.
          </p>

          <div className="flex space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-lg"
            >
              <Code className="text-purple-400" size={20} />
              <span>Developer</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-pink-600/20 px-4 py-2 rounded-lg"
            >
              <Graduation className="text-pink-400" size={20} />
              <span>Student</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-lg"
            >
              <Heart className="text-blue-400" size={20} />
              <span>Innovator</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-1">
            <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text">
                RM
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
