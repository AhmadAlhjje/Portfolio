import React, { useState } from "react";
// استيراد مكتبة framer-motion
import { motion } from "framer-motion";

const About: React.FC = () => {
  // State to manage text expansion
  const [isExpanded, setIsExpanded] = useState(false);

  // Full text content
  const fullText = `
    I am a Fullstack Developer with expertise in building responsive and efficient web applications. I specialize in React.js, Node.js, and RESTful APIs, ensuring smooth performance and user-friendly interfaces.`;

  // Shortened text content
  const shortText = fullText.slice(0, 100) + "..."; // Display first 150 characters

  // Skills data
  const skills = [
    { category: "Programming Languages", items: ["C++", "Java", "JavaScript", "TypeScript"] },
    { category: "Front-End Development", items: ["HTML", "CSS", "Bootstrap", "TailwindCSS", "React.js" , "Next.js"] },
    { category: "Back-End Development", items: ["MySQL", "Node.js", "Express.js", "Sequelize"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "VS Code"] },
    { category: "APIs", items: ["RESTful APIs"] },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-[#1f242d] gap-8"
    >
      {/* Image Section with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="md:w-1/4 w-full flex justify-center"
      >
        <img
          src="/assets/photo_2025-04-08_19-06-10.jpg"
          alt="Profile"
          className="w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] md:w-[35vw] md:h-[25vw] rounded-full object-cover animate-float"
        />
      </motion.div>

      {/* Content Section with Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="md:w-3/4 w-full text-center md:text-left about-content"
      >
        <h2 className="text-5xl font-bold mb-4 text-white">
          About <span className="text-[#0ef]">Me</span>
        </h2>
        <h3 className="text-3xl font-bold mb-4 text-white">
          Fullstack Developer!
        </h3>
        <p className="text-lg mb-6 text-white">
          {isExpanded ? fullText : shortText}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-block px-7 py-3 bg-[#0ef] text-[#323946] font-semibold text-base rounded-full shadow-lg hover:bg-transparent hover:text-[#0ef] border border-[#0ef] transition-all duration-500 mb-6"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>

        {/* Skills Section */}
        <div className="mt-6">
          <h4 className="text-2xl font-bold text-white mb-4">My Skills</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#2a303c] p-6 rounded-lg shadow-lg"
              >
                <h5 className="text-xl font-bold text-[#0ef] mb-3">{skill.category}</h5>
                <ul className="text-white text-sm space-y-1">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-[#0ef] mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;