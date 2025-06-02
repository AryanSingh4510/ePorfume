import React from 'react';
import product from '../assets/product.png';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image Block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
              <img
                src={product}
                alt="Luxury perfume"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Since 1996</h3>
                <p className="mt-2 text-sm">
                  Crafting timeless fragrances with elegance
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-olive-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We believe that a fragrance should tell a story. At SugandhaLok, we
              curate a collection of luxury perfumes that embody elegance,
              confidence, and timeless style.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '900+', label: 'Unique fragrances' },
                { value: '99+', label: 'Countries worldwide' },
                { value: '100%', label: 'Customer satisfaction' },
                { value: '24/7', label: 'Customer support' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm text-center transition-all transform hover:-translate-y-2 hover:shadow-lg cursor-pointer"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#E6E6FA') // light lavender
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = 'white')
                  }
                >
                  <h4 className="text-2xl font-semibold text-pink-600">
                    {item.value}
                  </h4>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
