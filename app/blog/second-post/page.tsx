'use client';

export default function FifthPost() {
  return (
    <main className="min-h-screen bg-[#0b0c1d] text-white px-6 py-24">
      <button onClick={() => history.back()} className="mb-6 text-pink-300 underline">
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-2">
        The Strange Joy of Inspecting Random Websites for No Reason
      </h1>
      <p className="text-sm text-purple-300 mb-6">June 28, 2025</p>
      <article className="prose prose-invert">
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
