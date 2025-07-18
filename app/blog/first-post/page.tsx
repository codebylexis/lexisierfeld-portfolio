'use client';

export default function FirstPost() {
  return (
    <main className="min-h-screen bg-[#0b0c1d] text-white px-6 py-24">
      <button onClick={() => history.back()} className="mb-6 text-pink-300 underline">
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-2">I Built My Blog Without Slugs, MDX, or Headaches</h1>
      <p className="text-sm text-purple-300 mb-6">June 17, 2025</p>
      <article className="prose prose-invert">
        <p>
          So I built this blog section of my portfolio recently, and I just want to say: dynamic
          routes are great and all, but sometimes you just want things to work.
        </p>

        <p>
          At first, I tried setting up the typical <code>[slug]/page.tsx</code> structure, loading
          <code>.mdx</code> files from folders, using <code>gray-matter</code> and
          <code>generateStaticParams()</code>. But then Next.js 15 hit me with “Event handlers
          can’t be passed to Server Components” and honestly? I was over it.
        </p>

        <p>
          So I simplified everything. No dynamic routes. No MDX. I just created a folder for each
          blog post (like <code>/blog/first-post/page.tsx</code>) and wrote the content directly in
          JSX. When I want to add a new post, I copy a folder, write a new one, and link to it
          manually from the blog index.
        </p>

        <p>
          Yeah, it’s manual — but it’s solid. No 404s, no broken builds, no weird frontmatter
          parsing. And it still gets statically generated and fast.
        </p>

        <p>
          Could I switch to MDX later? Totally. But right now, I just wanted to ship something that
          worked without wrestling my setup every step of the way.
        </p>

        <p>
          If you’re also struggling to get a blog working in the App Router without Next yelling at
          you about Client Components, this setup might save you some frustration.
        </p>

        <p>Anyway, welcome to the blog. More posts soon. Hopefully less debugging in the next one.</p>
      </article>
    </main>
  );
}
