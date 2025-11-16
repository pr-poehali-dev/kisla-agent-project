import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.observe-animation').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-heading font-bold gradient-text animate-fade-in">
            Современные решения для вашего бизнеса
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Профессиональные услуги высочайшего качества с индивидуальным подходом к каждому клиенту
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
              Подробнее
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section id="advantages" className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 gradient-text observe-animation">
            Наши преимущества
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Zap', title: 'Быстро', desc: 'Оперативное выполнение задач в кратчайшие сроки' },
              { icon: 'Shield', title: 'Надежно', desc: 'Гарантия качества и безопасности всех процессов' },
              { icon: 'TrendingUp', title: 'Эффективно', desc: 'Максимальный результат при оптимальных затратах' },
              { icon: 'Users', title: 'Индивидуально', desc: 'Персональный подход к каждому проекту' }
            ].map((item, idx) => (
              <Card key={idx} className="observe-animation bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all hover:scale-105" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 gradient-text observe-animation">
            Услуги
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Laptop', title: 'Веб-разработка', desc: 'Создание современных сайтов и веб-приложений с адаптивным дизайном' },
              { icon: 'Smartphone', title: 'Мобильные приложения', desc: 'Разработка кроссплатформенных приложений для iOS и Android' },
              { icon: 'Settings', title: 'Автоматизация', desc: 'Внедрение систем автоматизации бизнес-процессов' }
            ].map((service, idx) => (
              <Card key={idx} className="observe-animation bg-gradient-to-br from-card to-muted/20 border-accent/30 hover:border-accent transition-all group" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <Button variant="outline" className="border-accent/50 hover:bg-accent/10">
                    Узнать больше <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 gradient-text observe-animation">
            Кейсы
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'E-commerce платформа', metric: '+300%', desc: 'рост продаж' },
              { title: 'Корпоративный портал', metric: '50%', desc: 'снижение затрат' },
              { title: 'Мобильное приложение', metric: '100K+', desc: 'активных пользователей' },
              { title: 'CRM система', metric: '2x', desc: 'увеличение конверсии' }
            ].map((caseItem, idx) => (
              <Card key={idx} className="observe-animation bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 hover:scale-105 transition-transform" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">{caseItem.title}</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold gradient-text">{caseItem.metric}</span>
                  </div>
                  <p className="text-lg text-muted-foreground">{caseItem.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 gradient-text observe-animation">
            Отзывы
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Алексей Иванов', role: 'CEO, Tech Startup', text: 'Отличная работа! Проект выполнен точно в срок, качество на высшем уровне.' },
              { name: 'Мария Петрова', role: 'Директор по маркетингу', text: 'Профессиональный подход и внимание к деталям. Рекомендую!' },
              { name: 'Сергей Смирнов', role: 'Владелец бизнеса', text: 'Превзошли все ожидания. Продажи выросли в разы после запуска.' }
            ].map((review, idx) => (
              <Card key={idx} className="observe-animation bg-card border-secondary/30" style={{ animationDelay: `${idx * 0.12}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 gradient-text observe-animation">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12 observe-animation">
            Оставьте заявку и мы свяжемся с вами в течение 24 часов
          </p>
          
          <Card className="observe-animation bg-card/80 backdrop-blur border-primary/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Icon name="Send" size={20} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-muted-foreground">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}
