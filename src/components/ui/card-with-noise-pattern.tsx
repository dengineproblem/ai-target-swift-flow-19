
import { cn } from '@/lib/utils'
import { motion } from "framer-motion"
import React from "react"

interface NoisePatternCardProps {
  children: React.ReactNode
  className?: string
  patternClassName?: string
  overlayClassName?: string
}

export const NoisePatternCard = React.forwardRef<HTMLDivElement, NoisePatternCardProps>(({ 
  children, 
  className,
  patternClassName,
  overlayClassName
}, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "border w-full rounded-md overflow-hidden",
        "bg-zinc-950",
        "border-zinc-900",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={cn(
        "size-full bg-repeat bg-[length:500px_500px]",
        "bg-noise-pattern",
        patternClassName
      )}>
        <div className={cn(
          "bg-zinc-950/30",
          overlayClassName
        )}>
          {children}
        </div>
      </div>
    </motion.div>
  )
})

NoisePatternCard.displayName = "NoisePatternCard"

export function NoisePatternCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("text-left p-4 md:p-6", className)} 
      {...props} 
    />
  )
}
