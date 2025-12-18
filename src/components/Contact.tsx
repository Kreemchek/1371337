import { Send, MessageCircle, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(175_80%_50%/0.08),transparent_50%)]" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm mb-4 sm:mb-6">
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Давайте работать вместе
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Есть <span className="text-gradient">проект?</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 px-4">
            Готовы воплотить ваши идеи в жизнь? Свяжитесь со мной, и обсудим ваш следующий digital-проект.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="glow gap-2 w-full sm:w-auto">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Отправить Email
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/50">
            <p className="text-xs sm:text-sm text-muted-foreground px-4">
              NDA по запросу • Быстрый ответ гарантирован
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
