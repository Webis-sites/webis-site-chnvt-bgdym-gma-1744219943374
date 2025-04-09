'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaRulerVertical, FaCrown, FaShippingFast, FaGift, FaHandHoldingHeart } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="service-card relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-neumorphic border border-white/20 transition-all duration-300"
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 30px -10px rgba(78, 205, 196, 0.3)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
      
      <div className="icon-container mb-4 p-4 inline-block rounded-full bg-white/5 shadow-inner-neumorphic">
        <div className="text-4xl text-primary">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaTshirt />,
      title: "סטיילינג אישי",
      description: "פגישת ייעוץ אישית עם סטייליסט מקצועי שיעזור לכם למצוא את הסגנון המושלם עבורכם."
    },
    {
      icon: <FaRulerVertical />,
      title: "תיקונים והתאמות",
      description: "שירות תיקונים והתאמות מקצועי לכל פריט שתרכשו אצלנו, לנוחות והתאמה מושלמת."
    },
    {
      icon: <FaCrown />,
      title: "תוכנית נאמנות",
      description: "הצטרפו למועדון הלקוחות שלנו וקבלו הטבות בלעדיות, הנחות והזמנות לאירועים מיוחדים."
    },
    {
      icon: <FaShippingFast />,
      title: "משלוח מהיר",
      description: "משלוח חינם לכל הזמנה מעל 300 ש״ח, עם אפשרות למשלוח אקספרס תוך יום עסקים."
    },
    {
      icon: <FaGift />,
      title: "אריזת מתנה",
      description: "שירות אריזת מתנה מהודרת לכל רכישה, מושלם למתנות לאהוביכם או לעצמכם."
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "אחריות מורחבת",
      description: "אחריות מורחבת על כל המוצרים שלנו, כי אנחנו מאמינים באיכות ובשירות ללא פשרות."
    }
  ];

  return (
    <section className="services-section py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 rtl" dir="rtl">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-2 px-6 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 shadow-sm mb-4">
            <h2 className="text-sm font-medium text-secondary">השירותים שלנו</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">חוויית קנייה מושלמת</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            בחנות בגדים גמא אנחנו מציעים מגוון שירותים שיהפכו את חווית הקנייה שלכם לנעימה ומותאמת אישית.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glassmorphism-card inline-block py-4 px-8 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
            <p className="text-gray-700 mb-4">רוצים לשמוע עוד על השירותים שלנו?</p>
            <motion.button 
              className="btn-neumorphic py-3 px-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              צרו קשר עכשיו
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;