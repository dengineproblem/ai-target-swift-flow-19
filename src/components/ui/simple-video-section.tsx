
'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface SimpleVideoSectionProps {
  title: string;
  description: string;
  videoSrc: string;
}

const SimpleVideoSection = ({ title, description, videoSrc }: SimpleVideoSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('embed')) {
      return url + (url.includes('?') ? '&' : '?') + 'autoplay=1&mute=1&loop=1&controls=1&showinfo=0&rel=0&modestbranding=1';
    }
    return url.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&loop=1&controls=1&showinfo=0&rel=0&modestbranding=1&playlist=' + url.split('v=')[1];
  };

  return (
    <section ref={sectionRef} className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src={getYouTubeEmbedUrl(videoSrc)}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleVideoSection;
