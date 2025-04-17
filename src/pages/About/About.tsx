import React from 'react';
// استيراد مكتبة framer-motion
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-[#323946] gap-8">
      {/* Image Section with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="about-img"
      >
        <img
          src="/assets/photo_2025-04-08_19-06-10.jpg"
          alt="Profile"
          className="w-[120vw] h-[35vw] rounded-full animate-float"
        />
      </motion.div>

      {/* Content Section with Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="text-center md:text-left about-content"
      >
        <h2 className="text-5xl font-bold mb-4 text-white">About <span className="text-[#0ef]">Me</span></h2>
        <h3 className="text-3xl font-bold mb-4 text-white">Fullstack Developer!</h3>
        <p className="text-lg mb-6 text-white">
          An experienced Fullstack developer with experience in designing and developing attractive and workable user interfaces with experience in UX/UI optimization and ensuring smooth and responsive web performance and experience working with version control systems such as Git with the ability to collaborate effectively with development and design teams and the ability to solve problems and analytical thinking.
        </p>
        <a
          href="#"
          className="inline-block px-7 py-3 bg-[#0ef] text-[#323946] font-semibold text-base rounded-full shadow-lg hover:bg-transparent hover:text-[#0ef] border border-[#0ef] transition-all duration-500"
        >
          Read More
        </a>
      </motion.div>
    </section>
  );
};

export default About;