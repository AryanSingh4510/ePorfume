import React, { useEffect, useState } from 'react';
import product from '../assets/product.png';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Products = () => {
    const [currentSlide, setcurrentSlide] = useState(0);
    const [productsPerPage, setproductsPerPage] = useState(4);

    const products = [
        { id: 1, name: 'Floral', price: 3999, rating: 4.5, image: product, discount: 10 },
        { id: 2, name: 'Ocean Breeze', price: 4999, rating: 4.2, image: product1, discount: 15 },
        { id: 3, name: 'Midnight Bloom', price: 5999, rating: 4.8, image: product2, discount: 20 },
        { id: 4, name: 'Sunset Rose', price: 3499, rating: 4.0, image: product3, discount: 25 },
        { id: 5, name: 'Lavender Field', price: 4299, rating: 4.3, image: product4, discount: 30 },
        { id: 6, name: 'Citrus Splash', price: 3799, rating: 4.1, image: product5, discount: 0 },
        { id: 7, name: 'Jasmine Mist', price: 4699, rating: 4.6, image: product6, discount: 50 },
        { id: 8, name: 'Vanilla Sky', price: 5299, rating: 4.7, image: product7, discount: 10 }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 649) {
                setproductsPerPage(1);
            } else if (window.innerWidth < 768) {
                setproductsPerPage(2);
            } else if (window.innerWidth < 1024) {
                setproductsPerPage(3);
            } else {
                setproductsPerPage(4);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(products.length / productsPerPage);

    const nextSlide = () => {
        setcurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlides = () => {
        setcurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const visibleProducts = products.slice(
        currentSlide * productsPerPage,
        (currentSlide + 1) * productsPerPage
    );

    return (
        <section id='products' className='py-12 scroll-mt-20 bg-[#121212] text-white'>
            <div className='container mx-auto px-4'>
                <motion.div 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }}
                    className='flex justify-between items-center mb-8'
                >
                    <h2 className='md:text-3xl text-2xl font-bold text-[#D6BBFB]'>Featured Products</h2>
                    <div className='flex space-x-4'>
                        <button
                            onClick={prevSlides}
                            className='p-2 rounded-full bg-[#1E1B2E] shadow-md hover:bg-[#9D174D] text-[#F9A8D4] transition-colors'
                            aria-label='Previous slide'
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className='p-2 rounded-full bg-[#1E1B2E] shadow-md hover:bg-[#9D174D] text-[#F9A8D4] transition-colors'
                            aria-label='Next slide'
                        >
                            <FiChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>
                <div className='relative overflow-hidden'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {visibleProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className='bg-[#1E1B2E] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105'
                            >
                                <div className='relative'>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className='w-full h-64 object-cover'
                                    />
                                    {product.discount > 0 && (
                                        <span className='absolute top-3 right-3 bg-[#C026D3] text-white text-xs font-bold px-2 py-1 rounded-full'>
                                            -{product.discount}%
                                        </span>
                                    )}
                                    <button className='absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-[#F472B6] text-gray-700'>
                                        <FiHeart size={18} />
                                    </button>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center mb-2'>
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                size={16}
                                                className={
                                                    i < Math.floor(product.rating)
                                                        ? 'text-yellow-400 fill-current'
                                                        : 'text-gray-500'
                                                }
                                            />
                                        ))}
                                        <span className='text-sm text-gray-400 ml-1'>
                                            ({product.rating})
                                        </span>
                                    </div>
                                    <h3 className='text-lg font-semibold text-[#D6BBFB] mb-1'>
                                        {product.name}
                                    </h3>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <span className='text-lg font-bold text-[#F9A8D4]'>
                                                ₹{(product.price * (1 - product.discount / 100)).toFixed(0)}
                                            </span>
                                            {product.discount > 0 && (
                                                <span className='text-sm text-gray-400 line-through ml-2'>
                                                    ₹{product.price.toFixed(0)}
                                                </span>
                                            )}
                                        </div>
                                        <button className='p-2 bg-[#9D174D] rounded-full text-white hover:bg-[#C026D3] transition-colors'>
                                            <FiShoppingCart size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center mt-6 space-x-2'>
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setcurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentSlide === index ? 'bg-[#C026D3]' : 'bg-gray-500'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
