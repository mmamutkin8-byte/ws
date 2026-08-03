import React, { useState } from 'react';
import { Check, Zap, ExternalLink } from 'lucide-react';
import { playTapSound } from '../utils/audio';

interface CrmPlatform {
  id: string;
  name: string;
  badge: string;
  description: string;
  syncItems: string[];
}

const platforms: CrmPlatform[] = [
  {
    id: 'bitrix24',
    name: 'Bitrix24',
    badge: 'Популярная CRM',
    description: 'Полная двухсторонняя синхронизация со смарт-процессами и воронками Bitrix24.',
    syncItems: ['Контакты и Компании', 'Сделки в нужной воронке', 'История сообщений и звонков', 'Задачи и напоминания менеджерам', 'Статусы производства'],
  },
  {
    id: 'amocrm',
    name: 'amoCRM',
    badge: 'Отдел продаж',
    description: 'Автоматическое заведение карточек и продвижение по этапам сделки.',
    syncItems: ['Карточки покупателей', 'Тегирование по типу продукции', 'Текстовая расшифровка диалогов', 'Авто-задачи при смене этапа'],
  },
  {
    id: 'retailcrm',
    name: 'RetailCRM',
    badge: 'Торговля и производство',
    description: 'Идеально для предприятий с сочетанием серийного производства и интернет-каталога.',
    syncItems: ['Заказы и позиционный состав', 'Статусы оплаты и отгрузки', 'Клиентская база', 'Уведомления по SMS / WhatsApp'],
  },
  {
    id: '1c',
    name: '1С:Предприятие',
    badge: 'Учет и ERP',
    description: 'Передача квалифицированных параметров заказов напрямую в 1С:УТ / 1С:ERP.',
    syncItems: ['Справочники номенклатуры', 'Счета на оплату', 'Статусы складских остатков', 'Контрагенты и ИНН'],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    badge: 'Мессенджер',
    description: 'Прием сообщений, файлов ТЗ и чертежей DXF/PDF из Telegram.',
    syncItems: ['Входящие сообщения', 'Файлы чертежей и спецификаций', 'Групповые чаты с клиентами', 'Мгновенные уведомления'],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    badge: 'Мессенджер',
    description: 'Стабильная работа с официальным WhatsApp Business API.',
    syncItems: ['Диалоги и медиафайлы', 'Шаблонные рассылки статусов', 'Авто-квалификация клиентов', 'Запись истории в CRM'],
  },
  {
    id: 'email',
    name: 'Корпоративный Email',
    badge: 'Почта',
    description: 'Разбор входящих писем, вложений и парсинг текста ТЗ из Email.',
    syncItems: ['Входящие письма с вложениями', 'Считывание реквизитов из подписи', 'Авто-ответы с подтверждением', 'Маршрутизация писем'],
  },
  {
    id: 'sheets',
    name: 'Google Sheets / Excel',
    badge: 'Таблицы',
    description: 'Резервное дублирование всех входящих заявок в единый реестр.',
    syncItems: ['Реестр лидов в режиме реального времени', 'Время первого отклика', 'Маркеры источников трафика', 'Экспорт статистических отчетов'],
  },
];

export const IntegrationsGrid: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('bitrix24');

  const activePlatform = platforms.find((p) => p.id === selectedId) || platforms[0];

  return (
    <section id="integrations" className="py-28 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="pill-glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-600 mb-5">
            <Zap className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
            <span>Бесшовная экосистема</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Интеграция с вашими сервисами
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">
            Вам не придется меняться или переучивать менеджеров. Нажимайте на логотип, чтобы увидеть, какие именно данные синхронизируются.
          </p>
        </div>

        {/* Interactive Grid & Active Details Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Grid of Platform Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {platforms.map((p) => {
              const isSelected = p.id === selectedId;
              return (
                <div
                  key={p.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={`Показать интеграцию: ${p.name}`}
                  onClick={() => {
                    playTapSound();
                    setSelectedId(p.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      playTapSound();
                      setSelectedId(p.id);
                    }
                  }}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[112px] ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-[0_20px_40px_-16px_rgba(0,0,0,0.35)] scale-[1.03]'
                      : 'card-glass card-glass-hoverable text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-heading font-semibold text-sm ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                      {p.name}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white animate-pulse' : 'bg-slate-300'}`} />
                  </div>

                  <div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-lg ${isSelected ? 'bg-white/10 text-white/60' : 'bg-slate-900/[0.04] text-slate-500'}`}>
                      {p.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Active Selected Platform Details Card */}
          <div className="lg:col-span-5 card-glass-dark bg-black text-white p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="tile-glass-dark w-11 h-11 flex items-center justify-center font-heading font-semibold text-white/80 text-base">
                  {activePlatform.name.slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-white">
                    {activePlatform.name}
                  </h3>
                  <span className="text-xs text-white/40">{activePlatform.badge}</span>
                </div>
              </div>

              <div className="text-xs text-white/60 font-mono pill-glass-dark px-3 py-1 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Готово</span>
              </div>
            </div>

            <p className="text-sm text-white/55 leading-relaxed">
              {activePlatform.description}
            </p>

            {/* Sync capabilities list */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/35 mb-3">
                Что именно автоматически синхронизируется:
              </div>
              {activePlatform.syncItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white/70">
                  <div className="p-1 rounded-full bg-white/10 text-white/70 shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.25} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/35 font-mono">
              <span>Срок настройки модуля: 1 день</span>
              <ExternalLink className="w-4 h-4 text-white/30" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
