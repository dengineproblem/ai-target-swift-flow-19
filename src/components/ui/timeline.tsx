"use client";

import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
export const Timeline = ({
  data
}: {
  data: TimelineEntry[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"]
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  return <div className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
          Как работает ИИ-таргетолог
        </h2>
        <p className="text-white/70 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Пошаговый процесс работы нашей системы искусственного интеллекта.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10 py-[70px]">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 border border-purple-400/40 dark:border-purple-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 font-bold text-white md:text-3xl">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>)}
        
        {/* Timeline line with animated gradient fill */}
        <div style={{
        height: height + "px"
      }} className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] rounded-xl">
          <motion.div style={{
          height: heightTransform,
          opacity: opacityTransform
        }} className="relative w-full rounded-xl overflow-hidden">
            {/* Main animated gradient fill */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#dd7bbb] via-[#d79f1e] via-[#5a922c] to-[#4c7894] animate-pulse" />
            
            {/* Animated gradient overlay with conic gradient effect */}
            <div className="absolute inset-0 opacity-80 animate-pulse" style={{
            background: `
                  radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                  radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                  radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                  radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%)
                `
          }} />
            
            {/* Bottom glow effect */}
            <div className="absolute bottom-[-20%] left-1/2 z-0 h-1/5 w-[200%] -translate-x-1/2 bg-gradient-to-r from-[#dd7bbb] via-[#d79f1e] via-[#5a922c] to-[#4c7894] [filter:blur(8px)] animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>;
};