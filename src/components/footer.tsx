export default function Footer() {
  return (
    <footer className='pb-4 text-gray-200 bg-gray-800 bg-opacity-50'>
      <div className='max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8'>
        <div className='pt-8 pb-4'>
          {/* Links */}
          <div className='lg:col-span-2'>
            <div className='flex flex-col-reverse justify-between  lg:flex-row bg-top'>
              <ul className='flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
                <li>
                  <a
                    href='/'
                    className='text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold'
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold'
                  >
                    Ad Choices
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold'
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href='/'
                    className='text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold'
                  >
                    Partners
                  </a>
                </li>
              </ul>
              <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
                <a
                  href='/'
                  className='text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight'
                >
                  © 2024 Dash prime consulting Ltd.
                </a>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-8">
            <h3 className='text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>Contact Us</h3>
            <div className='space-y-3'>
              <p className='flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                <a href='mailto:contact@dashprime.com' className='hover:text-white transition-colors duration-300'>
                  admin@dashprimeconsulting.com
                </a>
              </p>
              <p className='flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                <span>Mumbai, India</span>
              </p>
              <p className='flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z'/>
                </svg>
                <a href='https://www.linkedin.com/company/dash-prime-consulting/' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors duration-300'>
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
