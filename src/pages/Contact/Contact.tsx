import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen px-8 py-16 bg-[#1f242d]">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-center text-white mb-12">Contact <span className="text-[#0ef]">Me!</span></h2>

      {/* Form */}
      <form className="max-w-[70rem] mx-auto text-center">
        {/* First Input Box */}
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full md:w-[49%] p-4 bg-[#323946] text-white rounded-lg placeholder:text-gray-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-[49%] p-4 bg-[#323946] text-white rounded-lg placeholder:text-gray-400"
          />
        </div>

        {/* Second Input Box */}
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <input
            type="number"
            placeholder="Mobile Number"
            className="w-full md:w-[49%] p-4 bg-[#323946] text-white rounded-lg placeholder:text-gray-400"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="w-full md:w-[49%] p-4 bg-[#323946] text-white rounded-lg placeholder:text-gray-400"
          />
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Your Message"
          className="w-full p-4 bg-[#323946] text-white rounded-lg placeholder:text-gray-400 resize-none mb-6"
          rows={10}
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-block px-7 py-3 bg-[#0ef] text-[#323946] font-semibold text-base rounded-full shadow-lg hover:bg-transparent hover:text-[#0ef] border border-[#0ef] transition-all duration-500 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;