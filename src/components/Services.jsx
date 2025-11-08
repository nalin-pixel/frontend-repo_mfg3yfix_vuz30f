import { Building2, Ruler, Layers, Layout } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architecture",
    desc: "Context-driven buildings with careful proportions, light, and material discipline.",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Ruler,
    title: "Interior Design",
    desc: "Quiet, functional interiors crafted to support focus, wellness, and identity.",
    image:
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Layers,
    title: "Brand Environments",
    desc: "Retail and workplace experiences that translate brand into space with clarity.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Layout,
    title: "Planning & Strategy",
    desc: "Early-stage advisory, feasibility, and space planning to align vision and value.",
    image:
      "https://images.unsplash.com/photo-1442947176048-6152a25c1f3d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Services</h2>
          <p className="mt-3 text-neutral-700">We balance creative rigor with technical precision to deliver enduring outcomes.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group rounded-2xl overflow-hidden border border-black/10 bg-white flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-neutral-900" />
                  <h3 className="font-medium text-neutral-900">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-700 flex-1">{s.desc}</p>
                <div className="mt-4">
                  <a href="#contact" className="text-sm font-medium text-neutral-900 hover:underline underline-offset-4">Learn more</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
