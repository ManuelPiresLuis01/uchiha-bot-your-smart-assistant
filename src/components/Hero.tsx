import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "244955758961";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero começar a usar o Uchiha Bot!`;

export const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Potenciado por IA</span>
          </div>

          {/* Main heading */}
          <h1 className="heading-1 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Uchiha Bot – </span>
            <span className="text-gradient">seu assistente IA</span>
            <br />
            <span className="text-foreground">no WhatsApp</span>
          </h1>

          {/* Subheading */}
          <p className="body-large max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Envie mensagens e receba respostas inteligentes instantaneamente no WhatsApp. 
            Automatize conversas com IA e gerencie suas mensagens diárias com eficiência.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Começar Grátis
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToPricing}>
              Ver Preços
              <ChevronDown className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">30</span>
              <span className="text-sm">mensagens/dia<br />grátis</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">200</span>
              <span className="text-sm">mensagens<br />em memória</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">24/7</span>
              <span className="text-sm">disponível<br />sempre</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};
