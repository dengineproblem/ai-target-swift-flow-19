
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

export const ContactFormModal = ({ isOpen, onClose, selectedPlan }: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Отправка формы:', { ...formData, plan: selectedPlan });

    // Симуляция отправки данных
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Наш менеджер свяжется с вами в ближайшее время.",
      });
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400"
              placeholder="example@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white">
              Компания
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400"
              placeholder="Название компании"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Комментарий
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400 min-h-[80px]"
              placeholder="Расскажите о вашем бизнесе..."
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
