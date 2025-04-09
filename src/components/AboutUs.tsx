'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStore, FaUserTie, FaTshirt, FaHandshake } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 md:px-8 lg:px-16 rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            אודות חנות בגדים גמא
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            המקום שלך לאופנה איכותית ושירות מקצועי כבר למעלה מעשור
          </p>
        </motion.div>

        {/* Main content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glassmorphism-card p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">הסיפור שלנו</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                חנות בגדים גמא נוסדה בשנת 2010 מתוך אהבה גדולה לאופנה ותשוקה לשירות לקוחות מצוין. 
                התחלנו כחנות קטנה במרכז העיר, וכיום אנחנו גאים להיות אחת מחנויות הבגדים המובילות באזור.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                הייחודיות שלנו טמונה בשילוב המושלם בין איכות בלתי מתפשרת, מחירים הוגנים ויחס אישי חם לכל לקוח ולקוחה. 
                אנו מקפידים לבחור את הפריטים הטובים ביותר עבורכם, תוך התחשבות בטרנדים העדכניים ביותר בעולם האופנה.
              </p>
              <p className="text-gray-700 leading-relaxed">
                בחנות תמצאו מגוון רחב של בגדים לנשים, גברים וילדים, כולל אביזרי אופנה משלימים שיעזרו לכם להשלים את המראה המושלם.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="neumorphic-image-container">
              <Image
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="חנות בגדים גמא"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-[400px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Founder section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="neumorphic-image-container">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="המייסד של חנות בגדים גמא"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-[400px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="glassmorphism-card p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">המייסד שלנו</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                גלעד כהן, המייסד של חנות בגדים גמא, החל את דרכו בעולם האופנה לפני למעלה מ-15 שנה. 
                עם ניסיון עשיר בתחום הקמעונאות והבנה עמוקה של צרכי הלקוחות, גלעד הקים את החנות במטרה להביא אופנה איכותית במחירים הוגנים.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "האמונה שלי היא שכל אדם ראוי להרגיש בטוח ונוח בבגדים שהוא לובש. בחנות שלנו אנחנו לא רק מוכרים בגדים, אנחנו מעניקים חוויית קנייה מהנה שמלווה בייעוץ מקצועי ואישי."
              </p>
              <div className="mt-6 flex items-center">
                <div className="neumorphic-button py-2 px-4 rounded-lg text-primary font-medium">
                  גלעד כהן, מייסד
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">הערכים שלנו</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaStore className="text-4xl text-primary mb-4" />, title: "איכות", description: "אנו בוחרים רק את המוצרים האיכותיים ביותר עבור הלקוחות שלנו" },
              { icon: <FaUserTie className="text-4xl text-primary mb-4" />, title: "שירות", description: "שירות אישי ומקצועי הוא הלב של העסק שלנו" },
              { icon: <FaTshirt className="text-4xl text-primary mb-4" />, title: "מגוון", description: "מגוון רחב של פריטים לכל גיל, מידה וסגנון" },
              { icon: <FaHandshake className="text-4xl text-primary mb-4" />, title: "אמינות", description: "בניית מערכות יחסים ארוכות טווח המבוססות על אמון" },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="neumorphic-card p-6 text-center"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              >
                {value.icon}
                <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="glassmorphism-cta p-10 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">בואו לבקר אותנו</h3>
            <p className="text-xl text-gray-700 mb-8">
              אנחנו מזמינים אתכם לחוויית קנייה מהנה ומקצועית בחנות שלנו
            </p>
            <button className="neumorphic-button-primary py-3 px-8 rounded-lg text-white font-medium text-lg transition-all">
              צרו קשר
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;