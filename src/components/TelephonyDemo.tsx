import React, { useState } from 'react';
import { Phone, PhoneCall, PhoneOff, Mic, CheckCircle2, Volume2, ShieldCheck } from 'lucide-react';
import { playTapSound, playStepSound, playPhoneRingSound, playSuccessChime } from '../utils/audio';

interface DialogueLine {
  sender: 'client' | 'system' | 'status';
  text: string;
  time: string;
}

const callSequence: DialogueLine[] = [
  { sender: 'client', text: 'Здравствуйте! Нам нужно изготовить партию стальных фланцев 150 мм.', time: '00:02' },
  { sender: 'system', text: 'Добрый день! Понял вас. Какое количество штук планируется и есть ли у вас чертежи?', time: '00:04' },
  { sender: 'client', text: 'Нужно 200 штук, чертежи готовые в формате DWG. Сроки — до конца месяца.', time: '00:08' },
  { sender: 'system', text: 'Отлично. Чертежи можно отправить на нашу почту или в Telegram. Сейчас я сформировал карточку вашей сделки.', time: '00:12' },
  { sender: 'status', text: '✓ Создана сделка в Bitrix24 | Приоритет: Высокий', time: '00:14' },
  { sender: 'system', text: 'Переключаю вас на инженера отдела продаж Сергея. Хорошего дня!', time: '00:16' },
  { sender: 'status', text: '✓ Звонок переведен на ответственного менеджера', time: '00:18' },
];

export const TelephonyDemo: React.FC = () => {
  const [callState, setCallState] = useState<'idle' | 'ringing' | 'connected' | 'ended'>('idle');
  const [visibleLines, setVisibleLines] = useState<DialogueLine[]>([]);

  const startCallDemo = () => {
    if (callState === 'ringing' || callState === 'connected') return;

    playTapSound();
    playPhoneRingSound();
    setCallState('ringing');
    setVisibleLines([]);

    // After 1.5s ring -> connects call
    setTimeout(() => {
      setCallState('connected');
      playStepSound();

      let lineIdx = 0;
      const interval = setInterval(() => {
        if (lineIdx < callSequence.length) {
          const currentLine = callSequence[lineIdx];
          setVisibleLines((prev) => [...prev, currentLine]);
          playStepSound();
          lineIdx++;
        } else {
          clearInterval(interval);
          setCallState('ended');
          playSuccessChime();
        }
      }, 1200);

    }, 1500);
  };

  const resetCallDemo = () => {
    playTapSound();
    setCallState('idle');
    setVisibleLines([]);
  };

  return (
    <section id="demo-telephony" className="py-28 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="pill-glass-dark inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white/60 mb-5">
            <PhoneCall className="w-3.5 h-3.5 text-white/50" strokeWidth={1.75} />
            <span>Демонстрация телефонии</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Интеллектуальная телефония в реальном времени
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/45 leading-relaxed">
            Система принимает вызовы круглосуточно, мгновенно считывает потребность клиента и создает сделку прямо во время телефонного разговора.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT: Realistic Phone Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] card-glass-dark p-4 relative overflow-hidden flex flex-col justify-between min-h-[580px]">

              {/* Top Speaker Notch */}
              <div className="w-28 h-4 bg-black/60 rounded-b-xl mx-auto mb-4 flex items-center justify-center gap-2">
                <div className="w-10 h-1 bg-white/10 rounded-full" />
                <div className="w-2 h-2 bg-white/10 rounded-full" />
              </div>

              {/* Status Header inside Phone */}
              <div className="text-center space-y-1 mb-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/35">
                  {callState === 'idle' && 'Линия свободна'}
                  {callState === 'ringing' && 'Входящий звонок...'}
                  {callState === 'connected' && 'Разговор идет 00:18'}
                  {callState === 'ended' && 'Звонок завершен • Сделка создана'}
                </div>
                <div className="text-sm font-semibold text-white">
                  ООО «Завод ПромКомплект»
                </div>
                <div className="text-xs text-white/45 font-mono">
                  +7 (800) 555-35-35
                </div>
              </div>

              {/* Phone Center Visualizer */}
              <div className="flex-1 my-2 flex flex-col items-center justify-center p-4 tile-glass-dark space-y-4">
                {callState === 'idle' && (
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center mx-auto text-white/45">
                      <Phone className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-white/40 max-w-[200px]">
                      Нажмите кнопку ниже, чтобы симулировать входящий звонок от заказчика
                    </p>
                  </div>
                )}

                {callState === 'ringing' && (
                  <div className="text-center space-y-3 animate-bounce">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                      <PhoneCall className="w-7 h-7 animate-pulse" strokeWidth={1.75} />
                    </div>
                    <div className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                      Входящий вызов...
                    </div>
                  </div>
                )}

                {(callState === 'connected' || callState === 'ended') && (
                  <div className="w-full space-y-3">
                    {/* Audio Waveform simulation */}
                    <div className="flex items-center justify-center gap-1.5 h-8">
                      <span className="w-1 bg-white/60 rounded-full animate-wave-1" />
                      <span className="w-1 bg-white/60 rounded-full animate-wave-2" />
                      <span className="w-1 bg-white/40 rounded-full animate-wave-3" />
                      <span className="w-1 bg-white/40 rounded-full animate-wave-4" />
                      <span className="w-1 bg-white/60 rounded-full animate-wave-5" />
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-center text-white/55 font-mono flex items-center justify-center gap-1.5">
                      <Mic className="w-3.5 h-3.5" />
                      <span>Авто-расшифровка голоса</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Phone Controls */}
              <div className="pt-4 space-y-2">
                {callState === 'idle' && (
                  <button
                    onClick={startCallDemo}
                    className="btn-mono-primary-onDark w-full py-3 px-4 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Входящий звонок</span>
                  </button>
                )}

                {callState === 'ringing' && (
                  <button
                    disabled
                    className="w-full py-3 px-4 rounded-full bg-white/15 text-white/70 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20"
                  >
                    <Volume2 className="w-4 h-4 animate-spin" />
                    <span>Соединение...</span>
                  </button>
                )}

                {(callState === 'connected' || callState === 'ended') && (
                  <button
                    onClick={resetCallDemo}
                    className="w-full py-3 px-4 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <PhoneOff className="w-4 h-4" />
                    <span>Завершить / Сбросить</span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* RIGHT: Real-time Transcript & CRM Action Panel */}
          <div className="lg:col-span-7 card-glass-dark p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-white/35">
                  Транскрипт и действия системы
                </span>
                <h3 className="text-base font-semibold text-white mt-0.5">
                  Сквозная квалификация звонка
                </h3>
              </div>
              <div className="text-xs text-white/50 font-mono pill-glass-dark px-3 py-1">
                Задержка: 0.1 сек
              </div>
            </div>

            {/* Live Chat Bubbles Stream */}
            <div className="space-y-3 min-h-[300px] max-h-[360px] overflow-y-auto pr-2" aria-live="polite">
              {visibleLines.length === 0 ? (
                <div className="h-[280px] flex flex-col items-center justify-center text-center text-white/35 text-xs space-y-2">
                  <Phone className="w-8 h-8 text-white/15" strokeWidth={1.5} />
                  <p>Здесь появится текстовая расшифровка диалога с клиентом в реальном времени</p>
                </div>
              ) : (
                visibleLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl text-xs transition-all duration-300 border ${
                      line.sender === 'client'
                        ? 'bg-white/[0.04] text-white/80 border-white/10 mr-8'
                        : line.sender === 'system'
                        ? 'bg-white/[0.08] text-white/90 border-white/15 ml-8'
                        : 'bg-white/[0.02] text-white/50 border-white/10 font-mono text-[11px]'
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold mb-1 opacity-70 text-[10px]">
                      <span>
                        {line.sender === 'client' && '👤 Клиент (Заказчик)'}
                        {line.sender === 'system' && '📞 Цифровая система телефонии'}
                        {line.sender === 'status' && '⚡ Автоматическое действие в CRM'}
                      </span>
                      <span>{line.time}</span>
                    </div>
                    <p className="leading-relaxed">{line.text}</p>
                  </div>
                ))
              )}
            </div>

            {/* Summary Banner on Ended */}
            {callState === 'ended' && (
              <div className="card-glass-dark p-4 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Звонок успешно обработан и передан менеджеру</span>
                </div>
                <div className="text-[11px] text-white/50 space-y-1">
                  <p>• Клиент не ждал ни секунды на линии</p>
                  <p>• Зафиксировано ТЗ: 200 шт. стальных фланцев 150мм</p>
                  <p>• Менеджер получил расшифровку до соединения со звонком</p>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" strokeWidth={1.75} />
                Работает без зависаний даже при 100 одновременных звонках
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
