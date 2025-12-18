import { ArrowDown, Code2, Globe, Bot } from "lucide-react";
import { Button } from "./ui/button";
import avatarImage from "@/assets/avatar.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(175_80%_50%/0.08),transparent_50%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center pt-20 sm:pt-24">
          {/* Avatar */}
          <div className="relative mb-6 sm:mb-8 inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full blur-md opacity-75 animate-pulse-glow" />
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 glow">
              <img 
                src={avatarImage} 
                alt="Карим - веб-разработчик" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating icons */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm animate-float">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm animate-float animation-delay-200">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm animate-float animation-delay-400">
              <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up text-foreground">
            Привет, я <span className="text-gradient">Карим</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4 animate-slide-up animation-delay-200">
            Создаю сайты под ключ, корпоративные лендинги, информационные веб-сервисы 
            и Telegram-решения любой сложности. Ваша идея — мой код.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-slide-up animation-delay-400">
            <Button size="lg" className="glow w-full sm:w-auto">
              Смотреть работы
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Связаться со мной
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 animate-slide-up animation-delay-600">
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">Узнать больше</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
