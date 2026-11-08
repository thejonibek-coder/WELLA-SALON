import { useState, type FormEvent } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle2,
  X,
  Loader2,
} from 'lucide-react';

import { serviceOptions, timeSlots } from '@/data/content';
import { Reveal } from './Reveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Booking() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '+998',
    service: serviceOptions[0],
    date: '',
    time: timeSlots[0],
    notes: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:3001/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          service: form.service,
          date: form.date,
          time: form.time,
          notes: form.notes.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Xatolik yuz berdi');
      }

      setStatus('success');
    } catch (error) {
      console.error('Booking xatosi:', error);

      setStatus('error');
      setErrorMsg(
        "Yozilishda texnik xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
      );
    }
  };

  const closeModal = () => {
    setStatus('idle');

    if (form.name) {
      setForm({
        ...form,
        name: '',
        phone: '+998',
        date: '',
        notes: '',
      });
    }
  };

  const inputClass =
    'w-full pl-11 pr-4 py-3.5 rounded-xl bg-cream border border-rosegold/25 focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 outline-none transition-all text-charcoal placeholder:text-charcoal-soft/40';

  return (
    <section id="booking" className="py-24 sm:py-32 bg-cream-soft/60">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-rosegold tracking-[0.3em] uppercase text-xs mb-4">
            Navbatga yozilish
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal">
            O&apos;zingizga qulay vaqtni band qiling
          </h2>

          <p className="mt-5 text-charcoal-soft/80 leading-relaxed">
            Formani to&apos;ldiring — biz siz bilan tez orada bog&apos;lanib,
            yozilishni tasdiqlaymiz.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 bg-white rounded-3xl shadow-xl border border-rosegold/15 p-6 sm:p-10 grid sm:grid-cols-2 gap-5"
          >
            <div>
              <label className="block text-sm font-medium text-charcoal-soft mb-2">
                Ismingiz
              </label>

              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rosegold"
                  strokeWidth={1.5}
                />

                <input
                  type="text"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Ismingizni kiriting"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-soft mb-2">
                Telefon raqamingiz
              </label>

              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rosegold"
                  strokeWidth={1.5}
                />

                <input
                  type="tel"
                  required
                  pattern="^\+998\d{9}$"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+998901234567"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-charcoal-soft mb-2">
                Xizmat turi
              </label>

              <select
                value={form.service}
                onChange={(e) => update('service', e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-cream border border-rosegold/25 focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 outline-none transition-all text-charcoal"
              >
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-soft mb-2">
                Sana
              </label>

              <div className="relative">
                <Calendar
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rosegold z-10"
                  strokeWidth={1.5}
                />

                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-soft mb-2">
                Vaqt
              </label>

              <div className="relative">
                <Clock
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rosegold z-10"
                  strokeWidth={1.5}
                />

                <select
                  value={form.time}
                  onChange={(e) => update('time', e.target.value)}
                  className={inputClass}
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-charcoal-soft mb-2">
                Qo&apos;shimcha izoh (ixtiyoriy)
              </label>

              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                placeholder="Istaklaringizni yozing..."
                className="w-full px-4 py-3.5 rounded-xl bg-cream border border-rosegold/25 focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 outline-none transition-all text-charcoal placeholder:text-charcoal-soft/40 resize-none"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-charcoal text-cream font-medium tracking-wide hover:bg-rosegold transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Yuborilmoqda...
                  </>
                ) : (
                  'Yozilishni tasdiqlash'
                )}
              </button>
            </div>
          </form>
        </Reveal>
      </div>

      {status === 'success' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-charcoal/60 backdrop-blur-sm animate-[fadein_0.3s_ease]">
          <div className="bg-cream rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative animate-[popin_0.35s_cubic-bezier(0.22,1,0.36,1)]">
            <button
              onClick={closeModal}
              aria-label="Yopish"
              className="absolute top-4 right-4 text-charcoal-soft/50 hover:text-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-rosegold/15 text-rosegold mb-5">
              <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
            </div>

            <h3 className="font-serif text-3xl text-charcoal">
              Rahmat, {form.name || 'aziz mijoz'}!
            </h3>

            <p className="mt-4 text-charcoal-soft leading-relaxed">
              Sizning yozilishingiz qabul qilindi.
              <br />
              <span className="text-rosegold">{form.service}</span> —{' '}
              {form.date} sana, soat {form.time}.
              <br />
              Tez orada operatorimiz siz bilan bog&apos;lanadi.
            </p>

            <button
              onClick={closeModal}
              className="mt-7 px-8 py-3 rounded-full bg-charcoal text-cream font-medium hover:bg-rosegold transition-colors"
            >
              Yopish
            </button>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-charcoal/60 backdrop-blur-sm">
          <div className="bg-cream rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative animate-[popin_0.35s_cubic-bezier(0.22,1,0.36,1)]">
            <button
              onClick={() => setStatus('idle')}
              aria-label="Yopish"
              className="absolute top-4 right-4 text-charcoal-soft/50 hover:text-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-5">
              <X className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl text-charcoal">Xatolik</h3>

            <p className="mt-3 text-charcoal-soft leading-relaxed">
              {errorMsg}
            </p>

            <button
              onClick={() => setStatus('idle')}
              className="mt-6 px-8 py-3 rounded-full bg-charcoal text-cream font-medium hover:bg-rosegold transition-colors"
            >
              Qaytadan urinish
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadein {
          from { opacity: 0 }
          to { opacity: 1 }
        }

        @keyframes popin {
          from { opacity: 0; transform: scale(0.92) }
          to { opacity: 1; transform: scale(1) }
        }
      `}</style>
    </section>
  );
}