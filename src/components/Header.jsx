import { Menu, X } from "lucide-react";
import { useState } from "react";
import { config, getWhatsAppUrl } from "../lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite-border/80 bg-graphite-card/90 backdrop-blur-md shadow-sm shadow-accent/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#inicio"
          className="group flex shrink-0 items-center"
          aria-label={`${config.name} - Página inicial`}
        >
          <span className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-accent-shine/70 bg-white shadow-sm ring-2 ring-white/80 sm:h-12 sm:w-12">
            <img
              src={config.logo}
              alt={config.name}
              className="logo-header h-full w-full object-cover"
              width={1030}
              height={1080}
            />
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {config.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-95"
          >
            {config.hero.ctaPrimary}
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-text-muted transition-colors hover:bg-graphite-light hover:text-accent md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-graphite-border bg-graphite-light px-4 py-4 md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-3">
            {config.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-text-muted transition-colors hover:bg-graphite-card hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-95"
                onClick={() => setOpen(false)}
              >
                {config.hero.ctaPrimary}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
