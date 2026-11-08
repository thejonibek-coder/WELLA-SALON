import { useState } from 'react';
import { Scissors, Sparkles, Brush, Flower2 } from 'lucide-react';
import { services } from '@/data/content';
import { Reveal } from './Reveal';

const iconMap = { Scissors, Sparkles, Brush, Flower2 };

export function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active) ?? services[0];
  const Icon = iconMap[current.icon as keyof typeof iconMap];

  return (
    <section id="services" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-rosegold tracking-[0.3em] uppercase text-xs mb-4">
            Bizning xizmatlar
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal">
            Xizmatlar va Narxlar
          </h2>
          <p className="mt-5 text-charcoal-soft/80 leading-relaxed">
            Har bir xizmat malakali ustalar va premium mahsulotlar yordamida
            amalga oshiriladi. Narxlar so'mda ko'rsatilgan.
          </p>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {services.map((cat) => {
              const CatIcon = iconMap[cat.icon as keyof typeof iconMap];
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${
                    isActive
                      ? 'bg-charcoal text-cream border-charcoal shadow-md'
                      : 'bg-transparent text-charcoal-soft border-rosegold/30 hover:border-rosegold hover:text-rosegold'
                  }`}
                >
                  <CatIcon className="w-4 h-4" strokeWidth={1.5} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Price grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {current.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <div className="group h-full rounded-2xl bg-white border border-rosegold/15 p-6 hover:border-rosegold/40 hover:shadow-[0_20px_40px_-20px_rgba(212,163,115,0.4)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex items-center justify-center w-9 h-9 rounded-full bg-blush-light/60 text-rosegold transition-colors group-hover:bg-rosegold group-hover:text-white">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-charcoal leading-snug">
                        {item.name}
                      </h3>
                      {item.desc && (
                        <p className="text-sm text-charcoal-soft/70 mt-1">{item.desc}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-dashed border-rosegold/25 flex items-center justify-between">
                  <span className="text-rosegold font-medium tracking-wide">{item.price}</span>
                  <a
                    href="#booking"
                    className="text-xs uppercase tracking-wider text-charcoal-soft/60 group-hover:text-rosegold transition-colors"
                  >
                    Yozilish →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
