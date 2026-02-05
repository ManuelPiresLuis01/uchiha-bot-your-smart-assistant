import { Bot, Brain, Gauge, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Respostas IA",
    description: "Receba respostas inteligentes e contextuais com tecnologia de IA avan�ada.",
  },
  {
    icon: Brain,
    title: "Memória por Utilizador",
    description: "O bot lembra as suas últimas 200 mensagens para conversas mais personalizadas e contextuais.",
  },
  {
    icon: Gauge,
    title: "Limites Diários e Controlo",
    description: "Gerencie o uso com limites diários configuráveis e controlo de taxa para uma experiência consistente.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard de Métricas",
    description: "Acompanhe o uso, visualize estatísticas e monitore os limites num painel intuitivo.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 hero-gradient opacity-50 rotate-180" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Recursos</span>
          <h2 className="heading-2 mt-4 mb-6">
            Tudo que precisa para{" "}
            <span className="text-gradient">automatizar conversas</span>
          </h2>
          <p className="body-base">
            Funcionalidades poderosas para transformar a forma como você interage no WhatsApp.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="body-base">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
