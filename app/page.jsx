'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import ResumeBtn from './components/ResumeBtn';
import WelcomeComponent from './components/WelcomeComponent';
import Services from './components/Services';
import NavBar from './components/NavBar';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web5 from '../public/web5.png';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <div>
          {/* <nav className='py-10 mb-12 flex justify-between dark:text-gray-200'>
            <h1 className='text-xl font-burtons'>developedBy: Facu</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  className='cursor-pointer text-2xl'
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <ResumeBtn />
              </li>
            </ul>
          </nav> */}
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          {/* First Page */}
          <WelcomeComponent />

          {/* Second Page */}
          <Services />

          {/* Third Page */}
          <section>
            <div>
              <h3 className='text-3xl py-1 dark:text-gray-200'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className='text-teal-500'> agencies </span>
                consulted for <span className='text-teal-500'>startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image
                  src={web1}
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  src={web2}
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image
                  src={web3}
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                />
              </div>
              {/* <div className='basis-1/3 flex-1'>
              <Image
                src={web4}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div> */}
              <div className='basis-1/3 flex-1'>
                <Image
                  src={web5}
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                />
              </div>
              {/* <div className='basis-1/3 flex-1'>
              <Image
                src={web6}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
