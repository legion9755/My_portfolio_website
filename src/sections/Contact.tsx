'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:vaibhave31@gmail.com?subject=Let's%20Work%20Together&body=Hi,%20I'm%20interested%20in%20working%20with%20you.";
  };

  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2 className='font-serif text-2xl md:text-3xl'>Let's create something amazing together</h2>
              <p className='text-sm md:text-base mt-2'>
                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button
                onClick={handleContactClick}
                className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'
              >
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className='size-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
