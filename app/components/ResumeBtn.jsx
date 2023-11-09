import Link from 'next/link';

export default function ResumeBtn() {
  return (
    <Link
      download='facundo_nadaf_CV'
      href='/facundo_nadaf_CV.pdf'
      className='bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:to-cyan-600 hover:from-teal-500'
    >
      <span>Resume</span>
    </Link>
  );
}
