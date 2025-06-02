import React from 'react'
import { FiClock, FiGift, FiPercent } from 'react-icons/fi';

const Offers = () => {
  const currentOffers = [
    {
      id: 1,
      title: 'Summer Splash 40% Off',
      description: 'Enjoy 40% off on fresh citrus perfumes. Perfect for sunny vibes!',
      discount: 'Gift',
      endDate: '2025-06-15',
      code: 'SUMMER40',
      bgColor: 'bg-amber-950',
      textColor: 'text-white',
      borderColor: 'border-white'
    },
    {
      id: 2,
      title: 'Luxury Line Exclusive',
      description: 'Flat 25% off on our premium luxury range. Elegance redefined.',
      discount: '25%',
      endDate: '2025-07-01',
      code: 'LUX25',
      bgColor: 'bg-rose-950',
      textColor: 'text-pink-100',
      borderColor: 'border-pink-100'
    },
    {
      id: 3,
      title: 'BOGO Weekend Deal',
      description: 'Buy one get one free on select fragrances this weekend only!',
      discount: 'Gift',
      endDate: '2025-05-25',
      code: 'BOGO24',
      bgColor: 'bg-pink-900',
      textColor: 'text-white',
      borderColor: 'border-white'
    },
  ];

  return (
    <section id='offers' className='container scroll-mt-20 mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold text-center mb-2 text-amber-900'>Special Offers</h2>
      <p className='text-center text-gray-600 mb-12'>Discover irresistible deals crafted for your senses.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {currentOffers.map((offer) => (
          <div key={offer.id} className={`${offer.bgColor} rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105`}>
            <div className='p-6'>
              <div className='flex justify-between items-start mb-4'>
                <h3 className={`${offer.textColor} text-xl font-semibold`}>
                  {offer.title}
                </h3>
                <span className='bg-white rounded-full p-3 shadow-md'>
                        {offer.discount.includes('%') ? (
                    <FiPercent className='text-amber-900 text-2xl' />
                    ) : (
                    <FiGift className='text-rose-900 text-2xl' />
                    )}
                </span>

              </div>
              <p className='text-white/90 mb-6'>{offer.description}</p>
              <div className='flex items-center text-white/70 mb-6'>
                <FiClock className='mr-2' />
                <span>Ends on {offer.endDate}</span>
              </div>
              <div className='bg-white rounded-lg p-4 mb-4'>
                <p className='text-sm text-gray-500 mb-1'>Use code</p>
                <p className='font-mono font-bold text-lg'>{offer.code}</p>
              </div>
              <button className={`w-full py-3 rounded-lg font-semibold ${offer.textColor} ${offer.borderColor} border hover:bg-white hover:text-black transition`}>
                Claim offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
