import React, { useState } from 'react';
import { Calculator, Clock, Wallet, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { playTapSound } from '../utils/audio';

interface SavingsCalculatorProps {
  onOpenModal: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenModal }) => {
  // Sliders state
  const [monthlyLeads, setMonthlyLeads] = useState<number>(450); // 100 - 3000
  const [avgProcessMinutes, setAvgProcessMinutes] = useState<number>(25); // 5 - 60 min
  const [hourlyRate, setHourlyRate] = useState<number>(650); // 300 - 1500 RUB
  const [lostConversionPercent, setLostConversionPercent] = useState<number>(18); // 5 - 35%

  // Calculations
  const totalManualHours = Math.round((monthlyLeads * avgProcessMinutes) / 60);
  const savedHoursMonthly = Math.round(totalManualHours * 0.82);
  const salarySavingsRub = Math.round(savedHoursMonthly * hourlyRate);

  const avgOrderValue = 150000;
  const savedLeadsCount = Math.round((monthlyLeads * (lostConversionPercent / 100)) * 0.7);
  const savedRevenueRub = Math.round(savedLeadsCount * avgOrderValue * 0.2);

  const totalMonthlyBenefitRub = salarySavingsRub + savedRevenueRub;

  const handleSliderChange = (setter: React.Dispatch<React.SetStateAction<number>>, val: number) => {
    setter(val);
    playTapSound();
  };

  return (
    <section id="calculator" className="py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="pill-glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-600 mb-5">
            <Calculator className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
            <span>Финансовая экономия</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Калькулятор окупаемости и экономии
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">
            Посчитайте, сколько часов рабочего времени и денег теряет ваше производство ежемесячно на ручной обработке обращений.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: Sliders Inputs */}
          <div className="lg:col-span-6 card-glass p-6 sm:p-9 space-y-8 flex flex-col justify-between">

            <div className="space-y-7">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Параметры вашего отдела продаж
                </span>
                <span className="text-xs text-slate-400 font-mono font-medium">
                  Интерактивные ползунки
                </span>
              </div>

              {/* Slider 1: Monthly Leads */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="leads-slider" className="font-medium text-slate-700">
                    Количество заявок в месяц:
                  </label>
                  <span className="font-heading font-semibold text-slate-900 text-base bg-slate-900/[0.04] px-3 py-1 rounded-lg border border-slate-200">
                    {monthlyLeads.toLocaleString('ru-RU')} заявок
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  id="leads-slider"
                  value={monthlyLeads}
                  onChange={(e) => handleSliderChange(setMonthlyLeads, Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>100</span>
                  <span>1 500</span>
                  <span>3 000+</span>
                </div>
              </div>

              {/* Slider 2: Average Process Time */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="process-time-slider" className="font-medium text-slate-700">
                    Среднее время обработки 1 заявки:
                  </label>
                  <span className="font-heading font-semibold text-slate-900 text-base bg-slate-900/[0.04] px-3 py-1 rounded-lg border border-slate-200">
                    {avgProcessMinutes} минут
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  id="process-time-slider"
                  value={avgProcessMinutes}
                  onChange={(e) => handleSliderChange(setAvgProcessMinutes, Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>5 мин</span>
                  <span>30 мин</span>
                  <span>60 мин</span>
                </div>
              </div>

              {/* Slider 3: Hourly Rate */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="hourly-rate-slider" className="font-medium text-slate-700">
                    Стоимость часа работы менеджера:
                  </label>
                  <span className="font-heading font-semibold text-slate-900 text-base bg-slate-900/[0.04] px-3 py-1 rounded-lg border border-slate-200">
                    {hourlyRate.toLocaleString('ru-RU')} ₽ / час
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="1500"
                  step="50"
                  id="hourly-rate-slider"
                  value={hourlyRate}
                  onChange={(e) => handleSliderChange(setHourlyRate, Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>300 ₽</span>
                  <span>900 ₽</span>
                  <span>1 500 ₽</span>
                </div>
              </div>

              {/* Slider 4: Lost Conversion % */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="lost-conversion-slider" className="font-medium text-slate-700">
                    Доля упущенных обращений из-за задержки:
                  </label>
                  <span className="font-heading font-semibold text-slate-900 text-base bg-slate-900/[0.04] px-3 py-1 rounded-lg border border-slate-200">
                    {lostConversionPercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  id="lost-conversion-slider"
                  value={lostConversionPercent}
                  onChange={(e) => handleSliderChange(setLostConversionPercent, Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>5% (Минимум)</span>
                  <span>20% (Среднее)</span>
                  <span>35% (Критично)</span>
                </div>
              </div>
            </div>

            <div className="tile-glass p-4 text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-700">Примечание:</strong> Расчет учитывает только прямую экономию человеко-часов и предотвращение потери заказов в нерабочее время.
            </div>

          </div>

          {/* RIGHT: Results & Savings Summary */}
          <div className="lg:col-span-6 card-glass-dark bg-black text-white p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden">

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-7">
                <span className="text-xs font-mono uppercase tracking-wider text-white/35">
                  Результат автоматизации
                </span>
                <span className="text-xs font-mono text-white/60 pill-glass-dark px-3 py-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ежемесячный эффект
                </span>
              </div>

              {/* Big Stat #1: Saved Hours */}
              <div className="mb-6 tile-glass-dark p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-white/50">
                  <Clock className="w-4 h-4" strokeWidth={1.75} />
                  <span>Вы сможете сэкономить рабочего времени:</span>
                </div>
                <div className="font-heading text-4xl sm:text-5xl font-semibold text-white tracking-tight">
                  {savedHoursMonthly.toLocaleString('ru-RU')} часов
                </div>
                <div className="text-xs text-white/40">
                  Эквивалентно полной ставке <strong className="text-white/70">{(savedHoursMonthly / 160).toFixed(1)} менеджеров</strong> отдела продаж
                </div>
              </div>

              {/* Big Stat #2: Saved Money */}
              <div className="mb-6 tile-glass-dark p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-white/50">
                  <Wallet className="w-4 h-4" strokeWidth={1.75} />
                  <span>Сбереженные деньги ежемесячно:</span>
                </div>
                <div className="font-heading text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                  ≈ {salarySavingsRub.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-xs text-white/45">
                  С учетом сбереженной выручки: <strong className="text-white/75">≈ {totalMonthlyBenefitRub.toLocaleString('ru-RU')} ₽ / мес</strong>
                </div>
              </div>

              {/* Additional metric tags */}
              <div className="grid grid-cols-2 gap-3 mb-9 text-xs">
                <div className="tile-glass-dark p-3.5">
                  <div className="text-white/35 text-[10px]">Ускорение отклика:</div>
                  <div className="font-semibold text-white text-sm mt-0.5 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" strokeWidth={1.75} />
                    <span>в 18 раз быстрее</span>
                  </div>
                </div>
                <div className="tile-glass-dark p-3.5">
                  <div className="text-white/35 text-[10px]">Окупаемость системы:</div>
                  <div className="font-semibold text-white text-sm mt-0.5">
                    в 1-й месяц работы
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator CTA */}
            <div>
              <button
                onClick={() => {
                  playTapSound();
                  onOpenModal();
                }}
                className="btn-mono-primary-onDark w-full py-4 px-6 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Получить детальный расчет для нашего завода</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
