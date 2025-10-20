'use client';

export default function TheEmotionsOfMoney() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#0f1222] text-white px-6 py-24 font-sans">
      <button
        onClick={() => history.back()}
        className="mb-6 text-cyan-300 underline hover:text-cyan-200 transition-colors"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">
        The Emotions of Money
      </h1>
      <p className="text-sm text-slate-400 mb-6">October 12, 2025</p>

      <article className="prose prose-invert max-w-3xl mx-auto text-slate-200 leading-relaxed">
        <p>
          I used to think money was logical — just numbers moving from one account to another. But
          the more I watch markets, read financial headlines, or even just check my bank app, the
          more I realize: it’s emotional. Deeply emotional.
        </p>

        <p>
          Every chart, every jump, every crash is just a collective mood swing. Hope, fear, greed,
          relief — plotted as a line that goes up and down. We call it “volatility,” but it’s really
          just people reacting to uncertainty in synchronized panic.
        </p>

        <p>
          That’s what makes finance strangely human. Beneath the math and the models, it’s still a
          story about confidence — what we believe will matter tomorrow, and how that belief
          changes minute by minute.
        </p>

        <p>
          I like watching markets not to make predictions, but to notice patterns in behavior. The
          optimism of a Monday morning. The quiet anxiety before earnings calls. The little bursts
          of overreaction that say, “we’re still guessing.”
        </p>

        <p>
          It’s easy to think of finance as cold — spreadsheets, algorithms, tickers. But to me, it’s
          one of the most emotional systems we’ve ever built. It’s a mirror, reflecting how we feel
          about the future at scale.
        </p>

        <p>
          And maybe that’s why I find it interesting. Not for the profits or predictions, but for
          the reminder that under all those numbers, it’s still just us — hoping, doubting, and
          trying to make sense of what comes next.
        </p>
      </article>
    </main>
  );
}
