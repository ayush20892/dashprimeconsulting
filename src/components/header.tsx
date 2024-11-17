'use client';
import { useState } from 'react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  //   const [flyer, setFlyer] = useState(false);
  //   const [flyerTwo, setFlyerTwo] = useState(false);

  return (
    <header className='fixed top-0 w-full clearNav z-50 bg-black bg-opacity-50 backdrop-blur-sm'>
      <div className='max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row'>
        <div className='flex flex-row items-center justify-between p-3 md:p-1'>
          <a
            href='/'
            className='flex items-center text-3xl font-bold md:mb-0 tracking-wider'
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
              DASH<span className="text-white mx-2 opacity-80">|</span>PRIME
            </span>
            <span className="ml-1 text-xs text-gray-400 font-normal tracking-widest align-top mt-1">™</span>
          </a>
          <button
            className='text-white pb-2 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto'
            type='button'
            aria-label='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-menu'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className='md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start'>
            <a
              href='#about'
              className='mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04'
            >
              About Us
            </a>
            <a
              href='#why-choose-us'
              className='mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04'
            >
              Why Choose us ?
            </a>
            <a
              href='#services'
              className='mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04'
            >
              Our Services
            </a>
            <a
              href='https://forms.gle/PdYkmFcT2s2c3XRX8'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer text-gray-300 hover:text-white font-semibold tr04 md:border md:border-white rounded-[5rem] px-4 py-2'
            >
              Join our talent pool
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
