'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiLogoGmail } from 'react-icons/bi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function SocialMedia() {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center text-5xl gap-16 py-3 text-gray-500 dark:text-gray-200'>
        <Link href={'https://github.com/cufa03'}>
          <AiFillGithub className='hover:text-black hover:rounded-full' />
        </Link>
        <Link href={'https://www.linkedin.com/in/facundonadaf/'}>
          <AiFillLinkedin className='hover:text-blue-600' />
        </Link>
        <button onClick={handleClick}>
          <CopyToClipboard text='facundo.nadaf@gmail.com'>
            <BiLogoGmail className='hover:text-red-600' />
          </CopyToClipboard>
        </button>
      </div>
      {/* <div>
        <span className='text-sm absolute bottom-12 right-14 text-black font-bold border-[5px] border-teal-500 rounded-md bg-teal-500 p-3'>
          Mail copied to clipboard
        </span>
      </div> */}
      <div>
        {copied && (
          <span className='text-sm absolute bottom-12 right-14 text-black font-bold border-[5px] border-teal-400 rounded-md bg-teal-400 p-3'>
            Mail copied to clipboard
          </span>
        )}
      </div>
    </div>
  );
}
