
import React from 'react';
import { FocusCards } from './focus-cards';
import { Card, CardContent } from './card';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

const ClientReports = () => {
  const cards = [
    {
      title: "ИТ-таргетолога - CPL 0,66$ (+68%)",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Автоматизация - CPL 1,18$ (+24%)",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Электробайки - CPL 1,26$ (+91%)",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Новое объявление - CPL 0,84$ (+134%)",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Весь Казахстан - CPL 1,05$ (+78%)",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Кампания 2804 - CPL 0,85$ (+156%)",
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Результаты наших клиентов
          </h2>
          <p className="text-white/60 text-lg">
            Реальные показатели эффективности от бизнесов по всему Казахстану
          </p>
        </div>
      </div>

      <div className="py-16">
        <FocusCards cards={cards} />
      </div>
    </section>
  );
};

export default ClientReports;
