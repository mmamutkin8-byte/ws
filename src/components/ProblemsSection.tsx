import React from 'react';
import { AlertTriangle, Clock, EyeOff, UserMinus, HelpCircle, RefreshCw, ArrowUpRight } from 'lucide-react';
import { playTapSound } from '../utils/audio';

const problems = [
  {
    icon: AlertTriangle,
    badge: 'Потеря лидов',
    title: 'Теряются заявки с разрозненных каналов',
    description: 'Обращения с сайта, почты и мессенджеров поступают в разные места. По выходным и весной во время пика заказов до 30% обращений теряются без следа.',
    stat: 'До 30%',
    statLabel: 'упущенных обращений',
  },
  {
    icon: Clock,
    badge: 'Задержка отклика',
    title: 'Менеджеры отвечают слишком долго',
    description: 'В среднем отклик занимает от 2 до 8 часов. В производстве за это время оптовый заказчик успевает получить КП от более оперативного завода.',
    stat: '4.5 часа',
    statLabel: 'средний отклик в B2B',
  },
  {
    icon: EyeOff,
    badge: 'Слепая зона',
    title: 'Отсутствие прозрачного контроля',
    description: 'Нельзя оперативно проверить, ответил ли менеджер на запрос чертежа, сформировано ли КП и почему клиент затянул с оплатой.',
    stat: '0%',
    statLabel: 'прозрачности без системы',
  },
  {
    icon: UserMinus,
    badge: 'Отток заказчиков',
    title: 'Клиенты уходят к более быстрым конкурентам',
    description: 'Заказчики ценовых запросов выбирают производство, которое первым прислало квалифицированное подтверждение и предварительный расчет.',
    stat: '3 из 5',
    statLabel: 'заказчиков выбирают первых',
  },
  {
    icon: HelpCircle,
    badge: 'Управление наугад',
    title: 'Руководитель не понимает реальную картину',
    description: 'Загрузка отдела продаж кажется 100%, но львиную долю времени менеджеры тратят на рутинное перепечатывание ТЗ вместо заключения сделок.',
    stat: '65%',
    statLabel: 'времени тратится на рутину',
  },
  {
    icon: RefreshCw,
    badge: 'Потеря повторных продаж',
    title: 'Повторные обращения клиентов забываются',
    description: 'Действующие партнеры запрашивают доработки или новые партии продукции, но из-за хаоса менеджеры не перезванивают вовремя.',
    stat: '40%',
    statLabel: 'LTV теряется в отделе продаж',
  },
];

interface ProblemsSectionProps {
  onOpenModal: () => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="problems" className="py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="pill-glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-600 mb-5">
            <span>Симптомы отдела продаж</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Какие проблемы мы решаем
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">
            Большинство производственных предприятий ежедневно теряют целевых заказчиков на этапе первого контакта. Вот главные причины упущенной выручки:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => playTapSound()}
              className="card-glass card-glass-hoverable group relative p-8 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header inside card */}
                <div className="flex items-center justify-between mb-7">
                  <div className="tile-glass w-12 h-12 flex items-center justify-center text-slate-700">
                    <item.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-900/[0.04] border border-slate-200 text-slate-500">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Stat footer */}
              <div className="pt-5 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold font-heading text-slate-900 tracking-tight">
                    {item.stat}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                    {item.statLabel}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-900/[0.04] border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section bottom note */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              playTapSound();
              onOpenModal();
            }}
            className="pill-glass inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:border-slate-300 px-6 py-3.5 transition-colors"
          >
            <span>Узнайте, сколько обращений теряет ваше производство</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
