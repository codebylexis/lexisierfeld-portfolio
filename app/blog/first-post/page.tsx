'use client';

export default function TabsAsPersonalityTest() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#0f1222] text-white px-6 py-24 font-sans">
      <button
        onClick={() => history.back()}
        className="mb-6 text-cyan-300 underline hover:text-cyan-200 transition-colors"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">
        Tabs as a Personality Test
      </h1>
      <p className="text-sm text-slate-400 mb-6">July 17, 2025</p>

      <article className="prose prose-invert max-w-3xl mx-auto text-slate-200 leading-relaxed">
        <p>
          Sometimes I’ll look at my browser and realize I have seventeen tabs open — none of which
          I’m actually reading. A mix of articles, documentation, a YouTube video paused at 1:42,
          some half-filled Google Form I don’t remember starting.
        </p>

        <p>
          I’ll think, “I should close these.” But I never do. Because somehow, they feel like an
          extension of my brain.
        </p>

        <p>
          Tabs are tiny versions of hope. Each one says, <em>I might come back to this</em>. It’s a
          digital version of leaving a book open on the table or scribbling a note in the margin.
          They’re proof of curiosity, even if that curiosity never gets finished.
        </p>

        <p>
          Sometimes I’ll do a “tab cleanse,” closing everything and promising to start fresh. It
          always feels nice — for about ten minutes. Then the tabs start multiplying again, like
          thought fragments I haven’t sorted yet.
        </p>

        <p>
          I think that’s fine, though. The web was never meant to be tidy. It’s supposed to be a
          little chaotic, like a desk full of ideas mid-construction. My tabs aren’t clutter —
          they’re evidence of attention, scattered but alive.
        </p>
      </article>
    </main>
  );
}
