import { useState } from "react";
import { Code2, Menu } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

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

          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href="#contact">Связаться</a>
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Открыть меню">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>

                <div className="mt-6 grid gap-2">
                  <SheetClose asChild>
                    <a
                      href="#services"
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted transition-colors"
                    >
                      Услуги
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#portfolio"
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted transition-colors"
                    >
                      Портфолио
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#websites"
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted transition-colors"
                    >
                      Сайты
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted transition-colors"
                    >
                      Контакты
                    </a>
                  </SheetClose>
                </div>

                <div className="mt-6">
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <a href="#contact" onClick={() => setOpen(false)}>
                        Обсудить проект
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
