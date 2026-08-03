import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowRight, Cpu } from 'lucide-react';
import { toggleSound, playTapSound } from '../utils/audio';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playTapSound();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playTapSound();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.04)] py-3'
          : 'bg-black/40 backdrop-blur-md border-b border-white/[0.06] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group text-white font-heading font-bold text-xl tracking-tight"
            onClick={() => playTapSound()}
          >
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 p-0.5 group-hover:bg-white/[0.14] transition-colors duration-200">
              <div className="w-full h-full bg-black rounded-[9px] flex items-center justify-center">
                <Cpu className="w-4.5 h-4.5 text-white/80 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold leading-none tracking-wide text-base">
                ПРОМ<span className="text-white/50 font-normal">ФЛОУ</span>
              </span>
              <span className="text-[10px] text-white/35 tracking-[0.12em] font-normal mt-1 uppercase">
                Для производства
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 pill-glass-dark p-1.5">
            {[
              { label: 'Проблемы', href: '#problems' },
              { label: 'Решения', href: '#solutions' },
              { label: 'Демо заявки', href: '#demo-lead' },
              { label: 'Телефония', href: '#demo-telephony' },
              { label: 'Калькулятор', href: '#calculator' },
              { label: 'Интеграции', href: '#integrations' },
              { label: 'FAQ', href: '#faq' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-white/50 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              title="Включить / Выключить звуковой отклик интерфейса"
              aria-label="Включить / выключить звуковой отклик интерфейса"
              aria-pressed={soundOn}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all ${
                soundOn
                  ? 'bg-white/10 border-white/20 text-white/80'
                  : 'bg-white/[0.04] border-white/10 text-white/40 hover:text-white/70'
              }`}
            >
              {soundOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Звук: Вкл</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Звук: Выкл</span>
                </>
              )}
            </button>

            {/* Consultation Button */}
            <button
              onClick={() => {
                playTapSound();
                onOpenModal();
              }}
              className="btn-mono-primary-onDark group relative inline-flex items-center gap-2 text-xs font-semibold px-4 py-2"
            >
              <span>Получить консультацию</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              aria-label="Включить / выключить звуковой отклик интерфейса"
              aria-pressed={soundOn}
              className="p-2 text-white/60 hover:text-white rounded-lg bg-white/[0.06] border border-white/10"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                playTapSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              className="p-2 text-white/60 hover:text-white rounded-lg bg-white/[0.06] border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-1.5 shadow-2xl">
          {[
            { label: 'Проблемы', href: '#problems' },
            { label: 'Решения', href: '#solutions' },
            { label: 'Демо обработки заявки', href: '#demo-lead' },
            { label: 'Умная телефония', href: '#demo-telephony' },
            { label: 'Калькулятор экономии', href: '#calculator' },
            { label: 'Интеграции с CRM', href: '#integrations' },
            { label: 'Вопросы и ответы', href: '#faq' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                playTapSound();
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="btn-mono-primary-onDark w-full text-center py-3 px-4 font-medium text-sm"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
