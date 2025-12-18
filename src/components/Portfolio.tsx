import { ExternalLink, Plus, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "X-HUB",
    category: "Веб-сервис",
    image: "/x-hub-screenshot.png",
    url: "https://x-hub.tech/",
  },
  {
    id: 2,
    title: "Steam Bro",
    category: "Веб-сервис",
    image: "/steam-bro-screenshot.png",
    url: "https://steam-bro.ru/",
  },
  {
    id: 3,
    title: "1CASE Bot",
    category: "Telegram бот",
    image: "/onecase-bot-screenshot.png",
    url: "https://t.me/onecase_play_bot",
  },
  {
    id: 4,
    title: "Это место может быть вашим",
    category: "Ваш проект",
    image: null,
    isCTA: true,
    url: "#contact",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Избранные <span className="text-gradient">проекты</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Подборка моих недавних работ на различных платформах и технологиях
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={item.url || "#"}
              target={item.isCTA ? undefined : item.url ? "_blank" : undefined}
              rel={item.isCTA ? undefined : item.url ? "noopener noreferrer" : undefined}
              className={`group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 block ${
                item.isCTA
                  ? "bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_40px_hsl(175_80%_50%/0.3)]"
                  : "border border-border/50 bg-card hover:border-primary/50"
              }`}
            >
              {/* Project image or placeholder */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className={`absolute inset-0 flex items-center justify-center ${
                  item.isCTA
                    ? "bg-gradient-to-br from-primary/10 to-primary/5"
                    : "bg-gradient-to-br from-muted to-card"
                }`}>
                  <div className="text-center px-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 ${
                      item.isCTA
                        ? "bg-primary/30"
                        : "bg-primary/10"
                    }`}>
                      {item.isCTA ? (
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      ) : (
                        <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-primary/50" />
                      )}
                    </div>
                    <p className={`text-xs sm:text-sm ${
                      item.isCTA
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}>
                      {item.isCTA ? "Создадим ваш проект" : "Добавить изображение"}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              {!item.isCTA && (
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              
              {/* Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 transition-all duration-300 ${
                item.isCTA
                  ? "opacity-100 translate-y-0"
                  : "translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
              }`}>
                <span className={`text-xs font-medium uppercase tracking-wider ${
                  item.isCTA
                    ? "text-primary"
                    : "text-primary"
                }`}>
                  {item.category}
                </span>
                <h3 className={`font-display text-lg sm:text-xl font-semibold mt-1 ${
                  item.isCTA
                    ? "text-primary"
                    : "text-foreground"
                }`}>
                  {item.title}
                </h3>
                {!item.isCTA && (
                  <div className="mt-2 sm:mt-3 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer">
                    Смотреть проект <ExternalLink className="w-4 h-4" />
                  </div>
                )}
                {item.isCTA && (
                  <div className="mt-2 sm:mt-3 inline-flex items-center gap-2 text-sm text-primary font-medium">
                    Обсудить проект →
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
