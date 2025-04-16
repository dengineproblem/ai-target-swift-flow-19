
import React from 'react';
import { Check, BarChart3, RocketIcon, Settings, Clock, BrainCircuit, Sparkles, MessageSquarePlus, Banknote } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white subtle-bg-pattern">
      <div className="container mx-auto px-4 py-12 max-w-4xl proposal-container">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            КАК РАБОТАЕТ AI-ТАРГЕТОЛОГ ОТ PERFOMANTE
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-white/80">
            МНОГОАГЕНТНАЯ СИСТЕМА С ИСКУССТВЕННЫМ ИНТЕЛЛЕКТОМ, КОТОРАЯ ПОЛНОСТЬЮ ЗАМЕНЯЕТ ТАРГЕТОЛОГА
          </h2>
          <Separator className="w-1/4 mx-auto bg-indigo/50 h-[2px] mb-8" />
        </header>

        <div className="flex justify-center mb-16 transform hover:scale-[1.01] transition-transform duration-500">
          <div className="border border-white/10 rounded-xl p-4 bg-black/50 shadow-[0_0_30px_rgba(30,58,138,0.1)]">
            <img 
              src="/lovable-uploads/e38c2fbe-9f4a-4e8b-a66e-afc1ff11665d.png" 
              alt="AI-таргетолог интерфейс на телефоне" 
              className="max-w-full h-auto max-h-[80vh]"
            />
          </div>
        </div>
        
        <div className="space-y-16">
          <p className="text-xl text-center max-w-3xl mx-auto">
            <strong className="text-white">AI-таргетолог — это не просто бот, это революционная многоагентная система с искусственным интеллектом, которая берет на себя все функции дорогостоящего таргетолога и выполняет их круглосуточно с высочайшей точностью.</strong>
          </p>
          
          <section className="proposal-section">
            <h3 className="proposal-section-title">
              <RocketIcon className="w-6 h-6 mr-2 text-indigo" />
              АВТОМАТИЧЕСКИЙ ЗАПУСК РЕКЛАМЫ БЕЗ ПОСРЕДНИКОВ
            </h3>
            <p className="mb-6 text-white/90"><strong>Просто отправьте ваш рекламный креатив в Telegram-бота, и система автоматически:</strong></p>
            <ul className="proposal-list">
              <li><strong>Создаст рекламную кампанию с оптимальными настройками</strong></li>
              <li><strong>Сформирует группы объявлений с правильной структурой</strong></li>
              <li><strong>Разработает объявления на основе вашего креатива</strong></li>
              <li><strong>Запустит их на следующий день в тестовом режиме с минимальным бюджетом</strong></li>
            </ul>
          </section>
          
          <section className="proposal-section">
            <h3 className="proposal-section-title">
              <Clock className="w-6 h-6 mr-2 text-indigo" />
              ЕЖЕДНЕВНАЯ ОПТИМИЗАЦИЯ, КОГДА ВЫ СПИТЕ
            </h3>
            <p className="mb-6 text-white/90"><strong>Каждую ночь, когда обычный таргетолог отдыхает, AI-система:</strong></p>
            <ul className="proposal-list">
              <li><strong>Собирает полный отчет за предыдущий день</strong></li>
              <li><strong>Анализирует эффективность всех кампаний</strong></li>
              <li><strong>Перераспределяет бюджет на лучшие объявления</strong></li>
              <li><strong>Отключает неэффективные креативы</strong></li>
              <li><strong>Корректирует ставки для снижения стоимости заявки</strong></li>
            </ul>
          </section>
          
          <section className="proposal-section">
            <h3 className="proposal-section-title">
              <BarChart3 className="w-6 h-6 mr-2 text-indigo" />
              ДОСТУП К СТАТИСТИКЕ ОДНИМ КАСАНИЕМ
            </h3>
            <p className="mb-6 text-white/90"><strong>Вы получаете персональное мини-приложение в Telegram, разработанное специально для вашего бизнеса:</strong></p>
            <ul className="proposal-list">
              <li><strong>Вся статистика в реальном времени</strong></li>
              <li><strong>Удобные графики и диаграммы</strong></li>
              <li><strong>Мгновенный доступ к данным в любое время суток</strong></li>
              <li><strong>Интуитивно понятный интерфейс даже для тех, кто далек от рекламы</strong></li>
            </ul>
          </section>
          
          <section className="proposal-section">
            <h3 className="proposal-section-title">
              <Settings className="w-6 h-6 mr-2 text-indigo" />
              ПРОФЕССИОНАЛЬНЫЕ ИНСТРУМЕНТЫ В ОСНОВЕ СИСТЕМЫ
            </h3>
            <p className="mb-6 text-white/90"><strong>Мы заложили в AI-таргетолога все инструменты, которыми пользовались сами на протяжении 8 лет и опыта более 1 млн$ рекламного бюджета:</strong></p>
            <ul className="proposal-list">
              <li><strong>Умное перераспределение бюджета между кампаниями</strong></li>
              <li><strong>Автоматическое дублирование успешных кампаний</strong></li>
              <li><strong>Мгновенная остановка неэффективных объявлений</strong></li>
            </ul>
          </section>
          
          <section className="proposal-section">
            <h3 className="proposal-section-title">
              <BrainCircuit className="w-6 h-6 mr-2 text-indigo" />
              КРЕАТИВНЫЙ AI-ПОМОЩНИК В КОМПЛЕКТЕ
            </h3>
            <p className="mb-6 text-white/90"><strong>В дополнение к таргетингу вы получаете мощного AI-помощника для создания рекламных материалов:</strong></p>
            <ul className="proposal-list">
              <li><strong>У него есть вся информация о вашем бизнесе</strong></li>
              <li><strong>База данных всех ваших успешных креативов</strong></li>
              <li><strong>По одному текстовому запросу вы получаете готовый сценарий для рекламы</strong></li>
              <li><strong>Просто снимите видео по сценарию или передайте задачу специалисту</strong></li>
              <li><strong>Запустите через того же бота — и реклама готова!</strong></li>
            </ul>
          </section>
          
          <section className="proposal-section">
            <h3 className="proposal-section-title">
              <Sparkles className="w-6 h-6 mr-2 text-indigo" />
              ВСЕ ЭТО БЕЗ ЕЖЕМЕСЯЧНЫХ ПЛАТЕЖЕЙ ТАРГЕТОЛОГУ
            </h3>
            <p className="mb-6 text-white/90">
              <strong>
                Представьте: вместо того чтобы платить 250 000 тенге таргетологу, вы направляете эти деньги прямо в рекламный бюджет и получаете в 2,5 раза больше клиентов. AI-таргетолог работает круглосуточно, не устает, не болеет и не берет отпуск.
              </strong>
            </p>
            <p className="mb-4 text-center text-xl font-semibold">
              <strong className="text-indigo">
                Ваша реклама наконец-то начинает работать на полную мощность.
              </strong>
            </p>
          </section>
          
          <section className="proposal-section">
            <h3 className="proposal-section-title">
              <Banknote className="w-6 h-6 mr-2 text-indigo" />
              СТОИМОСТЬ УСЛУГ
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8">
              <div className="price-container flex-1 text-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-xl mb-2 text-white/80">Внедрение</p>
                <p className="text-4xl font-bold text-indigo">50 000</p>
                <p className="text-xl mt-1 text-indigo/80">тенге</p>
              </div>
              <div className="price-container flex-1 text-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-xl mb-2 text-white/80">Подписка</p>
                <p className="text-4xl font-bold text-indigo">25 000</p>
                <p className="text-sm mt-1 text-indigo/80">тенге в месяц</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-indigo hover:bg-indigo-light transition-colors duration-300 rounded-lg font-bold tracking-wide">
                Связаться с нами
              </button>
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
