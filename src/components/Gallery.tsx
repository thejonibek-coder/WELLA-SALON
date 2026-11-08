import { gallery } from '@/data/content';
import { Reveal } from './Reveal';

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-rosegold tracking-[0.3em] uppercase text-xs mb-4">
            Galereya
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal">
            Ishlarimizdan namunalar
          </h2>
          <p className="mt-5 text-charcoal-soft/80 leading-relaxed">
            Salon interyieri va go'zalliktransformatsiyalaridan lavhalar.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] sm:auto-rows-[260px] gap-4">
          {gallery.map((img, i) => (
            <Reveal
              key={img.url}
              delay={i * 50}
              className={img.span ? 'col-span-2 row-span-1' : ''}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-2xl shadow-md">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/35 transition-colors duration-500 flex items-end p-5">
                  <span className="text-cream text-sm tracking-wide opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    {img.alt}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
