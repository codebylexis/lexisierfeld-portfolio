import Link from 'next/link';

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <ul className="space-y-6">
        <li className="bg-white/10 p-6 rounded-xl">
          <Link href="/blog/first-post" className="text-pink-200 text-2xl font-semibold">
            First Blog Post
          </Link>
          <p className="text-purple-300 text-sm">June 25, 2025</p>
          <p className="text-gray-300">Welcome to my first blog post!</p>
        </li>

        {/* Add more posts like this manually */}
        {/* 
        <li className="bg-white/10 p-6 rounded-xl">
          <Link href="/blog/another-post" className="text-pink-200 text-2xl font-semibold">
            Another Blog Post
          </Link>
          <p className="text-purple-300 text-sm">June 30, 2025</p>
          <p className="text-gray-300">Thoughts on another interesting topic.</p>
        </li>
        */}
      </ul>
    </main>
  );
}
