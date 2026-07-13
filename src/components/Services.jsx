import { ArrowUpRight } from "lucide-react";
import { config, getWhatsAppUrl } from "../lib/config";
import { resolveIcon } from "../lib/icons";

function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-graphite-border bg-graphite-card transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-black/20">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.alt} - ${config.name}`}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {service.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug sm:text-xl">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted sm:text-base">
          {service.description}
        </p>
        <a
          href={getWhatsAppUrl(config.whatsapp.quoteMessage(service.title))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {config.services.serviceCta}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

function DetailingCard({ service }) {
  const Icon = resolveIcon(service.icon);

  return (
    <article className="group flex items-start gap-4 rounded-xl border border-graphite-border bg-graphite-card p-4 transition-colors hover:border-accent/30 sm:p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
        <Icon size={22} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold leading-snug sm:text-base">{service.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export default function Services() {
  const { services } = config;
  const { detailing } = services;

  return (
    <section
      id="servicos"
      className="border-t border-graphite-border py-20 sm:py-28"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="services-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            {services.sectionTitle}{" "}
            <span className="text-accent">{services.sectionTitleAccent}</span>
          </h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">{services.introText}</p>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
            {services.mainSectionTitle}{" "}
            <span className="text-accent">{services.mainSectionTitleAccent}</span>
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.main.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        {detailing.items.length > 0 && (
          <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                {detailing.title}{" "}
                <span className="text-accent">{detailing.titleAccent}</span>
              </h3>
              <p className="mt-3 text-sm text-text-muted sm:text-base">{detailing.subtitle}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {detailing.items.map((service) => (
                <DetailingCard key={service.title} service={service} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-accent/40 active:scale-95"
              >
                {config.services.serviceCta}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
