import { Code2 } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="font-display font-semibold text-base sm:text-lg text-foreground">Карим</span>
            </a>
            <ThemeToggle />
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Портфолио
            </a>
            <a href="#websites" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Сайты
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <Button size="sm" className="hidden sm:inline-flex">Связаться</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
