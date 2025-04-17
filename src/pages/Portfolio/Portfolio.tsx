import React from 'react';
// استيراد الأيقونات من مكتبة react-icons
import { FaExternalLinkAlt } from 'react-icons/fa';
// استيراد مكتبة framer-motion
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen px-8 py-16 bg-[#323946]">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-center text-white mb-16">Latest <span className="text-[#0ef]">Project</span></h2>

      {/* Portfolio Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Portfolio Box 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/assets/photo_2025-04-08_19-06-10.jpg"
            alt="Project"
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-white">Web Design</h4>
              <p className="text-lg text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, reiciendis.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-12 h-12 bg-white text-[#323946] rounded-full"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Box 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/assets/photo_2025-04-08_19-06-10.jpg"
            alt="Project"
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-white">Web Design</h4>
              <p className="text-lg text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, reiciendis.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-12 h-12 bg-white text-[#323946] rounded-full"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Box 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="/assets/photo_2025-04-08_19-06-10.jpg"
            alt="Project"
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-white">Web Design</h4>
              <p className="text-lg text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, reiciendis.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-12 h-12 bg-white text-[#323946] rounded-full"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default Portfolio;