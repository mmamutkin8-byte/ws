import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Factory, Phone, User, Building2, Database, Send, Sparkles } from 'lucide-react';
import { playTapSound, playSuccessChime } from '../utils/audio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [industry, setIndustry] = useState('Металлообработка и металлоконструкции');
  const [crm, setCrm] = useState('Bitrix24');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleResetAndClose = () => {
    playTapSound();
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleResetAndClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTapSound();
    playSuccessChime();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="card-glass-dark bg-black relative w-full max-w-lg p-6 sm:p-9 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Закрыть окно"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Modal Header */}
            <div>
              <div className="pill-glass-dark inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold text-white/60 mb-3">
                <Factory className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>Запрос демонстрации</span>
              </div>
              <h3 id="contact-modal-title" className="font-heading font-semibold text-2xl text-white">
                Получить консультацию
              </h3>
              <p className="text-xs text-white/45 mt-1.5 leading-relaxed">
                Заполните форму, и мы покажем сценарий обработки заявок под специфику вашего производства.
              </p>
            </div>

            {/* Field 1: Industry */}
            <div className="space-y-1.5">
              <label htmlFor="contact-industry" className="text-xs font-medium text-white/55 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-white/40" strokeWidth={1.75} />
                <span>Отрасль вашего предприятия:</span>
              </label>
              <select
                id="contact-industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-white/30 font-sans"
              >
                <option value="Металлообработка и металлоконструкции">Металлообработка и металлоконструкции</option>
                <option value="Машиностроение и оборудование">Машиностроение и оборудование</option>
                <option value="Производство мебели и интерьеров">Производство мебели и интерьеров</option>
                <option value="Строительные и отделочные материалы">Строительные материалы</option>
                <option value="Пищевая промышленность">Пищевая промышленность</option>
                <option value="Химическая и пластиковая тара">Химия и полимеры</option>
                <option value="Другое производство">Другое производственное направление</option>
              </select>
            </div>

            {/* Field 2: CRM */}
            <div className="space-y-1.5">
              <label htmlFor="contact-crm" className="text-xs font-medium text-white/55 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-white/40" strokeWidth={1.75} />
                <span>Какая CRM у вас установлена:</span>
              </label>
              <select
                id="contact-crm"
                value={crm}
                onChange={(e) => setCrm(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-white/30 font-sans"
              >
                <option value="Bitrix24">Bitrix24</option>
                <option value="amoCRM">amoCRM</option>
                <option value="1С:Предприятие">1С:Предприятие</option>
                <option value="RetailCRM">RetailCRM</option>
                <option value="HubSpot">HubSpot</option>
                <option value="Планируем внедрить CRM">Еще нет CRM / Планируем выбрать</option>
              </select>
            </div>

            {/* Field 3: Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-medium text-white/55 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-white/40" strokeWidth={1.75} />
                <span>Ваше имя или должность:</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Иван Петров, Генеральный директор"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 font-sans"
              />
            </div>

            {/* Field 4: Phone */}
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="text-xs font-medium text-white/55 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-white/40" strokeWidth={1.75} />
                <span>Телефон для связи:</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="+7 (999) 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 font-sans"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-mono-primary-onDark w-full py-4 px-6 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Запросить персональное демо</span>
              </button>
            </div>

            <p className="text-[10px] text-white/35 text-center">
              🔒 Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Данные защищены по ФЗ-152.
            </p>

          </form>
        ) : (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white border border-white/15 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" strokeWidth={1.5} />
            </div>

            <h3 id="contact-modal-title" className="font-heading font-semibold text-2xl text-white">
              Заявка успешно принята!
            </h3>

            <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm mx-auto">
              Спасибо, <strong className="text-white/80">{name}</strong>! Наш главный ведущий инженер по автоматизации свяжется с вами по номеру <strong className="text-white/80">{phone}</strong> в течение 10 минут.
            </p>

            <div className="tile-glass-dark p-4 text-xs text-white/55 space-y-1 text-left">
              <div className="font-semibold text-white/80 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Детали вашего запроса:</span>
              </div>
              <p>• Отрасль: {industry}</p>
              <p>• CRM: {crm}</p>
              <p>• Подготовка индивидуальной демонстрации: В процессе</p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="pill-glass-dark px-6 py-3 text-white font-semibold text-xs transition-colors cursor-pointer hover:bg-white/10"
            >
              Закрыть окно
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
