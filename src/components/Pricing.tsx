import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "244955758961";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero começar a usar o Uchiha Bot!`;

const plans = [
  {
    name: "Grátis",
    price: "0",
    description: "Perfeito para experimentar",
    features: [
      "30 mensagens por dia",
      "Memória limitada",
      "Suporte básico",
      "Acesso ao dashboard",
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    name: "Pro",
    price: "4.999",
    description: "Para uso pessoal intensivo",
    features: [
      "1.000 mensagens por dia",
      "Memória completa (200 msgs)",
      "Suporte prioritário",
      "Dashboard avançado",
      "Sem anúncios",
    ],
    cta: "Assinar Pro",
    popular: true,
  },
  {
    name: "Business",
    price: "14.999",
    description: "Para equipas e empresas",
    features: [
      "10.000 mensagens por dia",
      "Memória completa ilimitada",
      "Suporte com SLA",
      "Multi-agentes",
      "API personalizada",
      "Relatórios detalhados",
    ],
    cta: "Contactar Vendas",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Preços</span>
          <h2 className="heading-2 mt-4 mb-6">
            Planos simples e{" "}
            <span className="text-gradient">transparentes</span>
          </h2>
          <p className="body-base">
            Utilizadores gratuitos estão limitados a 30 respostas por dia. 
            Planos pagos desbloqueiam limites mais altos.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] animate-fade-up ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-sm"
                  : "glass"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="heading-3 mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">Kz</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  {plan.popular && <MessageCircle className="w-4 h-4" />}
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
