import { ExternalLink, Globe, Sparkles } from "lucide-react";

const websites = [
  { name: "Хотите свой сайт?", description: "Обсудим ваш проект и создадим решение", type: "Ваш проект", isCTA: true, url: "#contact" },
  { name: "gevorgfurs.ru", description: "Интернет-магазин меховых изделий премиум-класса", type: "Под ключ", url: "https://gevorgfurs.ru/" },
  { name: "x-hub.tech", description: "Платформа для трансграничных расчётов и агентских операций", type: "Веб-сервис", url: "https://x-hub.tech/" },
  { name: "maksimovkarim.ru", description: "Сайт эксперта по маркетплейсам Wildberries и Ozon", type: "Под ключ", url: "https://maksimovkarim.ru/" },
  { name: "Это место может быть вашим", description: "Создадим сайт для вашего проекта", type: "Ваш проект", isCTA: true, url: "#contact" },
  { name: "sumiagro.ru", description: "Корпоративный сайт производителя средств защиты растений", type: "Под ключ", url: "https://sumiagro.ru/" },
];

const WebsitesList = () => {
  return (
    <section id="websites" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(175_80%_50%/0.03),transparent_50%)]" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Созданные <span className="text-gradient">сайты</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Растущий список успешных проектов, переданных довольным клиентам
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-3 sm:gap-4">
            {websites.map((site, index) => (
              <a
                key={site.name}
                href={site.url || `https://${site.name}`}
                target={site.isCTA ? undefined : "_blank"}
                rel={site.isCTA ? undefined : "noopener noreferrer"}
                className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-lg sm:rounded-xl transition-all duration-300 ${
                  site.isCTA
                    ? "bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_30px_hsl(175_80%_50%/0.2)]"
                    : "bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                    site.isCTA
                      ? "bg-primary/30 group-hover:bg-primary/40"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    {site.isCTA ? (
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    ) : (
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-display font-medium transition-colors truncate ${
                      site.isCTA
                        ? "text-primary group-hover:text-primary/80"
                        : "text-foreground group-hover:text-primary"
                    }`}>
                      {site.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground clamp-2 break-words">
                      {site.description}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-4 pl-11 sm:pl-0">
                  <span className={`text-xs px-2 sm:px-3 py-1 rounded-full ${
                    site.isCTA
                      ? "bg-primary/20 text-primary font-medium"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {site.type}
                  </span>
                  {!site.isCTA && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  )}
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-xs sm:text-sm mt-6 sm:mt-8 px-4">
            + Множество других под NDA
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsitesList;
