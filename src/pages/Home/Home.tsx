import React from "react";
import { FaWhatsapp, FaTelegram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-[#323946]"
    >
      {/* Text Content with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-center md:text-left mb-8 md:mb-0"
      >
        <h3 className="text-4xl font-bold mb-4 text-white">Hello, It is Me</h3>
        <h1 className="text-7xl font-bold mb-4 text-white">Ahmad Alhjje</h1>
        <h3 className="text-3xl font-bold mb-4 text-white">
          And I am a <span className="text-[#0ef]">Fullstack Developer</span>
        </h3>
        <p className="text-lg mb-6 text-white">
          I have hands-on experience in developing fullstack applications,
          integrating React.js for intuitive front-end interactions and
          Node.js/Express.js for secure and efficient back-end operations.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/+963998107722"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-10 h-10 border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-[#323946] transition-all duration-500"
          >
            <FaWhatsapp size={24} />
          </a>

          {/* Telegram Icon */}
          <a
            href="https://t.me/AhmadAlhjji" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-10 h-10 border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-[#323946] transition-all duration-500"
          >
            <FaTelegram size={24} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/ahmad-obada-alhjje-002b1b303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-10 h-10 border-2 border-[#0ef] rounded-full text-[#0ef] hover:bg-[#0ef] hover:text-[#323946] transition-all duration-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href="/assets/Ahmad Alhjje.pdf"
          download="Ahmad Alhjje CV.pdf"
          className="inline-block px-7 py-3 bg-[#0ef] text-[#323946] font-semibold text-base rounded-full shadow-lg hover:bg-transparent hover:text-[#0ef] border border-[#0ef] transition-all duration-500"
        >
          Download CV
        </a>
      </motion.div>

      {/* Profile Image with Float Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-8 md:mt-0"
      >
        <img
          src="/assets/photo_2025-04-08_19-06-10.jpg"
          alt="Profile"
          className="w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] md:w-[55vw] md:h-[35vw] rounded-full animate-float object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Home;
