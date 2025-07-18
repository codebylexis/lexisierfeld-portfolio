'use client';

export default function ThirdPost() {
  return (
    <main className="min-h-screen bg-[#0b0c1d] text-white px-6 py-24">
      <button onClick={() => history.back()} className="mb-6 text-pink-300 underline">
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-2">
        I Taught a Neural Network to Write Poetry (Because I Already Do)
      </h1>
      <p className="text-sm text-purple-300 mb-6">June 26, 2025</p>
      <article className="prose prose-invert">
        <p>
          Before I ever wrote code, I wrote poetry. It’s always been my way of sorting out the
          abstract — feelings, memory, mood, the in-between. I’ve even self-published a book on
          Amazon. So yeah, poetry isn’t just a hobby to me — it’s part of who I am.
        </p>

        <p>
          That’s what made me wonder: what happens when someone like me teaches a machine to write
          poetry? Would it feel mechanical, or could it actually create something human? That’s how
          <strong>PoetAI</strong> happened — a project where I trained a deep learning model to
          generate original poems.
        </p>

        <p>
          The setup used stacked LSTM layers, trained on real poetry datasets, with embeddings and
          dense layers to capture structure and tone. It trained over 170 epochs, hit 95% accuracy,
          and produced output that was… well, weird and wonderful.
        </p>

        <p>
          One of the poems it generated on the theme of <em>sadness</em> included this:
        </p>

        <blockquote>
          <p>
            “brings me chocolate from the pentagon / dark chocolates shaped like…”<br />
            and then it just spirals. But in a way that feels kind of real.
          </p>
        </blockquote>

        <p>
          It wasn’t perfect. But it surprised me how often it landed on something close to
          emotional truth. The chaos made it feel honest — like the model was stumbling into beauty
          without knowing it, which honestly, isn’t that far off from how human poetry works too.
        </p>

        <p>
          PoetAI didn’t replace my voice. But it gave me a strange new one to play with. As someone
          who writes code and poems, I liked that it blurred the line between the two. Sometimes I
          guide the words. Sometimes I let the model go wild.
        </p>

        <p>
          Poetry isn’t about rules. And neither is building cool stuff with AI. This project reminded
          me how those two ideas actually speak the same language — just in different forms.
        </p>
      </article>
    </main>
  );
}
