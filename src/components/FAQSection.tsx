import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQItem } from '../types';
import { playTapSound } from '../utils/audio';

const faqs: FAQItem[] = [
  {
    question: '1. Подойдет ли система, если у нас сложная номенклатура и специфические ТЗ (чертежи, ГОСТы, марки стали)?',
    answer: 'Да. Система специально адаптируется под специфику конкретно вашего завода. Мы закладываем правила квалификации с учетом ваших марок металлов, габаритов, серии и форматов прикрепляемых файлов (DXF, DWG, PDF, Excel).',
  },
  {
    question: '2. Нужен ли штатный IT-специалист или программист для управления системой?',
    answer: 'Нет. Мы передаем вам полностью настроенный продукт под ключ и берем на себя его техническое сопровождение. Вашим менеджерам и руководителю не потребуется специальных технических знаний.',
  },
  {
    question: '3. Заменяет ли система наших менеджеров по продажам?',
    answer: 'Нет, она избавляет их от рутины. Система берет на себя мгновенный первичный отклик 24/7, квалификацию и заполнение CRM. Менеджер подключается к диалогу уже с готовым скомпонованным ТЗ и занимается закрытием сделки.',
  },
  {
    question: '4. Сколько времени занимает внедрение системы под ключ?',
    answer: 'Обычно весь цикл (от анализа ваших каналов и настройки CRM до запуска в тестовую эксплуатацию) занимает от 3 до 5 рабочих дней.',
  },
  {
    question: '5. Насколько это безопасно? Где хранятся данные клиентов и спецификации?',
    answer: 'Все данные сохраняются строго в вашей текущей CRM и на ваших защищенных серверах. Мы соблюдаем ФЗ-152 о персональных данных и не передаем вашу коммерческую информацию сторонним сервисам.',
  },
  {
    question: '6. Что произойдет, если клиент задаст нестандартный вопрос или пришлет уникальный чертеж?',
    answer: 'Система вежливо подтвердит получение файла, уточнит первичные данные и немедленно передаст сделку старшему инженеру или менеджеру с пометкой «Требуется ручной расчет». Клиент не останется без внимания.',
  },
  {
    question: '7. Как система обрабатывает звонки и сообщения в нерабочее время, ночью и в праздники?',
    answer: 'Система работает без выходных 24/7. Ночной звонок или заявка с сайта будет квалифицирована за 3 секунды, занесена в CRM, а менеджер при выходе на смену утренней рабочей группы сразу увидит готовые задачи.',
  },
  {
    question: '8. Совместима ли система с нашей текущей CRM (Bitrix24, amoCRM, 1С)?',
    answer: 'Да, поддержка Bitrix24, amoCRM, RetailCRM, HubSpot, 1С и Google Sheets встроенная. Вам не придется переносить базу или менять привычные воронки продаж.',
  },
  {
    question: '9. Можно ли протестировать систему перед принятием решения о покупке?',
    answer: 'Да. Мы можем провести индивидуальную демонстрацию на примере вашей номенклатуры продукции и показать, как система сработает в вашей CRM.',
  },
  {
    question: '10. От чего зависит стоимость внедрения и обслуживания?',
    answer: 'Стоимость зависит от количества подключаемых каналов (сайт, мессенджеры, телефония) и сложности правил квалификации. Наш консультант подготовит точную смету за 15 минут.',
  },
  {
    question: '11. Поддерживаются ли звонки и голосовые сообщения?',
    answer: 'Да. Модуль голосовой телефонии принимает звонки, переводит речь в текст, распознает суть обращения и создает карточку сделки в CRM.',
  },
  {
    question: '12. Что требуется от нашей компании для старта работы?',
    answer: 'Только доступ к вашей CRM и вводная информация по вашей продукции (прайс-листы, примеры ТЗ и контакты менеджеров). Всю техническую интеграцию мы берем на себя.',
  },
];

interface FAQSectionProps {
  onOpenModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    playTapSound();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="pill-glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-600 mb-5">
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
            <span>Частые вопросы директоров производств</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Вопросы и ответы
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">
            Ответы на ключевые технические и организационные моменты работы нашей системы.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? 'card-glass'
                    : 'bg-white/40 backdrop-blur-md border-slate-200/70 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-900/[0.04] border border-slate-200 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner under FAQ */}
        <div className="mt-16 card-glass-dark bg-black text-white text-center p-9 sm:p-12 space-y-5">
          <h3 className="font-heading font-semibold text-xl text-white">
            Остались вопросы по интеграции с вашим заводом?
          </h3>
          <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto leading-relaxed">
            Наш инженер подробно ответит на все вопросы и покажет работу системы на примере вашей номенклатуры.
          </p>
          <div>
            <button
              onClick={() => {
                playTapSound();
                onOpenModal();
              }}
              className="btn-mono-primary-onDark inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Задать вопрос инженеру</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
