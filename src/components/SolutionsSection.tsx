import React from 'react';
import { MessageSquare, PhoneCall, Check, ArrowRight, Zap, Database, Clock, Layers, Sparkles } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-28 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="pill-glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-600 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
            <span>Два специализированных продукта</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Наши решения для производства
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">
            Понятны без технической терминологии. Устанавливаются поверх вашей действующей CRM за несколько дней.
          </p>
        </div>

        {/* TWO MAIN LARGE PRODUCT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PRODUCT 1: Автоматическая обработка заявок */}
          <div className="card-glass-dark bg-black text-white p-8 sm:p-11 flex flex-col justify-between relative overflow-hidden group">

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="tile-glass-dark w-14 h-14 flex items-center justify-center text-white/80">
                  <MessageSquare className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full pill-glass-dark text-white/50 font-medium">
                  Продукт №1
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-[1.75rem] font-semibold text-white mb-4 tracking-tight">
                Автоматическая обработка заявок
              </h3>

              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-9">
                Единый цифровой рабочий центр, который мгновенно считывает входящие текстовые обращения из всех источников, дает клиенту мгновенный качественный ответ и передает всю информацию в CRM.
              </p>

              {/* Supported Input Channels */}
              <div className="mb-9 tile-glass-dark p-5">
                <div className="text-[11px] font-semibold text-white/35 uppercase tracking-wider mb-3.5">
                  Принимает и распределяет обращения с:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-white/70">
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10">Формы сайта</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10">Telegram</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10">WhatsApp</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10">Корпоративный Email</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10">Рекламные кампании</span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3.5 mb-9">
                {[
                  'Отвечает клиенту за 3 секунды без праздников и выходных',
                  'Квалифицирует параметры заказа (объем, чертежи, сроки)',
                  'Записывает полную карточку клиента и сделку в CRM',
                  'Распределяет задачу на ответственного менеджера по профилю',
                  'Напоминает менеджеру о регламентном времени связи',
                  'Сохраняет всю историю переписки и файлы ТЗ',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-white/10 text-white/70 shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.25} />
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Integrated CRM Badges */}
              <div className="pt-5 border-t border-white/10 mb-9">
                <div className="text-xs font-mono text-white/35">
                  Поддержка ваших CRM: Bitrix24 • amoCRM • RetailCRM • HubSpot • 1С
                </div>
              </div>
            </div>

            {/* Product CTA */}
            <div>
              <button
                onClick={() => {
                  playTapSound();
                  const el = document.querySelector('#demo-lead');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-mono-primary-onDark w-full py-3.5 px-6 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Протестировать обработку заявок</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PRODUCT 2: Интеллектуальная телефония */}
          <div className="card-glass-dark bg-black text-white p-8 sm:p-11 flex flex-col justify-between relative overflow-hidden group">

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="tile-glass-dark w-14 h-14 flex items-center justify-center text-white/80">
                  <PhoneCall className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full pill-glass-dark text-white/50 font-medium">
                  Продукт №2
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-[1.75rem] font-semibold text-white mb-4 tracking-tight">
                Интеллектуальная телефония
              </h3>

              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-9">
                Голосовая система приема входящих звонков для завода. Принимает вызовы 24/7, ведет связный диалог, уточняет детали заказа и моментально соединяет с нужным специалистом.
              </p>

              {/* Unique Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-9">
                <div className="tile-glass-dark p-4 flex items-center gap-3">
                  <Clock className="w-4.5 h-4.5 text-white/50 shrink-0" strokeWidth={1.75} />
                  <div>
                    <div className="text-xs font-semibold text-white">Круглосуточно 24/7</div>
                    <div className="text-[11px] text-white/35">Без гудков и ожидания</div>
                  </div>
                </div>
                <div className="tile-glass-dark p-4 flex items-center gap-3">
                  <Zap className="w-4.5 h-4.5 text-white/50 shrink-0" strokeWidth={1.75} />
                  <div>
                    <div className="text-xs font-semibold text-white">Понимает суть</div>
                    <div className="text-[11px] text-white/35">Считывает детали ТЗ</div>
                  </div>
                </div>
                <div className="tile-glass-dark p-4 flex items-center gap-3">
                  <Database className="w-4.5 h-4.5 text-white/50 shrink-0" strokeWidth={1.75} />
                  <div>
                    <div className="text-xs font-semibold text-white">Запись в CRM</div>
                    <div className="text-[11px] text-white/35">Фиксирует разговор</div>
                  </div>
                </div>
                <div className="tile-glass-dark p-4 flex items-center gap-3">
                  <Layers className="w-4.5 h-4.5 text-white/50 shrink-0" strokeWidth={1.75} />
                  <div>
                    <div className="text-xs font-semibold text-white">Умный перевод</div>
                    <div className="text-[11px] text-white/35">На инженера/продажи</div>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3.5 mb-9">
                {[
                  'Принимает звонки без перегрузки телефонной линии',
                  'Запрашивает марку стали, объемы и сроки поставки',
                  'Записывает текстовую расшифровку диалога прямо в CRM',
                  'Мгновенно переводит звонок на личного менеджера клиента',
                  'Не заставляет заказчика "висеть" на линии с музыкой',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-white/10 text-white/70 shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.25} />
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-white/10 mb-9">
                <div className="text-xs font-mono text-white/35">
                  Совместимо с Sipuni, Mango Telecom, Ростелеком, Bitrix24 Telephony
                </div>
              </div>
            </div>

            {/* Product CTA */}
            <div>
              <button
                onClick={() => {
                  playTapSound();
                  const el = document.querySelector('#demo-telephony');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-mono-primary-onDark w-full py-3.5 px-6 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Послушать демо телефонии</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
