// import React from 'react';
// // استيراد الأيقونات من مكتبة react-icons
// import { FaCode, FaPaintBrush, FaChartBar } from 'react-icons/fa';
// // استيراد مكتبة framer-motion
// import { motion } from 'framer-motion';

// const Services: React.FC = () => {
//   return (
//     <section id="services" className="min-h-screen px-8 py-16 bg-[#1f242d]">
//       {/* Section Title */}
//       <h2 className="text-5xl font-bold text-center text-white mb-20">Our <span className="text-[#0ef]">Services</span></h2>

//       {/* Services Container */}
//       <div className="flex flex-wrap justify-center gap-8">
//         {/* Service Box 1 */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           className="flex-1 min-w-[30rem] bg-[#323946] p-8 rounded-2xl text-center border-2 border-[#1f242d] hover:border-[#0ef]"
//         >
//           <FaCode size={70} className="text-[#0ef] mb-6 mx-auto" />
//           <h3 className="text-3xl font-bold text-white mb-4">Web Developer</h3>
//           <p className="text-lg text-white mb-6">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cumque quae alias eligendi molestias soluta nostrum quia corrupti dicta possimus.
//           </p>
//           <a
//             href="#"
//             className="inline-block px-7 py-3 bg-[#0ef] text-[#323946] font-semibold text-base rounded-full shadow-lg hover:bg-transparent hover:text-[#0ef] border border-[#0ef] transition-all duration-500"
//           >
//             Read More
//           </a>
//         </motion.div>

//         {/* Service Box 2 */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           className="flex-1 min-w-[30rem] bg-[#323946] p-8 rounded-2xl text-center border-2 border-[#1f242d] hover:border-[#0ef]"
//         >
//           <FaPaintBrush size={70} className="text-[#0ef] mb-6 mx-auto" />
//           <h3 className="text-3xl font-bold text-white mb-4">Graphic Design</h3>
//           <p className="text-lg text-white mb-6">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cumque quae alias eligendi molestias soluta nostrum quia corrupti dicta possimus.
//           </p>
//           <a
//             href="#"
//             className="inline-block px-7 py-3 bg-[#0ef] text-[#323946] font-semibold text-base rounded-full shadow-lg hover:bg-transparent hover:text-[#0ef] border border-[#0ef] transition-all duration-500"
//           >
//             Read More
//           </a>
//         </motion.div>

//         {/* Service Box 3 */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           className="flex-1 min-w-[30rem] bg-[#323946] p-8 rounded-2xl text-center border-2 border-[#1f242d] hover:border-[#0ef]"
//         >
//           <FaChartBar size={70} className="text-[#0ef] mb-6 mx-auto" />
//           <h3 className="text-3xl font-bold text-white mb-4">Digital Marketing</h3>
//           <p className="text-lg text-white mb-6">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cumque quae alias eligendi molestias soluta nostrum quia corrupti dicta possimus.
//           </p>
//           <a
//             href="#"
//             className="inline-block px-7 py-3 bg-[#0ef] text-[#323946] font-semibold text-base rounded-full shadow-lg hover:bg-transparent hover:text-[#0ef] border border-[#0ef] transition-all duration-500"
//           >
//             Read More
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;