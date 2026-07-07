import { Instagram, MapPin, Phone } from "lucide-react";
import {
  config,
  getFullAddress,
  getWhatsAppUrl,
} from "../lib/config";

const quickLinks = [
  { href: "#inicio", label: "Início" },
  ...config.nav,
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { nameParts, footer, social } = config;

  return (
    <footer className="border-t border-graphite-border bg-graphite-light">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold">
              {nameParts.first}{" "}
              <span className="text-accent">{nameParts.highlight}</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
              {footer.tagline}
            </p>

            <address className="mt-5 space-y-2 not-italic">
              <p className="flex items-start gap-2 text-sm text-text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {getFullAddress()}
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Phone size={16} className="shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors hover:text-accent"
                >
                  {config.phone.display}
                </a>
              </p>
            </address>

            {social.instagram?.url && (
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-graphite-border bg-graphite-card px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:text-accent active:scale-95"
                aria-label={`Seguir ${config.name} no Instagram`}
              >
                <Instagram size={18} aria-hidden="true" />
                {social.instagram.handle}
              </a>
            )}
          </div>

          <nav aria-label="Links rápidos">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Links Rápidos
            </h2>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Serviços
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {config.services.footerList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-graphite-border pt-8 sm:flex-row">
          <p className="text-center text-sm text-text-muted sm:text-left">
            &copy; {year} {config.name}. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-text-muted/70 sm:text-right">{footer.legalLine}</p>
        </div>
      </div>
    </footer>
  );
}
