import { ChevronRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7195811/pexels-photo-7195811.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Wella Salon interyeri"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/45 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 text-cream text-sm tracking-wide mb-7">
            <Star className="w-3.5 h-3.5 fill-rosegold text-rosegold" />
            <span>Toshkentdagi premium go'zallik saloni</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-cream leading-[1.08] text-balance">
            Wella Salon —{' '}
            <span className="italic text-blush">
              Go'zalligingizning yangi qirralarini kashf eting
            </span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-cream/85 leading-relaxed max-w-2xl font-light">
            Premium soch parvarishi, makiyaj va yuz go'zalligi bir joyda.
            Mutaxassis ustalar va xalqaro standartlardagi xizmat bilan
            o'zingizni maxsus his qiling.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rosegold text-cream font-medium tracking-wide hover:bg-blush hover:text-charcoal transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Online yozilish
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-cream/40 text-cream font-medium tracking-wide hover:bg-cream hover:text-charcoal transition-all duration-300 backdrop-blur-sm"
            >
              Xizmatlarni ko'rish
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { n: '12+', l: "Yillik tajriba" },
              { n: '8K+', l: "Mamnun mijozlar" },
              { n: '4.9', l: "O'rtacha reyting" },
            ].map((s) => (
              <div key={s.l} className="border-l border-cream/25 pl-4">
                <div className="font-serif text-3xl text-cream">{s.n}</div>
                <div className="text-xs sm:text-sm text-cream/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-cream/60">
        <span className="text-xs tracking-[0.3em] uppercase">Aylantiring</span>
        <div className="mt-2 w-px h-10 bg-cream/40 overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-4 bg-rosegold animate-[scrollcue_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`@keyframes scrollcue{0%{transform:translateY(-100%)}50%{transform:translateY(150%)}100%{transform:translateY(150%)}}`}</style>
    </section>
  );
}
