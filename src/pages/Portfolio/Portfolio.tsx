import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // استيراد Link

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

// مصفوفة تحتوي على بيانات المشاريع
const projects: Project[] = [
  {
    id: 1,
    title: "مشروع العقارات",
    description: "موقع إلكتروني لعرض العقارات وبيعها.",
    image: "/assets/عقارات 1.png",
  },
  {
    id: 2,
    title: "مشروع ملاعب",
    description: "تصميم واجهة مستخدم جميلة ومتجاوبة.",
    image: "/assets/ملعب 1.png",
  },
  {
    id: 3,
    title: "مشروع السوشال ميديا",
    description: "منصة للتسوق الإلكتروني مع سلة مشتريات.",
    image: "/assets/سوشال 1.png",
  },
  
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen px-8 py-16 bg-[#323946]">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-center text-white mb-16">
        Latest <span className="text-[#0ef]">Projects</span>
      </h2>

      {/* Portfolio Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Render Projects Dynamically */}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-white">
                  {project.title}
                </h4>
                <p className="text-lg text-white mb-4">{project.description}</p>
                <Link
                  to={`/project/${project.id}`} // رابط إلى صفحة تفاصيل المشروع
                  className="inline-flex justify-center items-center w-12 h-12 bg-white text-[#323946] rounded-full"
                >
                  <FaExternalLinkAlt size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
