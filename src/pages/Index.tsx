import React, { useRef, useEffect } from 'react';
import { Check, RocketIcon, Settings, Clock, BrainCircuit, Sparkles, MessageSquarePlus, Banknote, PhoneCall } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { NoisePatternCard, NoisePatternCardBody } from '@/components/ui/card-with-noise-pattern';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { cn } from '@/lib/utils';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const isMobile = useIsMobile();
  const handleButtonClick = () => {
    window.open('https://n1147100.alteg.io', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, {
      threshold: 0.1
    });
    sectionsRef.current.forEach(section => {
      if (section) {
        section.classList.add('opacity-0');
        observer.observe(section);
      }
    });
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return <div className="min-h-screen bg-black text-white">
      <HeroGeometric badge="ИИ-таргетинг" title1="Заменим вашего таргетолога на ИИ" title2="и удвоим количество заявок при том же бюджете" />
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
        
        <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
          
          <div className="space-y-12 mb-16">
            <section ref={el => sectionsRef.current[0] = el} className="opacity-0">
              
              <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-2 lg:gap-4">
                <GridItem title="Что это" description="ИИ-система, которая полностью заменяет таргетолога. Вы платите только за рекламу — и весь бюджет работает на вас." />
                <GridItem title="Как это устроено" description="Каждый день система анализирует результаты, сравнивает с целевыми показателями и автоматически включает/выключает кампании, перераспределяет бюджеты, масштабирует лучшие связки." />
                <GridItem title="Как запустить рекламу" description="Достаточно отправить видео или фото в Telegram-бот, дальше всё делается автоматически. Также под каждого клиента мы создаём мини-приложение в Telegram с отчётами и ручным управлением при необходимости." />
                <GridItem title="Сравнение с человеком" description="AI-таргетолог показал на 20% лучшие результаты при том же бюджете и тех же креативах." />
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://www.youtube.com/watch?v=Fs3FWDpcccE"
        bgImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
        title="Как работает ИИ-таргетинг"
        scrollToExpand="Прокрутите для просмотра"
      >
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6 text-white'>
            Демонстрация работы системы
          </h2>
          <p className='text-lg mb-8 text-white/80'>
            Посмотрите, как наша ИИ-система анализирует кампании, оптимизирует бюджеты и повышает эффективность рекламы в режиме реального времени.
          </p>
        </div>
      </ScrollExpandMedia>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
        
        <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
          <div className="space-y-12 mb-16">
            
            <NoisePatternCard ref={el => sectionsRef.current[1] = el} className="opacity-0 border-white/[0.08] bg-black/40 backdrop-blur-sm">
              <NoisePatternCardBody className="p-8">
                <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 tracking-tight">
                  ДЛЯ КОГО?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0"></div>
                    <p className="text-white/60 leading-relaxed">
                      <span className="text-white font-medium">Для тех, кто хочет получать в 2,5 раза больше клиентов при тех же затратах на маркетинг.</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0"></div>
                    <p className="text-white/60 leading-relaxed">
                      <span className="text-white font-medium">Для тех, кто тратит 100–300 тыс. ₸ на рекламу и не понимает, зачем платить ещё столько же таргетологу</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0"></div>
                    <p className="text-white/60 leading-relaxed">
                      <span className="text-white font-medium">Для предпринимателей, которым надоело объяснять подрядчику очевидные вещи и ждать реакции по 3 дня</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0"></div>
                    <p className="text-white/60 leading-relaxed">
                      <span className="text-white font-medium">Для тех, кто сливает бюджет на непонятные кампании без отчётности и контроля</span>
                    </p>
                  </div>
                </div>
              </NoisePatternCardBody>
            </NoisePatternCard>
            
            <NoisePatternCard ref={el => sectionsRef.current[2] = el} className="opacity-0 border-white/[0.08] bg-black/40 backdrop-blur-sm">
              <NoisePatternCardBody className="p-8">
                <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 tracking-tight">
                  ЧТО ВЫ ПОЛУЧИТЕ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0"></div>
                    <p className="text-white/60 leading-relaxed">
                      <span className="text-white font-medium">Запуск рекламных кампаний в 1 клик через Telegram</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0"></div>
                    <p className="text-white/60 leading-relaxed">
                      <span className="text-white font-medium">Ежедневная оптимизация и контроль бюджета</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0"></div>
                    <p className="text-white/60 leading-relaxed">
                      <span className="text-white font-medium">Сценарии для креативов, сгенерированные ИИ под ваш бизнес</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 shrink-0"></div>
                    <p className="text-white/60 leading-relaxed">
                      <span className="text-white font-medium">Мини-приложение с прозрачной статистикой и управлением рекламой</span>
                    </p>
                  </div>
                </div>
              </NoisePatternCardBody>
            </NoisePatternCard>
          </div>
          
          <div className="space-y-16">
            <section ref={el => sectionsRef.current[3] = el} className="proposal-section">
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
            
            <section ref={el => sectionsRef.current[5] = el} className="proposal-section">
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
            
            <section ref={el => sectionsRef.current[6] = el} className="proposal-section text-center">
              <h3 className="proposal-section-title justify-center">
                <MessageSquarePlus className="w-6 h-6 mr-2 text-indigo icon-glow" />
                КАК НАЧАТЬ
              </h3>
              <p className="mb-6 text-xl text-white/90">
                <strong>👉 Оставьте заявку, и мы свяжемся с вами.</strong>
              </p>
              <div className="mt-6">
                <Button onClick={handleButtonClick} className="px-8 py-3 bg-indigo hover:bg-indigo-light transition-colors duration-300 rounded-lg font-bold tracking-wide btn-animated">
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
    </div>;
};

interface GridItemProps {
  title: string;
  description: React.ReactNode;
}
const GridItem = ({
  title,
  description
}: GridItemProps) => {
  return <li className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black/80 p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-bold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white/60">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>;
};

export default Index;
