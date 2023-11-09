import Image from 'next/image';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
export default function Services() {
  return (
    <section>
      <div>
        <h3 className='text-3xl pt-5 pb-1 dark:text-gray-200'>
          Services I offer
        </h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className='text-teal-500'> agencies </span>
          consulted for <span className='text-teal-500'>startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className='lg:flex gap-10'>
        <div className='text-center shadow-xl p-10 rounded-xl my-10 flex flex-col items-center dark:bg-white/80'>
          <Image src={design} width={100} height={100} />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className='py-4 text-teal-600 font-medium'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Ilustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
        </div>
        <div className='text-center shadow-xl p-10 rounded-xl my-10 flex flex-col items-center dark:bg-white/80'>
          <Image src={code} width={100} height={100} />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className='py-4 text-teal-600 font-medium'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Ilustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
        </div>
        <div className='text-center shadow-xl p-10 rounded-xl my-10 flex flex-col items-center dark:bg-white/80'>
          <Image src={consulting} width={100} height={100} />
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className='py-4 text-teal-600 font-medium'>Design tools I use</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Ilustrator</p>
          <p className='text-gray-800 py-1'>Figma</p>
        </div>
      </div>
    </section>
  );
}
