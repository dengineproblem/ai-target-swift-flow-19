
"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Ребята делают то, что обещают — уже одно это круто. Раньше таргетолог говорил 'завтра исправлю', а потом тишина на неделю.",
    by: "Гулсанам, владелица интернет-магазина"
  },
  {
    tempId: 1,
    testimonial: "Мне нравится, что не нужно каждый день спрашивать 'как дела с рекламой?'. Система сама все отслеживает, а я просто получаю результаты.",
    by: "Маржан, руководитель отдела маркетинга"
  },
  {
    tempId: 2,
    testimonial: "Честно говоря, сначала не верила что ИИ заменит человека. Но когда увидела, что заявок стало в два раза больше — поверила быстро.",
    by: "Айгерим, директор салона красоты"
  },
  {
    tempId: 3,
    testimonial: "Мой прежний таргетолог брал 200 тысяч и постоянно оправдывался почему результатов нет. Тут хотя бы понятно что происходит с деньгами.",
    by: "Данияр, владелец фитнес-клуба"
  },
  {
    tempId: 4,
    testimonial: "В телеграм-боте вся статистика под рукой. Не нужно ждать отчеты или выпрашивать данные — открыл и все видишь.",
    by: "Алма, основательница курсов английского"
  },
  {
    tempId: 5,
    testimonial: "Раньше таргетолог мог неделю 'оптимизировать' рекламу и потратить весь бюджет впустую. Сейчас хотя бы вижу куда идут деньги.",
    by: "Ержан, владелец строительной компании"
  },
  {
    tempId: 6,
    testimonial: "Команда нормальная, отвечают быстро. А главное — не кормят завтраками как обычные таргетологи.",
    by: "Жанна, директор медицинского центра"
  },
  {
    tempId: 7,
    testimonial: "Забыл что такое 'креатив готов, завтра запущу' и потом неделю ждешь. Тут отправил материал — на следующий день уже показы идут.",
    by: "Асхат, владелец ресторана"
  },
  {
    tempId: 8,
    testimonial: "Мне как новичку в рекламе было сложно разобраться сначала. Но ребята все объяснили, не бросили разбираться самой.",
    by: "Камила, руководитель онлайн-школы"
  },
  {
    tempId: 9,
    testimonial: "Попробовал из любопытства, думал очередной развод. Оказалось реально работает — клиентов прибавилось заметно.",
    by: "Нурлан, владелец автосалона"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium mb-4",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
