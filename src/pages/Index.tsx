
import React, { Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { HeroScene } from '../components/3d/HeroScene';
import { Navigation } from '../components/Navigation';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ResumeSection } from '../components/sections/ResumeSection';
import { ContactSection } from '../components/sections/ContactSection';
import { LoadingSpinner } from '../components/LoadingSpinner';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<string>('hero');

  const sections = [
    { id: 'hero', component: null },
    { id: 'about', component: AboutSection },
    { id: 'skills', component: SkillsSection },
    { id: 'projects', component: ProjectsSection },
    { id: 'resume', component: ResumeSection },
    { id: 'contact', component: ContactSection },
  ];

  const CurrentComponent = sections.find(s => s.id === currentSection)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection}
        sections={sections.map(s => s.id)}
      />

      {/* Hero Section with 3D Scene */}
      <AnimatePresence mode="wait">
        {currentSection === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-screen w-full"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                className="absolute inset-0"
              >
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
                <HeroScene />
              </Canvas>
            </Suspense>

            {/* Hero Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="text-center">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
                >
                  Raviteja M
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 1 }}
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                >
                  Information Technology Student & Developer
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1 }}
                  className="pointer-events-auto"
                >
                  <button
                    onClick={() => setCurrentSection('about')}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Explore My Portfolio
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Content Sections */}
        {currentSection !== 'hero' && CurrentComponent && (
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen flex items-center justify-center p-8"
            style={{ perspective: '1000px' }}
          >
            <div className="w-full max-w-6xl bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10">
              <CurrentComponent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
