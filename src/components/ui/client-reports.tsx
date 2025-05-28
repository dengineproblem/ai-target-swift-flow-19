import React from 'react';
import { GridMotion } from './grid-motion';
import { Card, CardContent } from './card';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

const ClientReports = () => {
  const reportItems = [
    <ReportCard 
      key="report-1"
      clientName="ИТ-таргетолога"
      metric="CPL"
      value="0,66$"
      growth="+68%"
      period="9 лидов"
      icon={Target}
    />,
    "/lovable-uploads/1adcd8dc-4caf-4f71-8b26-e8cd64b5d0e4.png",
    <ReportCard 
      key="report-2"
      clientName="Автоматизация"
      metric="CPL"
      value="1,18$"
      growth="+24%"
      period="5 лидов"
      icon={TrendingUp}
    />,
    "/lovable-uploads/f4b64b71-c654-464f-a7b7-f4af9b13d57f.png",
    <ReportCard 
      key="report-3"
      clientName="Электробайки"
      metric="CPL"
      value="1,26$"
      growth="+91%"
      period="7 лидов"
      icon={DollarSign}
    />,
    "/lovable-uploads/b5b41424-7acd-4628-8aec-d4a9ab8cb421.png",
    <ReportCard 
      key="report-4"
      clientName="Новое объявление"
      metric="CPL"
      value="0,84$"
      growth="+134%"
      period="16 лидов"
      icon={Users}
    />,
    "/lovable-uploads/19cdf893-6b37-4754-bb6e-eacf12ecb67f.png",
    <ReportCard 
      key="report-5"
      clientName="Весь Казахстан"
      metric="CPL"
      value="1,05$"
      growth="+78%"
      period="5 лидов"
      icon={Target}
    />,
    "/lovable-uploads/62c31b23-cec3-462b-ba5d-d51e38a5fddc.png",
    <ReportCard 
      key="report-6"
      clientName="Кампания 2804"
      metric="CPL"
      value="0,85$"
      growth="+156%"
      period="3 лида"
      icon={TrendingUp}
    />,
    "/lovable-uploads/df47e3ad-b2e3-44a3-bbb4-d6e3c68b8fd9.png",
    <ReportCard 
      key="report-7"
      clientName="EcoChickenAI"
      metric="CPL"
      value="1,72$"
      growth="+89%"
      period="7 лидов"
      icon={DollarSign}
    />,
    <ReportCard 
      key="report-8"
      clientName="Вовлеченность"
      metric="CPL"
      value="0,50$"
      growth="+245%"
      period="19 лидов"
      icon={Users}
    />,
    <ReportCard 
      key="report-9"
      clientName="EP/Сообщвотсап"
      metric="CPL"
      value="0,76$"
      growth="+187%"
      period="43 лида"
      icon={Target}
    />,
    <ReportCard 
      key="report-10"
      clientName="НГ стол"
      metric="CPL"
      value="1,91$"
      growth="+67%"
      period="18 лидов"
      icon={TrendingUp}
    />,
    <ReportCard 
      key="report-11"
      clientName="Общая сводка"
      metric="CPL"
      value="1,20$"
      growth="+124%"
      period="73 лида"
      icon={DollarSign}
    />,
    <ReportCard 
      key="report-12"
      clientName="Астана/24.10.24"
      metric="CPL"
      value="0,79$"
      growth="+95%"
      period="Средний CPL"
      icon={Users}
    />,
    <ReportCard 
      key="report-13"
      clientName="Затраты 22,25$"
      metric="Лиды"
      value="23"
      growth="+156%"
      period="за день"
      icon={Target}
    />,
    <ReportCard 
      key="report-14"
      clientName="Бюджет 87,82$"
      metric="Лиды"
      value="73"
      growth="+198%"
      period="за неделю"
      icon={DollarSign}
    />,
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

      <div className="h-screen relative">
        <GridMotion 
          items={reportItems}
          gradientColor="rgba(30, 58, 138, 0.1)"
          className="relative z-10"
        />
      </div>
    </section>
  );
};

interface ReportCardProps {
  clientName: string;
  metric: string;
  value: string;
  growth: string;
  period: string;
  icon: React.ElementType;
}

const ReportCard = ({ clientName, metric, value, growth, period, icon: Icon }: ReportCardProps) => {
  const isPositive = growth.startsWith('+');
  const isNegative = growth.startsWith('-');
  
  return (
    <Card className="bg-black/80 border-white/10 backdrop-blur-sm">
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <Icon className="w-4 h-4 text-indigo" />
          <span className={`text-xs font-bold ${
            isPositive ? 'text-green-400' : 
            isNegative ? 'text-red-400' : 
            'text-white/60'
          }`}>
            {growth}
          </span>
        </div>
        
        <h3 className="text-white text-xs font-medium mb-1 truncate">
          {clientName}
        </h3>
        
        <div className="space-y-1">
          <p className="text-white/60 text-xs">{metric}</p>
          <p className="text-white text-sm font-bold">{value}</p>
          <p className="text-white/40 text-xs">{period}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientReports;
