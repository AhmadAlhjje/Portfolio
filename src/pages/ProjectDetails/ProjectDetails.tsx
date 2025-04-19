import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view"; // مكتبة Lightbox
import "react-photo-view/dist/react-photo-view.css"; // استيراد الأنماط

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[]; // قائمة بالصور بدلاً من صورة واحدة
}

// مصفوفة تحتوي على بيانات المشاريع
const projects: Project[] = [
  {
    id: 1,
    title: "Real Estate Project ",
    description: `Built a real estate listing web application with search,
                  filtering, and dynamic API integration.
                  Developed a responsive UI using React.js and Bootstrap`,
    images: [
      "/assets/عقارات 1.png",
      "/assets/عقارات 2.png",
      "/assets/عقارات 3.png",
      "/assets/عقارات 4.png",
      "/assets/عقارات 5.png",
      "/assets/عقارات 6.png",
      "/assets/عقارات 7.png",
    ],
  },
  {
    id: 2,
    title: "Football Field Booking Platform",
    description: `Built a responsive web app for booking football fields with filters, payment systems, and RESTful API integration.
                  Includes a dashboard for field owners to manage bookings and pricing, and an admin panel for platform management.
                  Users can browse fields, filter by name, city, and area, and make online reservations.
                  `,
    images: [
      "/assets/ملعب 1.png",
      "/assets/ملعب 2.png",
      "/assets/ملعب 3.png",
      "/assets/ملعب 4.png",
      "/assets/ملعب 5.png",
      "/assets/ملعب 6.png",
    ],
  },
  {
    id: 3,
    title: "Simple Product Purchase Platform",
    description: `Developed a simple full-stack online platform with user authentication and order processing.
                  Built responsive UI using React.tsx , and Tailwind CSS .
                  Implemented RESTful APIs with Node.js , Express.js , and Sequelize ORM .
                  Designed relational database schemas in MySQL with foreign key relationships.
                  `,
    images: [
      "/assets/متجر 1.png",
      "/assets/متجر 2.png",
      "/assets/متجر 3.png",
    ],
  },
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#323946] text-white text-center py-16">
        المشروع غير موجود
      </div>
    );
  }

  return (
    <section className="min-h-screen px-8 py-16 bg-[#323946]">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <h2 className="text-5xl font-bold text-white mb-4">{project.title}</h2>
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-4xl mx-auto text-white text-lg mt-8 text-center px-4"
      >
        <p>{project.description}</p>
      </motion.div>

      {/* Images Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {/* Using PhotoProvider and PhotoView for Lightbox */}
        <PhotoProvider>
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <PhotoView src={image}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </PhotoView>
            </motion.div>
          ))}
        </PhotoProvider>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
