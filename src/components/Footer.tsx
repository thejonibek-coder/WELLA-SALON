import { MapPin, Clock, Phone, Instagram, Send, Sparkles, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-cream pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rosegold to-blush text-white">
                  <Sparkles className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <span className="font-serif text-2xl">
                  Wella <span className="text-blush italic">Salon</span>
                </span>
              </div>
              <p className="text-cream/65 leading-relaxed text-sm">
                G'ijdivondagi premium go'zallik saloni. Sizning ishonchingiz —
                bizning obro'ymiz.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/10 hover:bg-rosegold transition-colors"
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/10 hover:bg-rosegold transition-colors"
                >
                  <Send className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a
                  href="tel:+998901234567"
                  aria-label="Telefon"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/10 hover:bg-rosegold transition-colors"
                >
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-xl mb-5 text-blush">Aloqa</h4>
              <ul className="space-y-4 text-sm text-cream/75">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-rosegold shrink-0" strokeWidth={1.5} />
                  <span>g`ijduvon tuman xojalangar ko`chasida</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-rosegold shrink-0" strokeWidth={1.5} />
                  <a href="tel:+998919233393" className="hover:text-blush transition-colors">
                    +998 91 923 33 93
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-rosegold shrink-0" strokeWidth={1.5} />
                  <span>Har kuni: 09:00 — 19:00</span>
                </li>
              </ul>
            </div>

            {/* Nav */}
            <div>
              <h4 className="font-serif text-xl mb-5 text-blush">Bo'limlar</h4>
              <ul className="space-y-3 text-sm text-cream/75">
                {[
                  { href: '#home', label: 'Bosh sahifa' },
                  { href: '#services', label: 'Xizmatlar' },
                  { href: '#about', label: 'Biz haqimizda' },
                  { href: '#gallery', label: 'Galereya' },
                  { href: '#booking', label: 'Navbatga yozilish' },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-blush transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div>
              <h4 className="font-serif text-xl mb-5 text-blush">Band qiling</h4>
              <p className="text-sm text-cream/70 leading-relaxed mb-5">
                O'zingizga qulay vaqtni oldindan rezervatsiya qiling va
                go'zallikdan bahramand bo'ling.
              </p>
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-rosegold text-cream text-sm font-medium hover:bg-blush hover:text-charcoal transition-all duration-300"
              >
                Navbatga yozilish
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 pt-8 border-t border-cream/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Wella Salon. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1.5">
            Sevgi bilan yaratilgan <Heart className="w-3 h-3 fill-rosegold text-rosegold" /> Toshkentda
          </p>
        </div>
      </div>
    </footer>
  );
}
