export default function KeyMetrics() {
  const metrics = [
    { label: 'Years of Practice', value: '12+' },
    { label: 'Projects Delivered', value: '240+' },
    { label: 'Awards & Mentions', value: '38' },
    { label: 'Cities Worked In', value: '15' },
  ];

  return (
    <section className="bg-white" id="about">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-black/10 p-6 bg-white">
              <div className="text-3xl font-semibold text-neutral-900">{m.value}</div>
              <div className="mt-1 text-sm text-neutral-600">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
