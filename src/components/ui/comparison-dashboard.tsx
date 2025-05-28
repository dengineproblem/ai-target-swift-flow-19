
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { User, Bot, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const data = [
  {
    category: 'Живой таргетолог',
    reklamaBudget: 250,
    targetologCost: 250,
    totalCost: 500,
    leads: 100,
    icon: User,
    color: '#6B7280'
  },
  {
    category: 'ИИ-таргетолог',
    reklamaBudget: 475,
    targetologCost: 25,
    totalCost: 500,
    leads: 200,
    icon: Bot,
    color: '#1E3A8A'
  }
];

const MetricCard = ({ title, value, suffix, icon: Icon, color }: {
  title: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
  color: string;
}) => (
  <Card className="bg-black/60 border-white/10">
    <CardContent className="p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/60 text-xs">{title}</p>
          <p className="text-white text-base font-bold">
            {value} {suffix}
          </p>
        </div>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
    </CardContent>
  </Card>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-black/90 border border-white/20 rounded-lg p-3 text-white">
        <p className="font-medium mb-2">{label}</p>
        <div className="space-y-1 text-sm">
          <p>Рекламный бюджет: {data.reklamaBudget} тыс. ₸</p>
          <p>Оплата специалисту: {data.targetologCost} тыс. ₸</p>
          <p className="font-medium">Общие затраты: {data.totalCost} тыс. ₸</p>
          <p className="text-green-400">Заявки: {data.leads}</p>
        </div>
      </div>
    );
  }
  return null;
};

export const ComparisonDashboard = () => {
  return (
    <section className="relative bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Выгода от использования ИИ-таргетолога
          </h2>
          <p className="text-white/60 text-lg">
            Сравнение эффективности при одинаковом бюджете в 500 тыс. ₸
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {data.map((item, index) => (
            <Card key={index} className="bg-black/60 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  <h3 className="text-lg font-bold">{item.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <MetricCard
                    title="Рекламный бюджет"
                    value={item.reklamaBudget}
                    suffix="тыс. ₸"
                    icon={TrendingUp}
                    color={item.color}
                  />
                  <MetricCard
                    title="Оплата специалисту"
                    value={item.targetologCost}
                    suffix="тыс. ₸"
                    icon={DollarSign}
                    color={item.color}
                  />
                </div>
                
                <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-white/20">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white/60 text-xs">Количество заявок</p>
                        <p className="text-xl font-bold text-white">{item.leads}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/60 text-xs">Общие затраты</p>
                        <p className="text-lg font-bold text-white">{item.totalCost} тыс. ₸</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart */}
        <Card className="bg-black/60 border-white/10 mb-8">
          <CardContent className="p-4">
            <h3 className="text-lg font-bold mb-4 text-center">Сравнение результатов</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="category" 
                    stroke="#9CA3AF"
                    fontSize={12}
                  />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="leads" name="Заявки" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10">
            <h4 className="font-bold text-base mb-2">В 2 раза больше заявок</h4>
            <p className="text-white/60 text-sm">При том же бюджете получаете в 2 раза больше результата</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10">
            <h4 className="font-bold text-base mb-2">Экономия 225 тыс. ₸</h4>
            <p className="text-white/60 text-sm">Больше денег остается на рекламу вместо оплаты специалисту</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10">
            <h4 className="font-bold text-base mb-2">Нет человеческого фактора</h4>
            <p className="text-white/60 text-sm">Не забывает присылать отчеты и проверяет рекламный кабинет каждый день автоматически</p>
          </div>
        </div>
      </div>
    </section>
  );
};
