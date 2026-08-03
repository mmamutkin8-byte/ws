import React, { useEffect, useState } from 'react';
import {
  Workflow,
  Users,
  PhoneCall,
  BarChart3,
  Factory,
  CheckCircle2,
  TrendingUp,
  MoreHorizontal,
} from 'lucide-react';

const workflowSteps = [
  { label: 'Заявка получена' },
  { label: 'AI-квалификация ТЗ' },
  { label: 'Занесение в CRM' },
  { label: 'Назначен инженер' },
  { label: 'В производство' },
];

const crmLeads = [
  { name: 'А. Соколов', company: 'ТехМаш ООО', stage: 'Квалификация', value: '₽340 000' },
  { name: 'И. Петрова', company: 'СтройКомплект', stage: 'Согласование', value: '₽1 120 000' },
  { name: 'Д. Волков', company: 'МеталлПром', stage: 'Новая', value: '₽85 000' },
];

const productionLines = [
  { label: 'Линия A · ЧПУ-фрезеровка', load: 82 },
  { label: 'Линия B · Сборка', load: 64 },
  { label: 'Линия C · Покраска', load: 21 },
];

const weeklyVolume = [38, 52, 44, 61, 58, 34, 19];
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const waveClasses = [
  'animate-wave-1', 'animate-wave-2', 'animate-wave-3', 'animate-wave-4', 'animate-wave-5',
  'animate-wave-1', 'animate-wave-2', 'animate-wave-3', 'animate-wave-4', 'animate-wave-5',
  'animate-wave-1', 'animate-wave-2',
];

export const HeroDashboard: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [callSeconds, setCallSeconds] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveStep((p) => (p + 1) % workflowSteps.length), 2600);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCallSeconds((s) => (s + 1) % 3600), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const target = 1428;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setTicketCount(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="animate-fade-up [animation-delay:200ms] relative" aria-hidden="true">
      {/* Floating liquid-glass panel */}
      <div className="animate-hero-float relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden glass-sheen">

        {/* Top chrome bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="ml-2.5 text-[11px] font-medium text-white/40 tracking-wide">
              ПРОМФЛОУ · AI Operations
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-white/60 bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Система активна</span>
          </div>
        </div>

        {/* Tab row */}
        <div className="flex items-center gap-1.5 px-5 pt-4">
          {['Обзор', 'Заявки', 'Телефония', 'Производство'].map((tab, i) => (
            <span
              key={tab}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors ${
                i === 0 ? 'bg-white/10 text-white border border-white/10' : 'text-white/35'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="p-5 space-y-4">

          {/* KPI Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
              <div className="text-[10px] uppercase tracking-wider text-white/35 mb-1.5">Заявки сегодня</div>
              <div className="flex items-end justify-between">
                <span className="text-xl font-semibold text-white tabular-nums">
                  {ticketCount.toLocaleString('ru-RU')}
                </span>
                <span className="flex items-center gap-0.5 text-[10px] text-white/50">
                  <TrendingUp className="w-3 h-3" />12%
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
              <div className="text-[10px] uppercase tracking-wider text-white/35 mb-1.5">Время ответа</div>
              <div className="flex items-end justify-between">
                <span className="text-xl font-semibold text-white tabular-nums">2.8с</span>
                <span className="flex items-center gap-0.5 text-[10px] text-white/50">
                  <TrendingUp className="w-3 h-3" />8%
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
              <div className="text-[10px] uppercase tracking-wider text-white/35 mb-1.5">Конверсия</div>
              <div className="flex items-end justify-between">
                <span className="text-xl font-semibold text-white tabular-nums">34.2%</span>
                <span className="flex items-center gap-0.5 text-[10px] text-white/50">
                  <TrendingUp className="w-3 h-3" />5%
                </span>
              </div>
            </div>
          </div>

          {/* Bento Row 1: Workflow Automation + AI Phone Assistant */}
          <div className="grid grid-cols-12 gap-3">

            {/* Workflow Automation */}
            <div className="col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-1.5 mb-3.5 text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                <Workflow className="w-3.5 h-3.5" />
                <span>Автоматизация</span>
              </div>
              <div className="relative space-y-3.5 pl-1">
                <div className="absolute left-[7px] top-1 bottom-1 w-px bg-white/10" />
                {workflowSteps.map((step, i) => (
                  <div key={step.label} className="relative flex items-center gap-3">
                    <span
                      className={`relative z-10 w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${
                        i < activeStep
                          ? 'bg-white border-white'
                          : i === activeStep
                          ? 'border-white bg-black'
                          : 'border-white/20 bg-black'
                      }`}
                    >
                      {i < activeStep && <CheckCircle2 className="w-3 h-3 text-black" strokeWidth={3} />}
                      {i === activeStep && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                    </span>
                    <span
                      className={`text-[11.5px] leading-tight transition-colors duration-500 ${
                        i <= activeStep ? 'text-white/85' : 'text-white/30'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Phone Assistant */}
            <div className="col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>AI-ассистент · Звонок</span>
                </div>
                <span className="text-[10px] font-mono text-white/40 tabular-nums">{formatTime(callSeconds)}</span>
              </div>

              <div className="flex items-center gap-0.5 h-6 mb-3">
                {waveClasses.map((cls, n) => (
                  <span key={n} className={`w-[3px] rounded-full bg-white/50 ${cls}`} />
                ))}
              </div>

              <div className="space-y-1.5 mb-3">
                <p className="text-[11px] text-white/60 leading-snug">
                  «Здравствуйте! Уточню параметры вашего заказа...»
                </p>
                <p className="text-[11px] text-white/35 leading-snug">
                  Клиент: «Нужна партия 500 шт, сталь 09Г2С»
                </p>
              </div>

              <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-1.5 text-[10px] text-white/45">
                <CheckCircle2 className="w-3 h-3" />
                <span>Данные переданы в CRM автоматически</span>
              </div>
            </div>
          </div>

          {/* Bento Row 2: CRM + Production Monitoring */}
          <div className="grid grid-cols-12 gap-3">

            {/* CRM */}
            <div className="col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  <span>CRM · Сделки</span>
                </div>
                <MoreHorizontal className="w-3.5 h-3.5 text-white/30" />
              </div>
              <div className="space-y-2">
                {crmLeads.map((lead) => (
                  <div key={lead.name} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[10px] font-semibold text-white/70 shrink-0">
                      {lead.name.split(' ').map((w) => w[0]).join('')}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-medium text-white/80 truncate">{lead.name}</div>
                      <div className="text-[10px] text-white/35 truncate">{lead.company}</div>
                    </div>
                    <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-white/50 whitespace-nowrap">
                      {lead.stage}
                    </span>
                    <span className="text-[10.5px] font-mono text-white/55 whitespace-nowrap">{lead.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Monitoring */}
            <div className="col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-1.5 mb-3.5 text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" />
                <span>Производство</span>
              </div>
              <div className="space-y-3">
                {productionLines.map((line) => (
                  <div key={line.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10.5px] text-white/55 truncate pr-2">{line.label}</span>
                      <span className="text-[10px] font-mono text-white/40 shrink-0">{line.load}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-white/50 transition-all duration-[1400ms] ease-out"
                        style={{ width: mounted ? `${line.load}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Заявки за неделю</span>
              </div>
              <span className="text-[10px] text-white/35">306 всего</span>
            </div>
            <div className="flex items-end justify-between gap-2 h-16">
              {weeklyVolume.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className="w-full rounded-t-[3px] bg-white/25 transition-all duration-[1200ms] ease-out"
                    style={{ height: mounted ? `${v}%` : '0%' }}
                  />
                  <span className="text-[9px] text-white/30">{weekDays[i]}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer status */}
        <div className="px-5 py-3.5 border-t border-white/10 flex items-center justify-between text-[10.5px] text-white/35 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Обработано сегодня: <strong className="text-white/60">1 428</strong></span>
          </div>
          <span>Аптайм 99.98%</span>
        </div>
      </div>

      {/* Ambient reflection */}
      <div className="absolute -bottom-6 left-6 right-6 h-12 bg-white/[0.03] blur-2xl rounded-full pointer-events-none" />
    </div>
  );
};
