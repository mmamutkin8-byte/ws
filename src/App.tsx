import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemsSection } from './components/ProblemsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { InteractiveLeadDemo } from './components/InteractiveLeadDemo';
import { TelephonyDemo } from './components/TelephonyDemo';
import { SavingsCalculator } from './components/SavingsCalculator';
import { IntegrationsGrid } from './components/IntegrationsGrid';
import { ComparisonSection } from './components/ComparisonSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Sticky Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main>
        {/* Main Hero Screen */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* Problems Block */}
        <ProblemsSection onOpenModal={handleOpenModal} />

        {/* Our Solutions Block */}
        <SolutionsSection />

        {/* Interactive Lead Processing Simulator */}
        <InteractiveLeadDemo />

        {/* Interactive Telephony Simulator */}
        <TelephonyDemo />

        {/* Savings & ROI Calculator */}
        <SavingsCalculator onOpenModal={handleOpenModal} />

        {/* CRM Integrations Grid */}
        <IntegrationsGrid />

        {/* Before vs After Comparison */}
        <ComparisonSection />

        {/* How It Works (6 Steps) */}
        <HowItWorksSection onOpenModal={handleOpenModal} />

        {/* Why Choose Us */}
        <WhyUsSection />

        {/* FAQ (12 Questions Accordion) */}
        <FAQSection onOpenModal={handleOpenModal} />

        {/* High Impact CTA */}
        <CTASection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact & Demo Request Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
