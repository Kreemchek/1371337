import { Globe, Layout, Database, Bot, Smartphone, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Сайты под ключ",
    description: "Полноценные веб-решения от концепции до запуска. Полностью функциональные, оптимизированные и готовые для вашего бизнеса.",
  },
  {
    icon: Layout,
    title: "Корпоративные лендинги",
    description: "Высококонверсионные посадочные страницы для презентации вашего бренда и достижения результатов.",
  },
  {
    icon: Database,
    title: "Веб-сервисы",
    description: "Информационные порталы и веб-приложения, разработанные под ваши конкретные требования.",
  },
  {
    icon: Bot,
    title: "Telegram боты",
    description: "Кастомные Telegram боты любой сложности — от простых автоответчиков до продвинутых AI-решений.",
  },
  {
    icon: Smartphone,
    title: "Приложения для Telegram",
    description: "Полнофункциональные приложения для Telegram с бесшовной интеграцией и современным UX.",
  },
  {
    icon: Shield,
    title: "Соблюдение NDA",
    description: "Ваши идеи и данные защищены. Я уважаю конфиденциальность и подписываю NDA для всех проектов.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(175_80%_50%/0.05),transparent_50%)]" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Что я <span className="text-gradient">создаю</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            От сайтов до Telegram-экосистем — комплексные digital-решения для современного бизнеса
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(175_80%_50%/0.1)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
