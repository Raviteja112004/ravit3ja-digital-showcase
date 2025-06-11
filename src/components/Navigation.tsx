
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, FileText, Mail } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  sections: string[];
}

export const Navigation = ({ currentSection, onSectionChange, sections }: NavigationProps) => {
  const iconMap = {
    hero: Home,
    about: User,
    skills: Code,
    projects: Briefcase,
    resume: FileText,
    contact: Mail,
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
        <div className="flex flex-col space-y-4">
          {sections.map((section) => {
            const Icon = iconMap[section as keyof typeof iconMap];
            return (
              <motion.button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  currentSection === section
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};
