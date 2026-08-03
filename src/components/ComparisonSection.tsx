import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRightLeft, Sparkles } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export const ComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="pill-glass-dark inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white/60 mb-5">
            <ArrowRightLeft className="w-3.5 h-3.5 text-white/50" strokeWidth={1.75} />
            <span>Сравнительный анализ</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            До и После внедрения ПРОМФЛОУ
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/45 leading-relaxed">
            Посмотрите, как меняется динамика отдела продаж и нагрузка на руководителей после запуска автоматической обработки.
          </p>
        </div>

        {/* Tab Switcher for mobile / desktop view */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 pill-glass-dark">
            <button
              onClick={() => {
                playTapSound();
                setActiveTab('both');
              }}
              aria-pressed={activeTab === 'both'}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'both' ? 'bg-white text-black' : 'text-white/45 hover:text-white/80'
              }`}
            >
              Сравнение рядышком
            </button>
            <button
              onClick={() => {
                playTapSound();
                setActiveTab('before');
              }}
              aria-pressed={activeTab === 'before'}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'before' ? 'bg-white text-black' : 'text-white/45 hover:text-white/80'
              }`}
            >
              До внедрения
            </button>
            <button
              onClick={() => {
                playTapSound();
                setActiveTab('after');
              }}
              aria-pressed={activeTab === 'after'}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'after' ? 'bg-white text-black' : 'text-white/45 hover:text-white/80'
              }`}
            >
              После внедрения
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* CARD 1: ДО ВНЕДРЕНИЯ */}
          {(activeTab === 'both' || activeTab === 'before') && (
            <div className="card-glass-dark p-6 sm:p-9 space-y-7 relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5 text-white/70 font-semibold text-lg font-heading">
                  <XCircle className="w-5 h-5 shrink-0" strokeWidth={1.75} />
                  <span>До внедрения (Ручной хаос)</span>
                </div>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full pill-glass-dark text-white/45">
                  Потери до 35%
                </span>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Медленный первичный отклик',
                    desc: 'Менеджер ответит через 2–12 часов, когда освободится от рутины или придет с производства.',
                  },
                  {
                    title: 'Потери в нерабочее время',
                    desc: 'Заявки, пришедшие в пятницу вечером или в выходные, висят без ответа до утра понедельника.',
                  },
                  {
                    title: 'Ручной ввод чертежей и реквизитов',
                    desc: 'Менеджеры тратят до 65% рабочего времени на перепечатывание ТЗ вместо общения с покупателем.',
                  },
                  {
                    title: 'Забытые повторные обращения',
                    desc: 'Клиент запрашивал КП три дня назад, но про него забыли из-за потока текущих задач.',
                  },
                  {
                    title: 'Отсутствие реальной статистики',
                    desc: 'Директор видит только итоговую выручку, не понимая, где и почему отвалились заказчики.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="tile-glass-dark p-4 space-y-1">
                    <div className="text-xs font-semibold text-white/75 flex items-center gap-2">
                      <XCircle className="w-3.5 h-3.5 shrink-0 text-white/45" strokeWidth={1.75} />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed pl-5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CARD 2: ПОСЛЕ ВНЕДРЕНИЯ */}
          {(activeTab === 'both' || activeTab === 'after') && (
            <div className="card-glass-dark bg-white/[0.06] p-6 sm:p-9 space-y-7 relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5 text-white font-semibold text-lg font-heading">
                  <CheckCircle2 className="w-5 h-5 shrink-0" strokeWidth={1.75} />
                  <span>После внедрения (ПРОМФЛОУ)</span>
                </div>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white text-black flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Рост продаж +35%
                </span>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'Мгновенный ответ за 3 секунды',
                    desc: 'Клиент с первой секунды знает, что его обращение принято в работу и передано менеджеру.',
                  },
                  {
                    title: 'Работа 24/7/365 без перерывов',
                    desc: 'Ни одна ночная или праздничная заявка не теряется — всё заносится в CRM автоматически.',
                  },
                  {
                    title: 'Авто-считывание ТЗ и реквизитов',
                    desc: 'Система сама распознает параметры продукции, ИНН и марку стали, формируя готовое карточку.',
                  },
                  {
                    title: 'Система ведения и авто-напоминаний',
                    desc: 'Ни одно повторное обращение не остается без внимания — менеджер получает жесткие таски.',
                  },
                  {
                    title: '100% прозрачность для руководителя',
                    desc: 'Сквозная аналитика всех каналов, конверсий и эффективности каждому менеджеру.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 space-y-1">
                    <div className="text-xs font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-white" strokeWidth={1.75} />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-white/55 leading-relaxed pl-5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
