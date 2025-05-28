
import React from 'react';
import { GridMotion } from './grid-motion';
import { Card, CardContent } from './card';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

const ClientReports = () => {
  const reportItems = [
    <ReportCard 
      key="report-1"
      clientName="ТОО Astana Digital"
      metric="Заявки"
      value="347"
      growth="+156%"
      period="за месяц"
      icon={Target}
    />,
    <ReportCard 
      key="report-2"
      clientName="Almaty Fitness"
      metric="CTR"
      value="4.8%"
      growth="+89%"
      period="за неделю"
      icon={TrendingUp}
    />,
    <ReportCard 
      key="report-3"
      clientName="Shymkent Auto"
      metric="CPC"
      value="85 ₸"
      growth="-43%"
      period="за месяц"
      icon={DollarSign}
    />,
    <ReportCard 
      key="report-4"
      clientName="Nur-Sultan Beauty"
      metric="Конверсия"
      value="12.3%"
      growth="+67%"
      period="за неделю"
      icon={Users}
    />,
    <ReportCard 
      key="report-5"
      clientName="Караганда Tech"
      metric="ROAS"
      value="3.8x"
      growth="+124%"
      period="за месяц"
      icon={TrendingUp}
    />,
    <ReportCard 
      key="report-6"
      clientName="Atyrau Energy"
      metric="Заявки"
      value="189"
      growth="+78%"
      period="за неделю"
      icon={Target}
    />,
    <ReportCard 
      key="report-7"
      clientName="Pavlodar Мед"
      metric="CPL"
      value="1,240 ₸"
      growth="-31%"
      period="за месяц"
      icon={DollarSign}
    />,
    <ReportCard 
      key="report-8"
      clientName="Актобе Строй"
      metric="Охват"
      value="45.2K"
      growth="+92%"
      period="за неделю"
      icon={Users}
    />,
    <ReportCard 
      key="report-9"
      clientName="Тараз Fashion"
      metric="CTR"
      value="6.1%"
      growth="+134%"
      period="за месяц"
      icon={TrendingUp}
    />,
    <ReportCard 
      key="report-10"
      clientName="Семей IT"
      metric="Конверсия"
      value="8.7%"
      growth="+45%"
      period="за неделю"
      icon={Target}
    />,
    <ReportCard 
      key="report-11"
      clientName="Костанай Авто"
      metric="ROAS"
      value="4.2x"
      growth="+156%"
      period="за месяц"
      icon={DollarSign}
    />,
    <ReportCard 
      key="report-12"
      clientName="Уральск Дом"
      metric="Заявки"
      value="267"
      growth="+89%"
      period="за неделю"
      icon={Users}
    />,
    <ReportCard 
      key="report-13"
      clientName="Петропавловск"
      metric="CPC"
      value="72 ₸"
      growth="-28%"
      period="за месяц"
      icon={DollarSign}
    />,
    <ReportCard 
      key="report-14"
      clientName="Актау Море"
      metric="CTR"
      value="5.4%"
      growth="+112%"
      period="за неделю"
      icon={TrendingUp}
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
