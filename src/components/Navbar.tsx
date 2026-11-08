import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { href: '#home', label: 'Bosh sahifa' },
  { href: '#services', label: 'Xizmatlar' },
  { href: '#about', label: 'Biz haqimizda' },
  { href: '#gallery', label: 'Galereya' },
  { href: '#contact', label: 'Aloqa' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_6px_30px_-12px_rgba(44,44,44,0.18)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rosegold to-blush text-white shadow-md transition-transform group-hover:scale-105">
            <Sparkles className="w-5 h-5" strokeWidth={1.5} />
          </span>
          <span className="font-serif text-2xl tracking-wide text-charcoal">
            Wella <span className="text-rosegold italic">Salon</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[15px] font-medium text-charcoal-soft hover:text-rosegold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-rosegold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden lg:inline-flex items-center px-6 py-3 rounded-full bg-charcoal text-cream text-sm font-medium tracking-wide hover:bg-rosegold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          Navbatga yozilish
        </a>

        <button
          aria-label="Menyu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-charcoal"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 bg-cream/98 backdrop-blur-md ${
          open ? 'max-h-96 border-t border-rosegold/15' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-charcoal-soft hover:text-rosegold transition-colors border-b border-rosegold/10 last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="block text-center py-3 rounded-full bg-charcoal text-cream font-medium hover:bg-rosegold transition-colors"
            >
              Navbatga yozilish
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
