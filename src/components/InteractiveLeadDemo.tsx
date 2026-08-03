import React, { useState } from 'react';
import { CheckCircle2, Play, RefreshCw, Sparkles, Server, UserCheck, FileText, BellRing, MessageSquareText, ShieldCheck } from 'lucide-react';
import { playTapSound, playStepSound, playSuccessChime } from '../utils/audio';

const presetQueries = [
  "Здравствуйте. Нужно рассчитать стоимость изготовления 500 фланцев по чертежам.",
  "Добрый день! Каковы сроки производства корпусов из листовой стали 3мм?",
  "Запрос КП: Поставка промышленной фурнитуры для конвейерной линии.",
];

interface SimulationStep {
  id: number;
  label: string;
  sub: string;
  icon: React.ElementType;
}

const steps: SimulationStep[] = [
  { id: 1, label: "Получено сообщение", sub: "Считаны контактные данные и текст обращения", icon: MessageSquareText },
  { id: 2, label: "Определена тема", sub: "Рубрикация: Расчет стоимости мелкосерийных изделий", icon: FileText },
  { id: 3, label: "Создан клиент", sub: "ООО «ПромТехСнаб» • Контакт: Александр В.", icon: UserCheck },
  { id: 4, label: "Создана сделка", sub: "Этап: Первичный расчет ТЗ • Сумма: Оценка", icon: Sparkles },
  { id: 5, label: "Записано в CRM", sub: "Интеграция с Bitrix24 / amoCRM успешно завершена", icon: Server },
  { id: 6, label: "Отправлено менеджеру", sub: "Уведомление в Telegram и CRM инженеру Сергею", icon: BellRing },
  { id: 7, label: "Ответ клиенту готов", sub: "Сформировано подтверждение приемки заказа с номером сделки", icon: CheckCircle2 },
];

export const InteractiveLeadDemo: React.FC = () => {
  const [inputText, setInputText] = useState(presetQueries[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  const startSimulation = () => {
    if (isSimulating) return;
    playTapSound();
    setIsSimulating(true);
    setCurrentStepIndex(0);
    setIsCompleted(false);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setCurrentStepIndex(step);
        playStepSound();
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setIsCompleted(true);
        playSuccessChime();
      }
    }, 650);
  };

  const handleReset = () => {
    playTapSound();
    setIsSimulating(false);
    setCurrentStepIndex(-1);
    setIsCompleted(false);
  };

  return (
    <section id="demo-lead" className="py-28 bg-black text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="pill-glass-dark inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white/60 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-white/50" strokeWidth={1.75} />
            <span>Интерактивный симулятор</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Демонстрация обработки заявки
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/45 leading-relaxed">
            Попробуйте прямо сейчас: отправьте обращение и посмотрите, как система автоматически проводит клиента по всей цепочке до CRM и менеджера.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Input panel & preset selector */}
          <div className="lg:col-span-5 card-glass-dark p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-white/35">
                1. Шаг: Шаблон обращения
              </span>
              <span className="text-[11px] font-semibold text-white/60 pill-glass-dark px-2.5 py-0.5">
                Интерактивно
              </span>
            </div>

            {/* Quick preset selector */}
            <div className="space-y-2">
              <label className="text-xs text-white/40 font-medium">Выберите готовое ТЗ от клиента:</label>
              <div className="space-y-2">
                {presetQueries.map((preset, idx) => (
                  <button
                    key={idx}
                    disabled={isSimulating}
                    onClick={() => {
                      playTapSound();
                      setInputText(preset);
                    }}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                      inputText === preset
                        ? 'bg-white/[0.09] border-white/25 text-white font-medium'
                        : 'bg-white/[0.02] border-white/10 text-white/40 hover:text-white/70 hover:border-white/20'
                    }`}
                  >
                    "{preset}"
                  </button>
                ))}
              </div>
            </div>

            {/* Input textarea */}
            <div className="space-y-2">
              <label htmlFor="lead-demo-textarea" className="text-xs text-white/40 font-medium">Или введите свой вариант обращения:</label>
              <textarea
                id="lead-demo-textarea"
                value={inputText}
                disabled={isSimulating}
                onChange={(e) => setInputText(e.target.value)}
                rows={3}
                className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all resize-none font-sans"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                disabled={isSimulating || !inputText.trim()}
                onClick={startSimulation}
                className={`flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  isSimulating
                    ? 'bg-white/[0.05] text-white/35 cursor-not-allowed'
                    : 'btn-mono-primary-onDark cursor-pointer'
                }`}
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Идет обработка...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Попробовать</span>
                  </>
                )}
              </button>

              {(currentStepIndex >= 0 || isCompleted) && (
                <button
                  onClick={handleReset}
                  className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white/60 hover:text-white transition-colors cursor-pointer"
                  title="Сбросить симуляцию"
                  aria-label="Сбросить симуляцию"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Info note */}
            <div className="tile-glass-dark p-3.5 flex items-center gap-2.5 text-[11px] text-white/40">
              <ShieldCheck className="w-4 h-4 text-white/40 shrink-0" strokeWidth={1.75} />
              <span>Без запроса внешних API. Локальная демонстрация алгоритма.</span>
            </div>
          </div>

          {/* RIGHT: Step-by-step progress visualizer */}
          <div className="lg:col-span-7 card-glass-dark p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-white/35">
                2. Шаг: Автоматическое исполнение
              </span>
              <span className="text-xs font-mono text-white/55 flex items-center gap-1.5" aria-live="polite">
                <span className={`w-2 h-2 rounded-full ${isSimulating ? 'bg-white animate-ping' : 'bg-white/50'}`} />
                {isSimulating ? 'Выполнение этапов...' : isCompleted ? 'Успешно выполнено' : 'Ожидание запуска'}
              </span>
            </div>

            {/* Steps Visualizer List */}
            <div className="space-y-3 relative">
              {/* Connecting vertical line */}
              <div className="absolute left-[21px] top-4 bottom-4 w-px bg-white/10 z-0" />

              {steps.map((st, idx) => {
                const isPassed = idx < currentStepIndex || isCompleted;
                const isCurrent = idx === currentStepIndex && isSimulating;

                return (
                  <div
                    key={st.id}
                    className={`relative z-10 p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      isCurrent
                        ? 'bg-white/[0.09] border-white/30 translate-x-1'
                        : isPassed
                        ? 'bg-white/[0.05] border-white/15 text-white/90'
                        : 'bg-white/[0.01] border-white/[0.06] opacity-40'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Step Status Icon */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          isPassed
                            ? 'bg-white text-black'
                            : isCurrent
                            ? 'bg-white/15 text-white border border-white/30 animate-pulse'
                            : 'bg-white/[0.05] text-white/30 border border-white/10'
                        }`}
                      >
                        {isPassed ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <st.icon className="w-4 h-4" />
                        )}
                      </div>

                      {/* Step labels */}
                      <div>
                        <div className={`text-xs font-semibold leading-tight ${isPassed ? 'text-white' : isCurrent ? 'text-white' : 'text-white/40'}`}>
                          {st.label}
                        </div>
                        <div className="text-[11px] text-white/35 mt-0.5">
                          {st.sub}
                        </div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div>
                      {isCurrent && (
                        <span className="text-[10px] font-mono font-semibold text-white/70 bg-white/10 px-2 py-0.5 rounded-lg border border-white/20">
                          Обработка...
                        </span>
                      )}
                      {isPassed && (
                        <span className="text-[10px] font-mono font-semibold text-white/40">
                          0.2с
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Completion Result Banner */}
            {isCompleted && (
              <div className="card-glass-dark p-5 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Готово! Заявка полностью обработана.</span>
                </div>
                <p className="text-xs text-white/55 leading-relaxed">
                  В реальной системе этот процесс занимает <strong className="text-white/80">считанные секунды</strong>. Ни одна заявка не потеряется, менеджер мгновенно получит уведомление, а клиент — подтверждение.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
