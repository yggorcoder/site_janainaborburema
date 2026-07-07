import { MapPin } from "lucide-react";
import { config, getFullAddress, getGoogleMapsEmbedUrl, getGoogleMapsUrl } from "../lib/config";
import { resolveIcon } from "../lib/icons";

export default function About() {
  const { about } = config;

  return (
    <section
      id="sobre"
      className="border-t border-graphite-border bg-graphite-light py-20 sm:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="about-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sobre o <span className="text-accent">{config.name}</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">{about.text}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.highlights.map((item) => {
            const Icon = resolveIcon(item.icon);
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-graphite-border bg-graphite-card p-6 transition-colors hover:border-accent/30 sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Nossa <span className="text-accent">Localização</span>
            </h3>
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 text-sm text-text-muted transition-colors hover:text-accent sm:text-base"
            >
              <MapPin size={18} aria-hidden="true" />
              {getFullAddress()}
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-graphite-border shadow-xl shadow-black/20">
            <iframe
              src={getGoogleMapsEmbedUrl()}
              title={`Mapa — ${config.name} em ${config.location.city}, ${config.location.state}`}
              className="h-72 w-full sm:h-96 lg:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
