import React from 'react';
import { Cpu, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { playTapSound } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playTapSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-white font-heading font-semibold text-xl">
              <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 p-0.5">
                <div className="w-full h-full bg-black rounded-[9px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white/80" />
                </div>
              </div>
              <span>
                ПРОМ<span className="text-white/45 font-normal">ФЛОУ</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Современная система автоматической обработки обращений и умной телефонии для производственных и промышленных предприятий.
            </p>

            <div className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} ООО «ПромФлоу Автоматизация». Все права защищены.
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-3">
            <div className="font-semibold uppercase tracking-wider text-slate-200">
              Продукты
            </div>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition-colors">Автоматическая обработка заявок</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Интеллектуальная телефония 24/7</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Интеграция с Bitrix24 / amoCRM</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Модуль парсинга ТЗ и чертежей</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <div className="font-semibold uppercase tracking-wider text-slate-200">
              Интерактив
            </div>
            <ul className="space-y-2">
              <li><a href="#demo-lead" className="hover:text-white transition-colors">Симулятор обработки заявки</a></li>
              <li><a href="#demo-telephony" className="hover:text-white transition-colors">Демо голосовой телефонии</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Калькулятор экономии ФОТ</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Ответы на вопросы</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <div className="font-semibold uppercase tracking-wider text-slate-200">
              Контакты
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" strokeWidth={1.75} />
                <a href="tel:88005553535" className="hover:text-white font-mono">8 (800) 555-35-35</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" strokeWidth={1.75} />
                <a href="mailto:info@promflow.ru" className="hover:text-white">info@promflow.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>Москва, Пресненская наб. 12, Башня Федерация</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            Сделано для производственных предприятий России и СНГ
          </div>

          <button
            onClick={scrollToTop}
            className="pill-glass-dark flex items-center gap-1.5 px-3.5 py-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
