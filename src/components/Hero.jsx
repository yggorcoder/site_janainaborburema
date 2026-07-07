import { ArrowRight, Sparkles } from "lucide-react";
import { config, getWhatsAppUrl } from "../lib/config";

export default function Hero() {
  const { hero, location } = config;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden="true"
        role="img"
        aria-label={`${hero.imageAlt} - ${config.name}`}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(42, 24, 20, 0.82) 0%, rgba(54, 31, 25, 0.52) 55%, rgba(42, 24, 20, 0.22) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-shine sm:text-sm">
            <Sparkles size={14} aria-hidden="true" />
            {location.badge}
          </span>

          <h1 id="hero-title" className="flex max-w-xl flex-col gap-3 drop-shadow-lg">
            <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {hero.title}
            </span>
            {(hero.titleGradient || hero.titleRest) && (
              <span className="text-balance text-lg font-semibold leading-snug text-white sm:text-xl md:text-2xl">
                {hero.titleGradient && (
                  <span className="text-accent-shine">{hero.titleGradient}</span>
                )}{" "}
                {hero.titleRest}
              </span>
            )}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/95 drop-shadow-md sm:text-base md:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-accent/40 active:scale-95"
            >
              {hero.ctaPrimary}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-accent-shine hover:bg-white/25 active:scale-95"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
