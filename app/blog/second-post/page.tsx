'use client';

export default function FifthPost() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#0f1222] text-white px-6 py-24 font-sans">
      <button
        onClick={() => history.back()}
        className="mb-6 text-cyan-300 underline hover:text-cyan-200 transition-colors"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">
        The Strange Joy of Inspecting Random Websites for No Reason
      </h1>
      <p className="text-sm text-slate-400 mb-6">June 22, 2025</p>

      <article className="prose prose-invert max-w-3xl mx-auto text-slate-200 leading-relaxed">
        <p>
          Sometimes I’ll be scrolling on a restaurant site or an artist’s portfolio and think,
          “wait… how’d they do that?” And next thing I know, I’ve got dev tools open and I’m
          digging through nested <code>div</code>s like I’m doing digital forensics.
        </p>

        <p>
          Not because I need to. Not because I’m stealing anything. Just out of curiosity. Just for
          the weird little thrill of finding out how someone else solved something.
        </p>

        <p>
          I’ll look at how they handle hover states. What fonts they picked. How many divs deep
          their nav is. Sometimes it’s super clean and I feel inspired. Other times it’s… not. But
          even that’s kind of fun.
        </p>

        <p>
          Web dev can get so focused on output — the site, the result, the repo. But this is one of
          those inputs I quietly love. Just peeking behind the curtain of someone else’s logic and
          style choices.
        </p>

        <p>
          If you’ve never done it, try it. Right click → inspect on a site that makes you pause, and
          just… poke around. You might find a weird hack, a smart pattern, or something beautifully
          dumb that still works.
        </p>

        <p>
          It won’t teach you React or land you a job. But it might remind you that under all the
          tooling, the web is still just a bunch of boxes, arranged by humans.
        </p>
      </article>
    </main>
  );
}
