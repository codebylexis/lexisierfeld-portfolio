'use client';


export default function FirstPost() {
  return (
    <main className="min-h-screen bg-[#0b0c1d] text-white px-6 py-24">
      <button onClick={() => history.back()} className="mb-6 text-pink-300 underline">
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-2">First Blog Post</h1>
      <p className="text-sm text-purple-300 mb-6">June 25, 2025</p>
      <article className="prose prose-invert">
        <p>Welcome to my very first blog post! I&apos;m excited to share more soon.</p>
      </article>
    </main>
  );
}