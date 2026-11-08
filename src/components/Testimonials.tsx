import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { Reveal } from './Reveal';

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-rosegold tracking-[0.3em] uppercase text-xs mb-4">
            Mijozlar fikri
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal">
            Bizning mijozlarimiz nima deydi
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="h-full bg-white rounded-2xl p-7 border border-rosegold/15 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(212,163,115,0.35)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <Quote className="absolute -top-2 -right-2 w-20 h-20 text-blush-light/40 rotate-180" />
                <div className="relative flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-rosegold text-rosegold" />
                  ))}
                </div>
                <blockquote className="relative text-charcoal-soft/90 leading-relaxed text-[15px]">
                  "{t.text}"
                </blockquote>
                <figcaption className="relative mt-6 pt-5 border-t border-rosegold/15">
                  <div className="font-serif text-lg text-charcoal">{t.name}</div>
                  <div className="text-xs text-rosegold tracking-wide mt-0.5">{t.service}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
