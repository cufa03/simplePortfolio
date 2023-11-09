import ResumeBtn from './ResumeBtn';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className='py-10 mb-12 flex justify-between dark:text-gray-200'>
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
    </nav>
  );
}
