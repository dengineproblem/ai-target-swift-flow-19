
"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://shadcnblocks.com/images/block/logos/react.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-9",
      description: "Client Logo 9",
      image: "/lovable-uploads/11351c25-f18f-456f-9310-7a086c73f356.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-10",
      description: "Client Logo 10", 
      image: "/lovable-uploads/4157d564-2f4a-4371-b63c-5b4372c3e01a.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-11",
      description: "Client Logo 11",
      image: "/lovable-uploads/61a2d3f1-423f-44f0-b7c2-a0bd07ed3f6e.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-12",
      description: "Client Logo 12",
      image: "/lovable-uploads/c4c7ab77-aef1-46dc-899e-4ee7daf44ae3.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-13",
      description: "Client Logo 13",
      image: "/lovable-uploads/7354785b-7d72-4bcd-9b3e-b8bb2eaedfeb.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-14",
      description: "Client Logo 14",
      image: "/lovable-uploads/dfcb9cbf-dece-4dc1-a18d-754f4cd3a046.png",
      className: "h-12 w-auto",
    },
  ],
}: Logos3Props) => {
  // Дублируем логотипы для бесконечной прокрутки
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ 
              loop: true,
              align: "start",
            }}
            plugins={[
              AutoScroll({ 
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              })
            ]}
          >
            <CarouselContent className="ml-0">
              {duplicatedLogos.map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
