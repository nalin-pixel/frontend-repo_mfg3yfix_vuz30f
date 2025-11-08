import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 ring-1 ring-black/10 mb-4">
              Modern • Minimal • Architectural
            </span>
            <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-tight">
              Contemporary spaces that elevate brand, culture, and life.
            </h1>
            <p className="mt-4 text-neutral-700 max-w-2xl">
              We are a multidisciplinary studio shaping architecture and interior environments with clarity, restraint, and timeless detail.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#services" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors">
                Explore Services
              </a>
              <a href="#work" className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-neutral-900 ring-1 ring-black/10 hover:bg-neutral-50 transition-colors">
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
    </section>
  );
}
