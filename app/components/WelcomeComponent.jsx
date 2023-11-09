import Image from 'next/image';
import SocialMedia from './SocialMedia';
import deved from '../../public/dev-ed-wave.png';

export default function WelcomeComponent() {
  return (
    <section>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
          Facundo Nadaf
        </h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200'>
          Frontend Developer.
        </h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
          Freelancer providing services for programming and other needs. Join me
          down below and let's get cracking!
        </p>
      </div>
      <SocialMedia />
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
        <Image src={deved} layout='fill' objectFit='cover' />
      </div>
    </section>
  );
}
