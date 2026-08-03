import React from 'react';
import { ArrowRight, Phone, CheckCircle2, Factory } from 'lucide-react';
import { playTapSound } from '../utils/audio';

interface CTASectionProps {
  onOpenModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-28 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.06] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <div className="card-glass-dark p-8 sm:p-16 space-y-9 relative overflow-hidden">

          <div className="pill-glass-dark inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white/60">
            <Factory className="w-3.5 h-3.5" strokeWidth={1.75} />
            <span>Персональный аудит процессов</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
            Давайте покажем, как это будет работать именно в вашей компании
          </h2>

          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Проведем демонстрацию на примере вашей продуктовой линейки. Покажем, как система будет принимать заявки и интегрироваться с вашей CRM.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                playTapSound();
                onOpenModal();
              }}
              className="btn-mono-primary-onDark w-full sm:w-auto px-9 py-4 font-semibold text-base cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Получить консультацию</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:88005553535"
              onClick={() => playTapSound()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white/80 hover:text-white font-semibold text-base transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>8 (800) 555-35-35</span>
            </a>
          </div>

          <div className="pt-7 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/45">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} />
              Бесплатный расчет окупаемости
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} />
              Запуск за 3–5 дней
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} />
              Без изменения вашей CRM
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
