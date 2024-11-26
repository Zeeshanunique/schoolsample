'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          ONEX GREY RESIDENTIAL PUBLIC SCHOOL
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="block md:inline-block hover:text-blue-200 py-2 md:py-0">Home</Link>
          <Link href="/about" className="block md:inline-block hover:text-blue-200 py-2 md:py-0">About</Link>
          <Link href="/admissions" className="block md:inline-block hover:text-blue-200 py-2 md:py-0">Admissions</Link>
          <Link href="/contact" className="block md:inline-block hover:text-blue-200 py-2 md:py-0">Contact</Link>
        </div>
      </div>
    </nav>
  );
}