import React from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="bg-[#121212] scroll-mt-20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/30 to-[#111827]/70 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12"
      >
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#D6BBFB] leading-tight mb-5">
            Discover the Best Deals on Top Products
          </h1>
          <p className="text-[#9CA3AF] text-base sm:text-lg mb-8">
            There is nothing more wonderful than being remembered for a perfume.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/products"
              className="px-6 py-3 bg-[#9D174D] text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-[#C026D3] transition-all duration-300"
            >
              Shop Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/offers"
              className="px-6 py-3 border border-[#5EEAD4] text-[#5EEAD4] text-sm font-semibold rounded-lg hover:bg-[#0F766E] hover:text-white transition-all duration-300"
            >
              View Offers
            </motion.a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={hero}
            alt="Hero"
            className="w-3/4 lg:w-full max-w-md mx-auto rounded-2xl shadow-2xl z-10"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
