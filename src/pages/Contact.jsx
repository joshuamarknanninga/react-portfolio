import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg leading-relaxed mb-6">
        Interested in working together or have any questions? Reach out to me and I’ll get back to you promptly!
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
          rows="5"
        ></textarea>
        <button type="submit" className="w-full py-3 bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
          Send Message
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
