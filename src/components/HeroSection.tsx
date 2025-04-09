'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section 
      dir="rtl" 
      className={clsx(
        "relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-secondary/30 to-primary/20",
        className
      )}
    >
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-[20%] right-[10%] h-64 w-64 rounded-full bg-primary/20 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute bottom-[15%] left-[15%] h-48 w-48 rounded-full bg-secondary/30 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          {/* Text Content */}
          <motion.div 
            className="z-10 flex-1 text-center md:text-right"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="mb-4 font-sans text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              חנות בגדים מוביל בישראל
            </motion.h1>
            
            <motion.p 
              className="mb-8 text-xl text-gray-600 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            {/* Neumorphic CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block"
            >
              <button 
                className="neumorphic-button relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:shadow-lg"
                aria-label="קבע תור עכשיו"
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <motion.span 
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.4 }}
                  style={{ mixBlendMode: 'overlay' }}
                />
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image with Glassmorphism Card */}
          <motion.div 
            className="z-10 flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md">
              {/* Glassmorphism Card */}
              <div className="glassmorphism-card relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-lg">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="חנות בגדים גמא"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <motion.div 
                  className="absolute bottom-8 right-8 rounded-lg bg-white/80 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <h3 className="text-xl font-bold text-primary">חנות בגדים גמא</h3>
                  <p className="text-gray-700">אופנה מתקדמת בסטנדרט גבוה</p>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-secondary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Store Logo */}
      <motion.div 
        className="absolute left-4 top-4 z-20 rounded-full bg-white/90 p-2 backdrop-blur-sm md:left-8 md:top-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-bold text-primary">
          חנות בגדים גמא
        </h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;