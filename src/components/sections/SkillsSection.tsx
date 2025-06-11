
import React from 'react';
import { motion } from 'framer-motion';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Firebase", "Figma"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "SQL"],
      color: "from-orange-500 to-red-500"
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
        Skills & Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                  <span className="text-gray-300 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
