import Link from 'next/link';

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-12 text-center">
          🚀 Blog Posts I’ve Written
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog Post: Inspecting Random Websites */}
          <div className="bg-white/5 border border-pink-500/20 rounded-2xl p-6 hover:bg-white/10 transition">
            <h2 className="text-xl font-semibold text-pink-200 mb-2">
              The Strange Joy of Inspecting Random Websites
            </h2>
            <p className="text-sm text-purple-300 mb-1">🗓️ June 28, 2025</p>
            <p className="text-gray-300 mb-4">
              A small habit that makes me weirdly happy.
            </p>
            <Link
              href="/blog/fifth-post"
              className="inline-block bg-pink-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Read Post
            </Link>
          </div>

          {/* Blog Post: No Slugs, No MDX */}
          <div className="bg-white/5 border border-pink-500/20 rounded-2xl p-6 hover:bg-white/10 transition">
            <h2 className="text-xl font-semibold text-pink-200 mb-2">
              I Built My Blog Without Slugs, MDX, or Headaches
            </h2>
            <p className="text-sm text-purple-300 mb-1">🗓️ June 25, 2025</p>
            <p className="text-gray-300 mb-4">
              Simplifying my blog setup in Next.js 15 — no slugs, no MDX, just working.
            </p>
            <Link
              href="/blog/first-post"
              className="inline-block bg-pink-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Read Post
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
