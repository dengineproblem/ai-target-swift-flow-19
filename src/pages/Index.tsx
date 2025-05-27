
import React, { useRef, useEffect } from 'react';
import { Check, RocketIcon, Settings, Clock, BrainCircuit, Sparkles, MessageSquarePlus, Banknote, PhoneCall } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { NoisePatternCard, NoisePatternCardBody } from '@/components/ui/card-with-noise-pattern';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const isMobile = useIsMobile();

  const handleButtonClick = () => {
    window.open('https://n1147100.alteg.io', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add('opacity-0');
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroGeometric 
        badge="ИИ-таргетинг"
        title1="Заменим вашего таргетолога на ИИ"
        title2="и удвоим количество заявок при том же бюджете"
      />
      
      <div className="subtle-bg-pattern">
        <div className="container mx-auto px-4 py-12 max-w-4xl proposal-container">
          
          <div className="space-y-8 mb-16">
            <NoisePatternCard 
              ref={(el) => (sectionsRef.current[0] = el)}
              className="opacity-0"
            >
              <NoisePatternCardBody>
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b border-indigo/40 flex items-center text-white">
                  <RocketIcon className="w-6 h-6 mr-2 text-indigo icon-glow" />
                  ЧТО ЭТО?
                </h3>
                <p className="mb-6 text-white/90">
                  <strong>ИИ-система, которая полностью заменяет таргетолога. Вы платите только за рекламу — и весь бюджет работает на вас.</strong>
                </p>
                <p className="mb-4 text-white/90">
                  Как это устроено: каждый день система анализирует результаты, сравнивает с целевыми показателями и автоматически включает/выключает кампании, перераспределяет бюджеты, масштабирует лучшие связки.
                </p>
                <p className="mb-4 text-white/90">
                  Чтобы запустить рекламу — достаточно отправить видео или фото в Telegram-бот, дальше всё делается автоматически. Также под каждого клиента мы создаём мини-приложение в Telegram с отчётами и ручным управлением при необходимости.
                </p>
                <p className="text-white/90">
                  В сравнении с человеком, AI-таргетолог показал на 20% лучшие результаты при том же бюджете и тех же креативах.
                </p>
              </NoisePatternCardBody>
            </NoisePatternCard>
            
            <NoisePatternCard 
              ref={(el) => (sectionsRef.current[1] = el)}
              className="opacity-0"
            >
              <NoisePatternCardBody>
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b border-indigo/40 flex items-center text-white">
                  <BrainCircuit className="w-6 h-6 mr-2 text-indigo icon-glow" />
                  ДЛЯ КОГО?
                </h3>
                <ul className="proposal-list">
                  <li><strong>Для тех, кто хочет получать в 2,5 раза больше клиентов при тех же затратах на маркетинг.</strong></li>
                  <li><strong>Для тех, кто тратит 100–300 тыс. ₸ на рекламу и не понимает, зачем платить ещё столько же таргетологу</strong></li>
                  <li><strong>Для предпринимателей, которым надоело объяснять подрядчику очевидные вещи и ждать реакции по 3 дня</strong></li>
                  <li><strong>Для тех, кто сливает бюджет на непонятные кампании без отчётности и контроля</strong></li>
                </ul>
              </NoisePatternCardBody>
            </NoisePatternCard>
            
            <NoisePatternCard 
              ref={(el) => (sectionsRef.current[2] = el)}
              className="opacity-0"
            >
              <NoisePatternCardBody>
                <h3 className="text-2xl font-bold mb-4 pb-2 border-b border-indigo/40 flex items-center text-white">
                  <Sparkles className="w-6 h-6 mr-2 text-indigo icon-glow" />
                  ЧТО ВЫ ПОЛУЧИТЕ?
                </h3>
                <ul className="proposal-list">
                  <li><strong>Запуск рекламных кампаний в 1 клик через Telegram</strong></li>
                  <li><strong>Ежедневная оптимизация и контроль бюджета</strong></li>
                  <li><strong>Сценарии для креативов, сгенерированные ИИ под ваш бизнес</strong></li>
                  <li><strong>Мини-приложение с прозрачной статистикой и управлением рекламой</strong></li>
                </ul>
              </NoisePatternCardBody>
            </NoisePatternCard>
          </div>
          
          <div className="space-y-16">
            <section 
              ref={(el) => (sectionsRef.current[3] = el)} 
              className="proposal-section"
            >
              <h3 className="proposal-section-title">
                <Banknote className="w-6 h-6 mr-2 text-indigo icon-glow" />
                ТАРИФЫ
              </h3>
              <div className={`w-full ${isMobile ? 'text-xs' : 'text-sm'}`}>
                <table className="w-full text-left text-white mt-4">
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3"><strong>Внедрение (разово)</strong></td>
                      <td className="py-3 text-white"><strong>25 000 ₸</strong></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3"><strong>Подписка (ежемесячно)</strong></td>
                      <td className="py-3 text-white"><strong>25 000 ₸ / мес</strong></td>
                    </tr>
                    <tr>
                      <td className="py-3"><strong>Экономия в сравнении с таргетологом</strong></td>
                      <td className="py-3 text-white"><strong>до 275 000 ₸ / мес</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section 
              ref={(el) => (sectionsRef.current[5] = el)} 
              className="proposal-section"
            >
              <h3 className="proposal-section-title">
                <Check className="w-6 h-6 mr-2 text-indigo icon-glow" />
                ГАРАНТИИ
              </h3>
              <p className="mb-4 text-white/90">
                <strong>Мы запускаем ИИ-таргетолога в течение 24 часов с момента оплаты.</strong>
              </p>
              <p className="text-white/90">
                <strong>Если этого не происходит — вернём деньги.</strong>
              </p>
            </section>
            
            <section 
              ref={(el) => (sectionsRef.current[6] = el)} 
              className="proposal-section text-center"
            >
              <h3 className="proposal-section-title justify-center">
                <MessageSquarePlus className="w-6 h-6 mr-2 text-indigo icon-glow" />
                КАК НАЧАТЬ
              </h3>
              <p className="mb-6 text-xl text-white/90">
                <strong>👉 Оставьте заявку, и мы свяжемся с вами.</strong>
              </p>
              <div className="mt-6">
                <Button 
                  onClick={handleButtonClick}
                  className="px-8 py-3 bg-indigo hover:bg-indigo-light transition-colors duration-300 rounded-lg font-bold tracking-wide btn-animated"
                >
                  Записаться на демонстрацию
                </Button>
              </div>
            </section>
          </div>
          
          <footer className="mt-16 pt-8 text-center text-white/40 text-sm">
            <p>© 2025 Perfomante. Все права защищены.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
