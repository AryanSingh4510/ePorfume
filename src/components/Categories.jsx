import React from 'react';
import { motion } from 'framer-motion';
import { FaMale, FaGem, FaTree, FaWind, FaMoon, FaRunning } from 'react-icons/fa';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png';
import product10 from '../assets/product10.png';
import product11 from '../assets/product11.png';
import product12 from '../assets/product12.png';
import product13 from '../assets/product13.png';

const categories = [
  {
    img: product8,
    alt: 'Mens Perfumes',
    title: 'Mens Collection',
    description: 'A curated selection of bold and classic fragrances designed for the modern man.',
    link: '/shop/mens',
    icon: <FaMale className='text-pink-300 text-lg' />,
  },
  {
    img: product9,
    alt: 'Luxury Perfume',
    title: 'Luxury Series',
    description: 'Experience premium blends with rich, long-lasting scents for a refined presence.',
    link: '/shop/luxury',
    icon: <FaGem className='text-pink-300 text-lg' />,
  },
  {
    img: product10,
    alt: 'Woody Fragrance',
    title: 'Woody Notes',
    description: 'Explore earthy and musky tones that evoke strength and sophistication.',
    link: '/shop/woody',
    icon: <FaTree className='text-pink-300 text-lg' />,
  },
  {
    img: product11,
    alt: 'Fresh Scent',
    title: 'Fresh & Clean',
    description: 'Invigorating fragrances with crisp, citrusy, and oceanic vibes for everyday wear.',
    link: '/shop/fresh',
    icon: <FaWind className='text-pink-300 text-lg' />,
  },
  {
    img: product12,
    alt: 'Evening Perfume',
    title: 'Evening Wear',
    description: 'Deep and alluring scents perfect for date nights and special occasions.',
    link: '/shop/evening',
    icon: <FaMoon className='text-pink-300 text-lg' />,
  },
  {
    img: product13,
    alt: 'Sport Fragrance',
    title: 'Sport Collection',
    description: 'Energetic and vibrant aromas built for active lifestyles and on-the-go freshness.',
    link: '/shop/sport',
    icon: <FaRunning className='text-pink-300 text-lg' />,
  },
];

const Categories = () => {
  return (
    <section id='categories' className='py-16 scroll-mt-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-amber-900 mb-3'>
            Explore Our Fragrance Collections
          </h2>
          <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
            Discover fragrances crafted for every personality, occasion, and lifestyle.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {categories.map((category, index) => (
            <motion.a
              href={category.link}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white block'
            >
              <div className='h-64 overflow-hidden'>
                <img
                  src={category.img}
                  alt={category.alt}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-pink-950/70 via-transparent to-transparent flex flex-col justify-end'>
                <div className='p-6'>
                  <div className='flex items-center gap-2 text-white mb-1'>
                    {category.icon}
                    <h3 className='text-xl font-semibold'>{category.title}</h3>
                  </div>
                  <p className='text-pink-100 mt-1 mb-4'>{category.description}</p>
                  <span className='inline-block px-4 py-2 bg-pink-950 text-white rounded-full hover:bg-pink-700 transition-colors text-sm font-medium'>
                    Shop Now
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
