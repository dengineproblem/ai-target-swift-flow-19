
import React from 'react';
import { FocusCards } from './focus-cards';
import { Card, CardContent } from './card';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

const ClientReports = () => {
  const cards = [
    {
      title: "Ниша: Маркетинг",
      src: "/lovable-uploads/c6d0ba6b-e764-44b4-9826-e32e933eb453.png",
    },
    {
      title: "Ниша: Пенсионный аннуитет",
      src: "/lovable-uploads/ad2c6826-7611-4ba7-85fd-fa1561c3d479.png",
    },
    {
      title: "Ниша: Электробайки",
      src: "/lovable-uploads/51069eca-38b2-48dc-9645-1ecd37d6b8c7.png",
    },
    {
      title: "Ниша: Психология",
      src: "/lovable-uploads/e694d9f4-a2c7-4f99-8900-1cf08f7573a7.png",
    },
    {
      title: "Ниша: Организация свадеб",
      src: "/lovable-uploads/6494fbcc-fe16-4e01-9ef1-c43bd145fbe7.png",
    },
    {
      title: "Ниша: Фермерские продукты",
      src: "/lovable-uploads/6343d8c7-986f-438f-919d-5cdf52c40903.png",
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
