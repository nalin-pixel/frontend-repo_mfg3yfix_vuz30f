export default function SocialProof() {
  const logos = [
    { name: 'Aesop', text: 'Aesop' },
    { name: 'Muji', text: 'Muji' },
    { name: 'Nike', text: 'Nike' },
    { name: 'Apple', text: 'Apple' },
    { name: 'Sony', text: 'Sony' },
    { name: 'Adobe', text: 'Adobe' },
  ];

  return (
    <section aria-label="Trusted by" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl border border-black/10 bg-neutral-50/60">
          <div className="flex items-center justify-between gap-8 px-6 py-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [*::-webkit-scrollbar]{display:none}">
            {logos.map((logo) => (
              <div key={logo.name} className="shrink-0 select-none">
                <span className="text-neutral-400 font-semibold tracking-widest uppercase text-xs">
                  {logo.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
