
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

export const ContactFormModal = ({ isOpen, onClose, selectedPlan }: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Отправка заявки:', { ...formData, plan: selectedPlan });

    // Симуляция отправки данных
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Наш менеджер свяжется с вами в ближайшее время.",
      });
      
      setFormData({
        name: '',
        phone: ''
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black border-zinc-700">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">
            Оставить заявку
          </DialogTitle>
          <p className="text-white/60 text-sm">
            Выбранный тариф: <span className="text-white font-medium">{selectedPlan}</span>
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Имя *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400"
              placeholder="Ваше имя"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Телефон *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400"
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-zinc-600 text-white hover:bg-zinc-800"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-white text-black hover:bg-white/90"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
