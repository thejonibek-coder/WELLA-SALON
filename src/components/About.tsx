import { Check } from 'lucide-react';
import { team } from '@/data/content';
import { Reveal } from './Reveal';

const features = [
  "Xalqaro sertifikatlangan ustalar",
  "Premium va hipoallergen mahsulotlar",
  "Sterilizatsiya qilingan asboblar",
  "Individual yondashuv har bir mijozga",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream-soft/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7750120/pexels-photo-7750120.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                  alt="Wella Salon atmosferasi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-cream rounded-2xl shadow-xl p-5 border border-rosegold/20 max-w-[200px]">
                <div className="font-serif text-4xl text-rosegold">12+</div>
                <p className="text-sm text-charcoal-soft mt-1">yil go'zallik sohasida</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-rosegold tracking-[0.3em] uppercase text-xs mb-4">
                Biz haqimizda
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
                Bizning ustalar — sizning go'zalligingiz elchilari
              </h2>
              <p className="mt-6 text-charcoal-soft/85 leading-relaxed">
                Wella Salon 2013-yildan beri Buxoroning G'ijduvon tumani markazida go'zallik va
                estetikani birlashtirib keladi. Bizning ustalar har bir
                mijozning individualligini hurmat qiladi va eng nozik
                istaklarni ham e'tiborga oladi. Shuning uchun ham bizning
                mijozlarimiz yildan yilga ko'payib bormoqda.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-charcoal-soft">
                    <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-rosegold/15 text-rosegold shrink-0">
                      <Check className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Team */}
        <div className="mt-24">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-rosegold tracking-[0.3em] uppercase text-xs mb-4">
              Bizning jamoa
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Yuqori malakali ustalar
            </h3>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="group text-center">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-md">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h4 className="font-serif text-xl text-charcoal">{member.name}</h4>
                  <p className="text-sm text-rosegold mt-1 tracking-wide">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
