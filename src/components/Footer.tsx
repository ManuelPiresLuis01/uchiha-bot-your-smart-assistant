import { MessageCircle } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Recursos", href: "#features" },
    { label: "Preços", href: "#pricing" },
    { label: "Documentação", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
  support: [
    { label: "Suporte", href: "#support" },
    { label: "FAQ", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl">Uchiha Bot</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seu assistente IA no WhatsApp. Automatize conversas com inteligência artificial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Uchiha Bot. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com 💚 em Angola
          </p>
        </div>
      </div>
    </footer>
  );
};
