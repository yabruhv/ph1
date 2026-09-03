import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24 relative">
      <Link 
        href="/"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 md:left-12 lg:left-24 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors flex items-center gap-2 text-sm font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-neutral-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back
      </Link>

      <div className="w-full max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-sans">
        <p>
          Hey, my name is Nande. Welcome to the Experiment.
        </p>
        <p>
          The thesis is simple: systems outperform circumstance. To prove this underlying truth, I told the world I was going to build my own clothing brand from the ground up. I rebranded, locked in the digital infrastructure, and refused to compromise on product quality just to make a quick buck.
        </p>
        <p>
          It wasn't smooth. The viral attempts flopped, and pitching to outside investors hit a brick wall. But instead of quitting, I treated every failure as a data signal, funded the engine internally, and rebuilt the entire website. I documented the wins, losses, and pivots on TikTok under the persona @nun.deh.
        </p>
        <p>
          Which brings us to our first tactical deployment: a heavy, plain black hoodie featuring key Phase One design traits.
        </p>
        <p>
          Important Note: This is a once-off asset. Once the ordering window closes, this exact piece will never be manufactured again.
        </p>
        <p>
          Reaching 200 units sold immediately unlocks our next phase: fully custom-cut silhouettes engineered entirely from scratch. This drop isn't for people chasing trends—it’s for the architects of their own reality.
        </p>
      </div>
    </main>
  );
}