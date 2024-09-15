import Image from 'next/image';

export default function Main() {
  return (
    <section className='text-gray-600 body-font'>
      {/* <div className='max-w-5xl pt-52 pb-24 mx-auto'>
        <h1 className='text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6'>
          Create your next website fast and easy
        </h1>
        <h2 className='text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center'>
          nine4 is a free to use template website for websites made
          <br />
          with Next.js and styled with Tailwind CSS
        </h2>
        <div className='ml-6 text-center'>
          <a
            className='inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline'
            href='/'
          >
            <div className='flex text-lg'>
              <span className='justify-center'>View All Templates</span>
            </div>
          </a>
          <a
            className='inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline'
            href='/'
          >
            <div className='flex text-lg'>
              <span className='justify-center'>Purchase</span>
            </div>
          </a>
        </div>
      </div> */}
      <h2 className='pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-5xl md:text-6xl'>
        Elite HR Solutions for Finance Leaders
      </h2>
      <br></br>
      <div className='container flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8'>
        <Image
          width={800}
          height={600}
          quality={100}
          className='object-contain w-full mb-10 border shadow-md g327'
          alt='Placeholder Image'
          src='/images/hr.png'
        />
      </div>
      {/* <p className='mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3'>
        We specialize in delivering exceptional human resources solutions
        tailored to meet the unique needs of our clients. Our expertise lies in
        connecting companies with the right talent, ensuring that each candidate
        perfectly aligns with the organization's specific requirements. With a
        deep understanding of the ever-evolving job market, we maintain an
        extensive database of qualified candidates, allowing us to quickly
        respond to our clients' demands.Our mission is to empower businesses by
        providing them with the resources they need to thrive, fostering growth,
        and enhancing productivity. Whether it's sourcing top-tier talent,
        offering expert HR consulting, or facilitating smooth recruitment
        processes, we are committed to driving success for our clients.Partner
        with us to build a stronger, more dynamic workforce.
      </p> */}
      <div className='pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3'>
        <div className='ktq4'>
          {/* <Image
            width={40}
            height={40}
            className='w-10'
            src='https://nine4.app/favicon.png'
            alt='Nine4 image'
          /> */}
          <h3 className='pt-3 font-semibold text-lg text-white'>
            Specialized HR Solutions:
          </h3>
          <p className='pt-2 value-text text-md text-gray-200 fkrr1'>
            We provide exceptional human resources solutions that are carefully
            customized to address the specific needs of each client. Our
            services are not one-size-fits-all, but rather tailored to suit
            individual company requirements.
          </p>
        </div>
        <div className='ktq4'>
          {/* <Image
            width={40}
            height={40}
            className='w-10'
            src='https://nine4.app/favicon.png'
            alt='Nine4 image'
          /> */}
          <h3 className='pt-3 font-semibold text-lg text-white'>
            Expert Talent Matching:
          </h3>
          <p className='pt-2 value-text text-md text-gray-200 fkrr1'>
            Our core strength lies in our ability to connect companies with
            ideal candidates. We ensure that each potential employee we
            recommend aligns perfectly with the organization&apos;s unique
            requirements, culture, and goals.
          </p>
        </div>
        <div className='ktq4'>
          {/* <Image
            width={40}
            height={40}
            className='w-10'
            src='https://nine4.app/favicon.png'
            alt='Nine4 image'
          /> */}
          <h3 className='pt-3 font-semibold text-lg text-white'>
            In-depth Market Knowledge:
          </h3>
          <p className='pt-2 value-text text-md text-gray-200 fkrr1'>
            We possess a comprehensive understanding of the constantly changing
            job market. This expertise allows us to stay ahead of trends and
            provide up-to-date, relevant solutions to our clients.
          </p>
        </div>
        <div className='ktq4'>
          {/* <Image
            width={40}
            height={40}
            className='w-10'
            src='https://nine4.app/favicon.png'
            alt='Nine4 image'
          /> */}
          <h3 className='pt-3 font-semibold text-lg text-white'>
            Extensive Talent Database:
          </h3>
          <p className='pt-2 value-text text-md text-gray-200 fkrr1'>
            We maintain a large, curated database of qualified candidates across
            various fields. This resource enables us to respond swiftly and
            effectively to our clients&apos; staffing needs.
          </p>
        </div>
      </div>
      <section className='relative pb-24'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 text-center'>
          <div className='py-24 md:py-36'>
            <h1 className='mb-5 text-6xl font-bold text-white'>
              Subscribe to our newsletter
            </h1>
            <h1 className='mb-9 text-2xl font-semibold text-gray-200'>
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type='email'
              placeholder='jack@example.com'
              name='email'
              // autocomplete="email"
              className='border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black'
            />{' '}
            <a
              className='inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white'
              href='/'
            >
              <span className='justify-center'>Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
