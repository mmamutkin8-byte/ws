import React from 'react';
import { Database, Clock, Lock, Zap, BarChart3, ShieldCheck } from 'lucide-react';
import { playTapSound } from '../utils/audio';

const advantages = [
  {
    icon: Database,
    title: 'Не нужно менять CRM',
    desc: 'Мы не заставляем вас переходить на незнакомый софт. Система внедряется прямо в вашу существующую Bitrix24, amoCRM или 1С.',
    badge: '100% совместимость',
  },
  {
    icon: Clock,
    title: 'Работает круглосуточно 24/7/365',
    desc: 'Без отпусков, больничных и перерывов на обед. Каждая вечерняя или праздничная заявка сразу подхватывается и квалифицируется.',
    badge: 'Реакция < 3 сек',
  },
  {
    icon: Lock,
    title: 'Все обращения фиксируются на 100%',
    desc: 'Исключен риск того, что менеджер забыл записать звонок в блокнот или потерял диалог в личном WhatsApp.',
    badge: '0 потерянных лидов',
  },
  {
    icon: Zap,
    title: 'Менеджеры работают в 3 раза быстрее',
    desc: 'Менеджер получает не "голый" телефон, а полностью скомпонованную карточку с ТЗ, ИНН компании и вложенными чертежами.',
    badge: 'Экономия 60% времени',
  },
  {
    icon: BarChart3,
    title: 'Руководитель видит честную статистику',
    desc: 'Прозрачные дашборды: количество заявок по каналам, среднее время подготовки КП, загрузка каждого сотрудника и конверсия.',
    badge: 'Полный контроль',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия безопасности коммерческих данных',
    desc: 'Все данные хранятся на ваших серверах или зашифрованных облачных CRM. Полное соответствие закону ФЗ-152.',
    badge: 'ФЗ-152 / Шифрование',
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="pill-glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-600 mb-5">
            <span>Конкретные факты вместо обезоруживающей рекламы</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Почему производственные предприятия выбирают нас
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">
            Мы решаем боли отдела продаж на стыке технологии и реальных производственных бизнес-процессов.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => playTapSound()}
              className="card-glass card-glass-hoverable p-8 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-7">
                  <div className="tile-glass w-12 h-12 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors duration-300">
                    <item.icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900/[0.04] border border-slate-200 text-slate-500">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
