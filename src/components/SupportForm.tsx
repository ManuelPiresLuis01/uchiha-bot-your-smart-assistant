import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone } from "lucide-react";

export const SupportForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contacto em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="support" className="py-24 relative">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Suporte</span>
            <h2 className="heading-2 mt-4 mb-6">
              Precisa de{" "}
              <span className="text-gradient">ajuda?</span>
            </h2>
            <p className="body-base">
              Entre em contacto connosco e responderemos o mais breve possível.
            </p>
          </div>

          {/* Contact info */}
          <div className="glass rounded-2xl p-6 mb-8 flex items-center justify-center gap-4">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">+244 929 004 469</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Como podemos ajudar?"
                rows={5}
                required
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
