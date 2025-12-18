import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WebsitesList from "@/components/WebsitesList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewYearEffects from "@/components/NewYearEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewYearEffects />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WebsitesList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
