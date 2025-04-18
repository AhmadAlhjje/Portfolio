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
    title: "مشروع العقارات",
    description:
      "موقع إلكتروني لعرض العقارات وبيعها. يحتوي الموقع على واجهة مستخدم جميلة وميزات متقدمة مثل البحث عن العقارات وتصفية النتائج.",
    images: ["/assets/عقارات 1.png", "/assets/عقارات 2.png", "/assets/عقارات 3.png", "/assets/عقارات 4.png", "/assets/عقارات 5.png", "/assets/عقارات 6.png", "/assets/عقارات 7.png"],
  },
  {
    id: 2,
    title: "مشروع تصميم الويب",
    description:
      "تصميم واجهة مستخدم جميلة ومتجاوبة. تم التركيز على تجربة المستخدم وسهولة الاستخدام.",
    images: ["/assets/photo_2025-04-08_19-06-10.jpg", "/assets/عقارات 1.png"],
  },
  {
    id: 3,
    title: "مشروع التجارة الإلكترونية",
    description:
      "منصة للتسوق الإلكتروني مع سلة مشتريات. تتيح المنصة للمستخدمين تصفح المنتجات وإكمال عمليات الشراء بسهولة.",
    images: ["/assets/photo_2025-04-08_19-06-10.jpg", "/assets/عقارات 1.png"],
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