'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="flex gap-6 items-center text-sm text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <a href="https://github.com/codebylexis" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/lexi-sierfeld" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
