/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';

export default function Main() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <main className='bg-black text-white'>
      {/* <section className='from-gray-900 to-blue-900 text-white pt-20'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-down whitespace-nowrap overflow-hidden text-ellipsis'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>
                HR Solutions
              </span>
            </h1>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-up'>
              <span className='text-gray-300'>for</span>
              <span className='text-blue-300'> Finance Leaders</span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in'>
              Transforming businesses through strategic talent acquisition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Image
            src="/images/hr.png"
            alt="HR Solutions"
            width={500}
            height={300}
            className="rounded-lg shadow-2xl animate-float"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Our Expertise</h2>
            <p className="text-gray-300">
              We deliver exceptional HR solutions tailored for the finance sector, 
              connecting top talent with industry-leading companies.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Specialized HR Solutions', 'Expert Talent Matching', 'In-depth Market Knowledge', 'Extensive Talent Database'].map((title, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-300">
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for the latest insights and trends.</p>
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Subscribe
            </button>
          </form>
        </div>
        </div>
      </section> */}

      {/* Join Talent Pool Section */}
      <section className='pt-32 pb-16 bg-black relative overflow-hidden'>
        {/* Animated background gradient */}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy'></div>

        {/* Content */}
        <div className='container mx-auto px-4 text-center relative z-10'>
          <h2 className='text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>
            Ready to Advance Your Career?
          </h2>

          <div className='relative inline-flex group'>
            {/* Gradient border animation */}
            <div className='absolute -inset-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy'></div>

            {/* Button */}
            <button
              onClick={() =>
                window.open('https://forms.gle/PdYkmFcT2s2c3XRX8', '_blank')
              }
              className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
            >
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:text-white transition-all duration-200'>
                Join our talent pool
              </span>
              <svg
                className='w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-200'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                ></path>
              </svg>
            </button>
          </div>

          <p className='mt-6 text-gray-400 max-w-md mx-auto'>
            Join our exclusive network of finance professionals and get access
            to premier opportunities
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id='about' className='py-20 bg-gray-800 bg-opacity-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight leading-tight'>
            About Us
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            <div className='space-y-4 md:space-y-6 order-2 md:order-1'>
              <p className='text-base md:text-lg leading-relaxed'>
                At Dash Prime Consulting, we are driven by a clear vision:
                connecting the right talent with the right companies. Our
                mission is to match highly skilled professionals with
                organizations that need their expertise, ensuring a perfect fit
                for both parties.
              </p>
              <p className='text-base md:text-lg leading-relaxed'>
                Whether you&apos;re a growing business or an experienced
                professional, we are committed to delivering tailored staffing
                solutions that align with your unique needs. Our focus is on
                providing top-tier candidates who not only meet but exceed our
                clients&apos; expectations. We understand that every business
                has specific requirements, and we take a personalized approach
                to sourcing the right individuals who can help your organization
                thrive.
              </p>
              <p className='text-base md:text-lg leading-relaxed'>
                But we don&apos;t stop there. At Dash Prime Consulting, we are
                also building department-specific communities to support
                employees in finding global opportunities that truly align with
                their profiles. Our goal is to create lasting connections that
                benefit both companies and candidates alike.
              </p>
              <p className='text-base md:text-lg leading-relaxed'>
                With a dedication to quality and precision, &ldquo;We create the
                bridge&rdquo; between talent and opportunity, ensuring success
                for everyone involved.
              </p>
            </div>
            <div className='relative group cursor-pointer perspective-1000 order-1 md:order-2 mb-8 md:mb-0'>
              <div className='absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-30 group-hover:opacity-90 transition-all duration-700 group-hover:duration-200 animate-pulse'></div>
              <div className='relative transform transition-all duration-500 group-hover:scale-105'>
                <img
                  src='/images/hr.png'
                  alt='HR Solutions'
                  width={700}
                  height={420}
                  className='w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(168,_85,_247,_0.7)] transition-all duration-500 group-hover:rotate-2'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id='why-choose-us' className='py-20 bg-gray-800 bg-opacity-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-center'>
            Why Choose Us ?
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8'>
            {[
              {
                title: 'Treasury Expertise, Exclusively',
                description:
                  "We specialize exclusively in Treasury operations and staffing, making us uniquely positioned to understand the intricate demands of the field. Unlike generic consulting firms, our deep focus on Treasury enables us to deliver precise, tailored solutions that drive real results. We know the complexities of this space, and we're equipped to provide the right people and strategies to tackle them.",
                icon: '📊',
              },
              {
                title: 'Extensive Network of Skilled Professionals',
                description:
                  "With an expansive network of highly qualified Treasury professionals, we have access to talent that spans across all levels—from junior analysts to senior executives. Our candidates are carefully vetted and selected for their expertise, ensuring that we provide top-tier professionals who fit seamlessly into your organization's unique culture and operational requirements.",
                icon: '🎯',
              },
              {
                title: 'Tailored Solutions for Your Business',
                description:
                  "No two businesses are the same, and we don't believe in one-size-fits-all solutions. Whether you're building a new team for a Greenfield project, seeking experts for Brownfield upgrades, or looking for contractual staffing, we provide services that are customized to meet your specific needs. We work closely with you to understand your goals and design solutions that are aligned with your vision.",
                icon: '🌐',
              },
              {
                title: 'Innovative and Engaging Approach',
                description:
                  'At Dash Prime Consulting, we bring a fresh and innovative approach to Treasury consulting. While we take our work seriously, we believe that working with us should be an enjoyable experience. We are approachable, flexible, and always ready to adapt to the changing dynamics of your business, ensuring that the consulting process is as smooth and efficient as possible.',
                icon: '💡',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-gray-800 bg-opacity-50 p-8 rounded-lg h-full flex flex-col'
              >
                <div className='text-4xl mb-4'>{item.icon}</div>
                <h3 className='text-xl font-semibold mb-4'>{item.title}</h3>
                <p className='flex-grow'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specializations Section */}
      {/* <section className='py-20 bg-black relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5'></div>

        <div className='container mx-auto px-4 relative z-10'>
          <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>
          Our Specializations
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-center'>
            {[
              { name: 'Murex', logo: '/images/logo/murex.svg', show: true },
              { name: 'Calypso Treasury', logo: '/images/logo/calypso.png', show: true },
              { name: 'Kyriba', logo: '/images/logo/kyriba.svg', show: true },
              { name: 'FIS Treasury', logo: '/images/logo/fis.png', show: true },
              { name: 'ION Treasury', logo: '/images/logo/ion.webp', show: true },
              { name: 'SAP Treasury', logo: '/images/logo/sap.png', show: true },
              { name: 'Finmechanics', logo: '/images/logo/finmechanics.png', show: true },
              { name: 'GTreasury.', logo: '/images/logo/gtreasury.jpg', show: true },
              { name: 'Finastra', logo: '/images/logo/finastra.png', show: true },
              {
                name: 'TreasuryXpress',
                logo: '/images/logo/treasuryxpress.jpeg',
                show: true
              },
              { name: 'Broadridge', logo: '/images/logo/broadridge.webp', show: true },
              { name: 'TCS BaNCS', logo: '/images/logo/tcsbancs.png', show: true },
              { name: 'Oracle Treasury', logo: '/images/logo/oracle.webp', show: true },
              { name: 'EbixCash', logo: '/images/logo/ebixcash.png', show: true },
              {
                name: 'Treasury Elite',
                logo: '/images/logo/treasury-elite.jpg',
                show: true
              },
              { name: 'Misys Opics', logo: '/images/logo/finastra.png', show: false },
              { name: 'SunGard AvantGard', logo: '/images/logo/sungard.webp', show: true },
              { name: 'Infosys Finacle', logo: '/images/logo/infosys-finacle.jpg', show: true },
              { name: 'IBSFINtech', logo: '/images/logo/ibsfintech.png', show: true },
              { name: 'Summit', logo: '/images/logo/summit.png', show: false },
            ].filter(partner => partner.show === true).map((partner, index) => (
              <div
                key={index}
                className='group flex flex-col items-center justify-center transition-all duration-300'
              >
                <div className='w-[160px] h-[90px] mb-2'>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={90}
                    className='object-contain w-full h-full transition-all duration-300'
                  />
                </div>
                <h3 className='text-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300'>
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>

          <p className='text-center text-gray-400 mt-12 max-w-2xl mx-auto'>
          Our team of professionals possesses in-depth expertise and years of hands-on experience with a wide range of products. Their knowledge ensures top-tier service and reliable support, tailored to meet industry standards and client needs.
          </p>
        </div>
      </section> */}

      {/* Our Services Section */}
      <section id='services' className='py-20 bg-gray-800 bg-opacity-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight leading-tight'>
            Our Services
          </h2>
          <div className='grid md:grid-cols-1 gap-16 items-start w-full'>
            <div className='space-y-8'>
              <div className='relative p-8 rounded-2xl bg-gray-900/50 border border-gray-700 hover:shadow-lg transition-shadow duration-300'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-10'></div>
                <div className='relative space-y-4'>
                  <h3 className='text-2xl font-bold text-blue-300 flex items-center gap-3'>
                    <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 text-sm'>
                      1
                    </span>
                    Treasury Employment Solutions for Banks
                  </h3>
                  <p className='text-lg leading-relaxed text-gray-300'>
                    We provide specialized employment services for banks,
                    offering both permanent and contractual staffing solutions.
                    Whether your institution requires highly skilled
                    professionals to support day-to-day Treasury operations or
                    expert resources to assist with temporary projects, we
                    ensure the right talent is in place to meet your specific
                    needs. Our contractual services allow you to flexibly scale
                    your workforce while maintaining operational efficiency.
                  </p>
                </div>
              </div>

              <div className='relative p-8 rounded-2xl bg-gray-900/50 border border-gray-700 hover:shadow-lg transition-shadow duration-300'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-10'></div>
                <div className='relative space-y-4'>
                  <h3 className='text-2xl font-bold text-blue-300 flex items-center gap-3'>
                    <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 text-sm'>
                      2
                    </span>
                    Greenfield Project Staffing
                  </h3>
                  <p className='text-lg leading-relaxed text-gray-300'>
                    For new Treasury system implementations, our Greenfield
                    Project Staffing service is designed to deliver
                    professionals with deep expertise in Treasury systems. We
                    provide talent that ensures smooth execution from system
                    setup to full implementation. This service is tailored for
                    banks, Treasury system owners, and their partner firms
                    involved in these critical projects, ensuring a seamless
                    integration of new technology.
                  </p>
                </div>
              </div>

              <div className='relative p-8 rounded-2xl bg-gray-900/50 border border-gray-700 hover:shadow-lg transition-shadow duration-300'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-10'></div>
                <div className='relative space-y-4'>
                  <h3 className='text-2xl font-bold text-blue-300 flex items-center gap-3'>
                    <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 text-sm'>
                      3
                    </span>
                    Brownfield Project Expertise
                  </h3>
                  <p className='text-lg leading-relaxed text-gray-300'>
                    We assist organizations with Brownfield projects—upgrading
                    or enhancing existing Treasury systems—by offering highly
                    skilled professionals who bring specialized knowledge and
                    experience to the table. Whether it&apos;s improving current
                    systems or adapting to new industry standards, our experts
                    ensure your Treasury operations evolve efficiently.
                  </p>
                </div>
              </div>

              <div className='relative p-8 rounded-2xl bg-gray-900/50 border border-gray-700 hover:shadow-lg transition-shadow duration-300'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-10'></div>
                <div className='relative space-y-4'>
                  <h3 className='text-2xl font-bold text-blue-300 flex items-center gap-3'>
                    <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 text-sm'>
                      4
                    </span>
                    Outsourced Professionals on Contractual Basis
                  </h3>
                  <p className='text-lg leading-relaxed text-gray-300'>
                    For organizations looking to supplement their workforce with
                    outsourced Treasury experts, we provide experienced
                    professionals on a contractual basis. This service allows
                    companies to benefit from expert knowledge without long-term
                    employment commitments, giving them flexibility and control
                    over project execution.
                  </p>
                </div>
              </div>

              <div className='relative p-8 rounded-2xl bg-gray-900/50 border border-gray-700 hover:shadow-lg transition-shadow duration-300'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-10'></div>
                <div className='relative space-y-4'>
                  <h3 className='text-2xl font-bold text-blue-300 flex items-center gap-3'>
                    <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 text-sm'>
                      5
                    </span>
                    Treasury Auditing Expertise
                  </h3>
                  <p className='text-lg leading-relaxed text-gray-300'>
                    We offer access to professionals who possess both
                    Treasury-specific knowledge and auditing expertise. Our
                    auditors bring extensive experience in Treasury processes
                    and systems, ensuring compliance, accuracy, and optimization
                    across your financial operations. This service is ideal for
                    firms needing specialized auditors who understand the
                    nuances of Treasury functions and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
