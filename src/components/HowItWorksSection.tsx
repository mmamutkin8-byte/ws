import React from 'react';
import { Send, FileSearch, Plug, Settings, Rocket, Headphones, ArrowRight } from 'lucide-react';
import { playTapSound } from '../utils/audio';

interface StepItem {
  num: string;
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
}

const steps: StepItem[] = [
  {
    num: '01',
    icon: Send,
    title: 'Оставляете заявку',
    description: 'Оставляете контакты в форме на сайте или звоните нам. Связываемся в течение 10 минут для обсуждения задачи.',
    duration: '10 минут',
  },
  {
    num: '02',
    icon: FileSearch,
    title: 'Изучаем процессы',
    description: 'Анализируем специфику вашей продукции, номенклатуру, текущие каналы заявок и регламент работы менеджеров.',
    duration: '1 день',
  },
  {
    num: '03',
    icon: Plug,
    title: 'Подключаем CRM',
    description: 'Настраиваем бесшовный модуль интеграции с вашей текущей Bitrix24, amoCRM, 1С или таблицами без остановки продаж.',
    duration: '1 день',
  },
  {
    num: '04',
    icon: Settings,
    title: 'Настраиваем систему',
    description: 'Прописываем сценарии квалификации заявок, правила распределения менеджерам и тексты автоматических ответов.',
    duration: '1-2 дня',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Запускаем в работу',
    description: 'Тестируем систему на тестовых обращениях, обучаем ваших менеджеров и запускаем обработку реального потока.',
    duration: '1 день',
  },
  {
    num: '06',
    icon: Headphones,
    title: 'Поддерживаем и развиваем',
    description: 'Обеспечиваем круглосуточный мониторинг работы, вносим корректировки в сценарии при расширении вашей линейки.',
    duration: 'Постоянно',
  },
];

interface HowItWorksSectionProps {
  onOpenModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="pill-glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-600 mb-5">
            <span>Простой прозрачный путь</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Как это работает
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">
            Всего 6 понятных шагов от первой заявки до полностью автоматизированного отдела продаж. Весь процесс занимает от 3 до 5 дней.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              onClick={() => playTapSound()}
              className="card-glass card-glass-hoverable p-8 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-7">
                  <span className="font-heading font-semibold text-3xl text-slate-200 group-hover:text-slate-300 transition-colors">
                    {st.num}
                  </span>
                  <div className="tile-glass w-12 h-12 flex items-center justify-center text-slate-700">
                    <st.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2.5">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8">
                  {st.description}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200/70 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Срок этапа:</span>
                <span className="font-semibold text-slate-700 bg-slate-900/[0.04] px-2.5 py-0.5 rounded-lg border border-slate-200">
                  {st.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => {
              playTapSound();
              onOpenModal();
            }}
            className="btn-mono-primary inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm"
          >
            <span>Запустить автоматизацию на вашем предприятии</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
