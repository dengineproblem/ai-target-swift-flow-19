import React, { useRef, useEffect } from 'react';
import { Check, RocketIcon, Settings, Clock, BrainCircuit, Sparkles, MessageSquarePlus, Banknote, PhoneCall } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { NoisePatternCard, NoisePatternCardBody } from '@/components/ui/card-with-noise-pattern';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import SimpleVideoSection from '@/components/ui/simple-video-section';
import { Timeline } from '@/components/ui/timeline';
import { PricingCard } from '@/components/ui/dark-gradient-pricing';
import { ComparisonDashboard } from '@/components/ui/comparison-dashboard';
import ClientReports from '@/components/ui/client-reports';
import { Logos3 } from '@/components/ui/logos3';
import { cn } from '@/lib/utils';
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';
import { Faq3 } from '@/components/ui/faq3';

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

  const timelineData = [
    {
      title: "Загрузка креатива",
      content: (
        <div>
          <p className="text-white/60 text-xs md:text-sm font-normal mb-4">
            Вы загружаете видео через приложение в Telegram, выбираете все настройки и нажимаете кнопку "Запустить". 
            После этого автоматически создаются кампания, группа объявлений и объявления на ваш продукт.
          </p>
        </div>
      ),
    },
    {
      title: "Мониторинг и управление", 
      content: (
        <div>
          <p className="text-white/60 text-xs md:text-sm font-normal mb-4">
            Вы следите за статистикой в приложении, можете самостоятельно выключать кампании в один клик, 
            включать их, а также управлять бюджетом и видеть графики за любой отчетный период.
          </p>
        </div>
      ),
    },
    {
      title: "Автопилот ИИ",
      content: (
        <div>
          <p className="text-white/60 text-xs md:text-sm font-normal mb-4">
            Вы можете доверить искусственному интеллекту управление бюджетом. Включите функцию "Автопилот" — 
            он будет ориентироваться на целевые показатели именно вашего бизнеса, не выходить за рамки 
            обговоренного дневного бюджета и автоматически перераспределять бюджет в сторону более эффективных кампаний.
          </p>
        </div>
      ),
    },
    {
      title: "Ежедневная отчетность",
      content: (
        <div>
          <p className="text-white/60 text-xs md:text-sm font-normal mb-4">
            Ежедневно после полуночи берется отчет с рекламного кабинета, и на основании целевых показателей 
            бизнеса производятся действия. Вы получаете утром в Telegram отчет со всеми ключевыми метриками 
            и выполненными действиями.
          </p>
        </div>
      ),
    },
    {
      title: "Генерация креативов",
      content: (
        <div>
          <p className="text-white/60 text-xs md:text-sm font-normal">
            Вы также можете попросить чат-бот написать новый сценарий креатива. У него будет вся информация 
            о вашем бизнесе, примеры форматов креативов, описаны все боли и сегменты целевых аудиторий. 
            Это делает его способным писать максимально релевантные креативы для вашей аудитории.
          </p>
        </div>
      ),
    },
  ];

  const logoData = {
    heading: "50+ компаний уже доверились нам",
    logos: [
      {
        id: "logo-1",
        description: "Компания 1",
        image: "/lovable-uploads/61a2d3f1-423f-44f0-b7c2-a0bd07ed3f6e.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-2",
        description: "KAESH",
        image: "/lovable-uploads/c4c7ab77-aef1-46dc-899e-4ee7daf44ae3.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-3",
        description: "7S",
        image: "/lovable-uploads/4157d564-2f4a-4371-b63c-5b4372c3e01a.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-4",
        description: "8:8 Business Club",
        image: "/lovable-uploads/11351c25-f18f-456f-9310-7a086c73f356.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-5",
        description: "Ski Bu",
        image: "/lovable-uploads/7354785b-7d72-4bcd-9b3e-b8bb2eaedfeb.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-6",
        description: "Super Ferma",
        image: "/lovable-uploads/dfcb9cbf-dece-4dc1-a18d-754f4cd3a046.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-7",
        description: "Aqua Rezerv",
        image: "/lovable-uploads/1dfb43af-0e55-4c1c-ad19-43a36fe6ddde.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-8",
        description: "USmile",
        image: "/lovable-uploads/73a5b0f5-a697-429c-87bb-0e71734eb8dc.png",
        className: "h-12 w-auto",
      },
    ],
  };

  const faqData = {
    heading: "Часто задаваемые вопросы",
    description: "Ответы на самые популярные вопросы о нашем ИИ-таргетологе. Не нашли ответ? Свяжитесь с нашей поддержкой.",
    items: [
      {
        id: "faq-1",
        question: "Как искусственный интеллект сам подбирает мне нужную аудиторию?",
        answer: "Механизм умного подбора аудитории уже заложен в алгоритмах Facebook. Наш ИИ просто правильно указывает все настройки, чтобы этот механизм работал максимально эффективно. Обычные таргетологи тоже полагаются на эту же настройку, но часто не меняют интересы под каждый креатив, что снижает эффективность."
      },
      {
        id: "faq-2",
        question: "Что будет делать ИИ-таргетолог, если результаты плохие?",
        answer: "У нашего ИИ в памяти хранятся три последних отчета по каждой кампании. Если он видит, что три дня подряд результаты неудовлетворительные и существенно превышают ваши целевые показатели, он автоматически отключит кампанию, чтобы не тратить бюджет впустую."
      },
      {
        id: "faq-3",
        question: "Какие цели поддерживает ИИ-таргетолог?",
        answer: "Сейчас мы работаем только на вовлеченность и лиды. Это самые востребованные цели для большинства бизнесов, и мы сосредоточились на том, чтобы делать их максимально эффективно."
      },
      {
        id: "faq-4",
        question: "Откуда ИИ знает, что для меня дорогая заявка, а что дешевая?",
        answer: "У нашего агента есть специальные промпты, в которых описаны все целевые показатели вашего бизнеса и направления, которые вы продвигаете. Эту информацию мы получаем от вас при первом общении с ботом, который собирает подробный бриф о вашем бизнесе."
      },
      {
        id: "faq-5",
        question: "Зачем мне помощник для креативов, если есть ChatGPT-5?",
        answer: "Наш бот-помощник — это не просто стандартный ChatGPT. Он обладает промптом, в котором уже проведен маркетинговый анализ вашего бизнеса, выделены все сегменты аудитории под каждое ваше направление. Он дает максимально релевантный креатив в один запрос, без необходимости писать сложные промпты. Поэтому пользоваться им гораздо проще."
      },
      {
        id: "faq-6",
        question: "А если ИИ сломается или будет работать неправильно?",
        answer: "За системой следит наша команда. Если что-то пойдет не так, мы моментально получим уведомление и исправим проблему. У вас всегда есть прямая связь с нами через поддержку."
      },
      {
        id: "faq-7",
        question: "Сколько времени занимает настройка и запуск?",
        answer: "После оплаты мы настраиваем систему под ваш бизнес за 1-2 дня. Вы получаете доступ к Telegram-боту, и можете сразу начинать запускать рекламу."
      },
      {
        id: "faq-8",
        question: "Можно ли посмотреть, как это работает, до покупки?",
        answer: "Конечно! Мы проводим персональные демонстрации, где показываем реальную работу системы на примерах других клиентов. Записывайтесь на демо-звонок."
      },
      {
        id: "faq-9",
        question: "А вдруг Facebook заблокирует мой рекламный кабинет?",
        answer: "ИИ работает через ваш личный рекламный кабинет и использует только официальные API Facebook. Никаких серых схем — все по правилам платформы. Риск блокировки такой же, как при работе с обычным таргетологом. Если вдруг что-то случится, мы можем предоставить свой рекламный кабинет для продолжения рекламы."
      },
      {
        id: "faq-10",
        question: "А если у меня нет Facebook или там какие-то проблемы?",
        answer: "Не переживайте — мы все настроим под ключ. Создадим рекламный кабинет, настроим все необходимые доступы и доведем до запуска. Вам останется только получать заявки."
      },
      {
        id: "faq-11",
        question: "Что если мой бизнес очень специфичный?",
        answer: "Наш ИИ адаптируется под любую нишу благодаря детальному брифу, который мы с вами проводим. Мы уже работали с медициной, образованием, строительством, ресторанами — система подстраивается под особенности каждого бизнеса."
      },
      {
        id: "faq-12",
        question: "Сколько креативов нужно для запуска?",
        answer: "Для начала достаточно 3-5 креативов. ИИ протестирует их все и сосредоточит бюджет на самых эффективных. Помощник по креативам поможет вам создать нужное количество материалов."
      },
      {
        id: "faq-13",
        question: "Можно ли использовать систему для нескольких проектов?",
        answer: "Да, но каждый проект требует отдельной настройки, так как у каждого бизнеса свои цели, аудитория и показатели эффективности."
      },
    ],
    supportHeading: "Остались вопросы?",
    supportDescription: "Наша команда поддержки готова помочь вам с любыми вопросами или проблемами. Свяжитесь с нами для персональной консультации.",
    supportButtonText: "Записаться на демонстрацию",
    supportButtonUrl: "https://n1147100.alteg.io",
  };

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

      {/* Simple Video Section */}
      <SimpleVideoSection 
        title="Демонстрация работы системы"
        description="Посмотрите, как наша ИИ-система анализирует кампании, оптимизирует бюджеты и повышает эффективность рекламы в режиме реального времени."
        videoSrc="https://www.youtube.com/watch?v=Fs3FWDpcccE"
      />

      {/* Comparison Dashboard - Выгоды от использования ИИ-таргетолога */}
      <ComparisonDashboard />

      {/* Timeline Section - Как работает ИИ-таргетолог */}
      <Timeline data={timelineData} />

      {/* Client Reports Section - Результаты наших клиентов */}
      <ClientReports />

      {/* Logos Section - 50+ компаний уже доверились нам */}
      <div className="bg-black">
        <Logos3 {...logoData} />
      </div>

      {/* Testimonials Section - Отзывы клиентов */}
      <section className="relative overflow-hidden bg-black text-white py-20">
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-12 space-y-3">
            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-white">
              Отзывы клиентов
            </h2>
            <p className="text-center text-base text-white/60 md:text-lg">
              Реальные отзывы предпринимателей, которые уже используют наш ИИ-таргетолог
            </p>
          </div>
          <StaggerTestimonials />
        </div>
      </section>

      {/* FAQ Section - Часто задаваемые вопросы */}
      <Faq3 {...faqData} />

      {/* Pricing Section - Тарифы */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
          <div className="mb-12 space-y-3">
            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-white">
              Тарифы
            </h2>
            <p className="text-center text-base text-white/60 md:text-lg">
              Выберите подходящий пакет для вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <PricingCard
              tier="3 месяца"
              price="120.000 ₸"
              bestFor="40.000 ₸ в месяц"
              CTA="Выбрать пакет"
              benefits={[
                { text: "AI-агент для написания сценариев для креативов", checked: true },
                { text: "Доступ к мини-приложению в Telegram", checked: true },
                { text: "AI-агент для управления рекламными кампаниями", checked: true },
                { text: "Курс по таргетированной рекламе для предпринимателей", checked: false },
              ]}
            />
            <PricingCard
              tier="6 месяцев"
              price="210.000 ₸"
              bestFor="35.000 ₸ в месяц"
              CTA="Выбрать пакет"
              benefits={[
                { text: "AI-агент для написания сценариев для креативов", checked: true },
                { text: "Доступ к мини-приложению в Telegram", checked: true },
                { text: "AI-агент для управления рекламными кампаниями", checked: true },
                { text: "Курс по таргетированной рекламе для предпринимателей", checked: false },
              ]}
            />
            <PricingCard
              tier="12 месяцев"
              price="300.000 ₸"
              bestFor="25.000 ₸ в месяц"
              CTA="Выбрать пакет"
              benefits={[
                { text: "AI-агент для написания сценариев для креативов", checked: true },
                { text: "Доступ к мини-приложению в Telegram", checked: true },
                { text: "AI-агент для управления рекламными кампаниями", checked: true },
                { text: "Курс по таргетированной рекламе для предпринимателей", checked: true },
              ]}
            />
          </div>
        </div>
      </section>
      
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
