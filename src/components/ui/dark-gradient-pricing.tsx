
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactFormModal } from "@/components/ui/contact-form-modal"
import { useState } from "react"

interface BenefitProps {
  text: string
  checked: boolean
  highlighted?: boolean
}

const Benefit = ({ text, checked, highlighted }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
          <Check className="size-3" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <X className="size-3" />
        </span>
      )}
      <span className={cn(
        "text-sm",
        highlighted ? "text-white font-medium" : "text-zinc-300"
      )}>{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean; highlighted?: boolean }>
  className?: string
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
}: PricingCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ filter: "blur(2px)" }}
        whileInView={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
      >
        <Card
          className={cn(
            "relative h-full w-full overflow-hidden",
            "border border-zinc-700 bg-black/90",
            "p-6 flex flex-col",
            className,
          )}
        >
          <div className="flex flex-col items-center border-b pb-6 border-zinc-700">
            <span className="mb-6 inline-block text-zinc-50">
              {tier}
            </span>
            <span className="mb-3 inline-block text-4xl font-medium text-white">
              {price}
            </span>
            <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
              {bestFor}
            </span>
          </div>
          <div className="space-y-4 py-9 flex-grow">
            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
          <button 
            onClick={handleButtonClick}
            className="w-full border border-zinc-600 text-white px-4 py-2 rounded-md transition-all duration-200 hover:scale-105 hover:border-zinc-400 hover:bg-zinc-800/50 mt-auto"
          >
            {CTA}
          </button>
        </Card>
      </motion.div>

      <ContactFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={tier}
      />
    </>
  )
}
