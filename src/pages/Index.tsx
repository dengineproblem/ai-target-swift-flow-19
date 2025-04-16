
import React, { useRef, useEffect } from 'react';
import { Check, RocketIcon, Settings, Clock, BrainCircuit, Sparkles, MessageSquarePlus, Banknote, PhoneCall } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const isMobile = useIsMobile();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/77074094375', '_blank', 'noopener,noreferrer');
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
    <div className="min-h-screen bg-black text-white subtle-bg-pattern">
      <div className="container mx-auto px-4 py-12 max-w-4xl proposal-container">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Заменим вашего таргетолога на ИИ
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white/80">
            Теперь весь бюджет будет работать на вас
          </h2>
          <Separator className="w-1/4 mx-auto bg-indigo/50 h-[2px] mb-8" />
        </header>

        <div 
          ref={phoneRef} 
          className="flex justify-center mb-16 phone-container transition-transform duration-500 hover:scale-[1.01]"
        >
          <div className="border border-white/10 rounded-xl p-4 bg-black/50 shadow-[0_0_30px_rgba(30,58,138,0.1)]">
            <img 
              src="/lovable-uploads/e38c2fbe-9f4a-4e8b-a66e-afc1ff11665d.png" 
              alt="ИИ-таргетолог интерфейс на телефоне" 
              className="max-w-full h-auto max-h-[80vh]"
            />
          </div>
        </div>
        
        <div className="space-y-16">
          <section 
            ref={(el) => (sectionsRef.current[0] = el)} 
            className="proposal-section"
          >
            <h3 className="proposal-section-title">
              <RocketIcon className="w-6 h-6 mr-2 text-indigo icon-glow" />
              ЧТО ЭТО?
            </h3>
            <p className="mb-6 text-white/90">
              <strong>ИИ-система, которая полностью заменяет таргетолога. Вы платите только за рекламу — и весь бюджет работает на вас.</strong>
            </p>
            <p className="mb-4 text-white/90">
              Как это устроено: каждый день система анализирует результаты, сравнивает с целевыми показателями и автоматически включает/выключает камп��ии, перераспределяет бюджеты, масштабирует лучшие связки.
            </p>
            <p className="mb-4 text-white/90">
              Чтобы запустить рекламу — достаточно отправить видео или фото в Telegram-бот, дальше всё делается автоматически. Также под каждого клиента мы создаём мини-приложение в Telegram с отчётами и ручным управлением при необходимости.
            </p>
            <p className="text-white/90">
              В сравнении с человеком, AI-таргетолог показал на 20% лучшие результаты при том же бюджете и тех же креативах.
            </p>
          </section>
          
          <section 
            ref={(el) => (sectionsRef.current[1] = el)} 
            className="proposal-section"
          >
            <h3 className="proposal-section-title">
              <BrainCircuit className="w-6 h-6 mr-2 text-indigo icon-glow" />
              ДЛЯ КОГО?
            </h3>
            <ul className="proposal-list">
              <li><strong>Для тех, кто хочет получать в 2,5 раза больше клиентов при тех же затратах на маркетинг.</strong></li>
              <li><strong>Для тех, кто тратит 100–300 тыс. ₸ на рекламу и не понимает, зачем платить ещё столько же таргетологу</strong></li>
              <li><strong>Для предпринимателей, которым надоело объяснять подрядчику очевидные вещи и ждать реакции по 3 дня</strong></li>
              <li><strong>Для тех, кто сливает бюджет на непонятные кампании без отчётности и контроля</strong></li>
            </ul>
          </section>
          
          <section 
            ref={(el) => (sectionsRef.current[2] = el)} 
            className="proposal-section"
          >
            <h3 className="proposal-section-title">
              <Sparkles className="w-6 h-6 mr-2 text-indigo icon-glow" />
              ЧТО ВЫ ПОЛУЧИТЕ?
            </h3>
            <ul className="proposal-list">
              <li><strong>Запуск рекламных кампаний в 1 клик через Telegram</strong></li>
              <li><strong>Ежедневная оптимизация и контроль бюджета</strong></li>
              <li><strong>Сценарии для креативов, сгенерированные ИИ под ваш бизнес</strong></li>
              <li><strong>Мини-приложение с прозрачной статистикой и управлением рекламой</strong></li>
            </ul>
          </section>
          
          <section 
            ref={(el) => (sectionsRef.current[3] = el)} 
            className="proposal-section"
          >
            <h3 className="proposal-section-title">
              <Banknote className="w-6 h-6 mr-2 text-indigo icon-glow" />
              ТАРИФЫ
            </h3>
            <div className={`w-full ${isMobile ? 'text-xs' : 'text-sm'}`}>
              <table className="w-full text-left text-white/90 mt-4">
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3"><strong>Внедрение (разово)</strong></td>
                    <td className="py-3 text-indigo"><strong>50 000 ₸</strong></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3"><strong>Подписка (с 2-го месяца)</strong></td>
                    <td className="py-3 text-indigo"><strong>25 000 ₸ / мес</strong></td>
                  </tr>
                  <tr>
                    <td className="py-3"><strong>Экономия в сравнении с таргетологом</strong></td>
                    <td className="py-3 text-indigo"><strong>до 275 000 ₸ / мес</strong></td>
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
                onClick={handleWhatsAppClick}
                className="px-8 py-3 bg-indigo hover:bg-indigo-light transition-colors duration-300 rounded-lg font-bold tracking-wide btn-animated"
              >
                Оставить заявку
              </Button>
            </div>
          </section>
        </div>
        
        <footer className="mt-16 pt-8 text-center text-white/40 text-sm">
          <p>© 2025 Perfomante. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
