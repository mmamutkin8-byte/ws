import React from 'react';
import { ArrowRight, Play, ShieldCheck, Clock, CheckCircle2, Factory } from 'lucide-react';
import { HeroDashboard } from './HeroDashboard';
import { playTapSound } from '../utils/audio';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const scrollToDemo = () => {
    playTapSound();
    const demo = document.querySelector('#demo-lead');
    if (demo) demo.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black text-white overflow-hidden">
      {/* Ambient monochrome depth — no color, pure light & shadow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.08] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[600px] bg-white/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[420px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">

          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-left">

            {/* Top Badge — liquid glass pill */}
            <div className="animate-fade-up inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10 text-xs text-white/70 font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              <span>Современная система обработки клиентов</span>
              <span className="text-white/20">|</span>
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5" />
                Для завода и производства
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-up [animation-delay:80ms] font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.375rem] font-semibold tracking-tight text-white leading-[1.1]">
              Перестаньте терять клиентов из-за{' '}
              <span className="relative inline-block">
                <span className="relative z-10">медленной обработки</span>
                <span className="absolute inset-x-0 bottom-0.5 h-[0.4em] bg-white/10 backdrop-blur-sm rounded-[4px] animate-draw-underline -z-0" />
              </span>{' '}
              заявок
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up [animation-delay:160ms] text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Интеллектуальная система автоматически принимает обращения с сайта, мессенджеров и телефона, мгновенно ответит заказчику, квалифицирует ТЗ и занесет данные в вашу CRM без участия человека.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up [animation-delay:240ms] flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  playTapSound();
                  onOpenModal();
                }}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_10px_40px_-5px_rgba(255,255,255,0.25)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_14px_50px_-5px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Получить консультацию</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToDemo}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur-xl text-white border border-white/10 hover:border-white/20 font-semibold text-sm sm:text-base transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Посмотреть решение в действии</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="animate-fade-up [animation-delay:320ms] pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0" />
                <span>Без смены вашей CRM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/60 shrink-0" />
                <span>Ответ клиенту за 3 сек</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white/60 shrink-0" />
                <span>Запуск за 3–5 дней</span>
              </div>
            </div>

          </div>

          {/* Right Column: Enterprise SaaS Dashboard */}
          <div className="lg:col-span-6">
            <HeroDashboard />
          </div>

        </div>

        {/* CRM Compatibility Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-white/30">
            Совместимо со всеми CRM-системами:
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-white/50">
            <span className="hover:text-white transition-colors cursor-default">Bitrix24</span>
            <span className="text-white/15">•</span>
            <span className="hover:text-white transition-colors cursor-default">amoCRM</span>
            <span className="text-white/15">•</span>
            <span className="hover:text-white transition-colors cursor-default">1С:Предприятие</span>
            <span className="text-white/15">•</span>
            <span className="hover:text-white transition-colors cursor-default">RetailCRM</span>
            <span className="text-white/15">•</span>
            <span className="hover:text-white transition-colors cursor-default">HubSpot</span>
            <span className="text-white/15">•</span>
            <span className="hover:text-white transition-colors cursor-default">Google Sheets</span>
          </div>
        </div>

      </div>
    </section>
  );
};
