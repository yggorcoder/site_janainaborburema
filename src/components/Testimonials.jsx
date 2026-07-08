import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from "lucide-react";
import googleReviews from "../data/google-reviews.json";
import { config } from "../lib/config";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={14}
          className={index < rating ? "fill-amber-400 text-amber-400" : "text-graphite-border"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function formatReviewDate(isoDate) {
  if (!isoDate) return null;

  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}

function TestimonialCard({ item }) {
  return (
    <article className="flex w-full max-w-2xl flex-col rounded-2xl border border-graphite-border bg-graphite-card p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <Quote size={28} className="text-accent/60" aria-hidden="true" />
        {item.source === "google" && (
          <span className="rounded-full border border-graphite-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
            Google
          </span>
        )}
      </div>

      {item.rating && (
        <div className="mt-4">
          <StarRating rating={item.rating} />
        </div>
      )}

      <blockquote className="mt-4 flex-1 whitespace-pre-line text-sm leading-relaxed text-text-muted sm:text-base">
        &ldquo;{item.text}&rdquo;
      </blockquote>

      <div className="mt-6">
        <p className="text-sm font-semibold text-ink">{item.name}</p>
        {item.date && (
          <p className="mt-1 text-xs text-text-muted">{formatReviewDate(item.date)}</p>
        )}
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { testimonials } = config;
  const google = testimonials.google ?? {};

  const rating = googleReviews.rating ?? google.rating ?? null;
  const reviewCount = googleReviews.reviewCount ?? google.reviewCount ?? null;
  const mapsUrl = googleReviews.mapsUrl ?? google.url ?? null;

  const items =
    googleReviews.items?.length > 0 ? googleReviews.items : testimonials.items ?? [];

  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;

  const goTo = (index) => {
    setActiveIndex((index + total) % total);
  };

  const current = items[activeIndex];

  return (
    <section
      id="depoimentos"
      className="border-t border-graphite-border py-16 sm:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="testimonials-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            {testimonials.title}{" "}
            <span className="text-accent">{testimonials.titleAccent}</span>
          </h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">{testimonials.subtitle}</p>

          {rating && reviewCount && (
            <div className="mt-8 inline-flex flex-col items-center gap-3 rounded-2xl border border-graphite-border bg-graphite-card px-6 py-5 sm:flex-row sm:gap-5">
              <div className="flex items-center gap-2">
                <StarRating rating={Math.round(rating)} />
                <span className="text-lg font-bold text-ink">{rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-text-muted">
                {reviewCount} {reviewCount === 1 ? "avaliação" : "avaliações"} no Google
              </span>
              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-graphite-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {google.cta ?? "Ver no Google Maps"}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        {items.length > 0 ? (
          <div className="relative mt-12" aria-live="polite">
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-graphite-border bg-graphite-card text-accent shadow-sm transition-colors hover:border-accent hover:bg-accent hover:text-white sm:h-12 sm:w-12"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>

              <TestimonialCard key={`${current.name}-${activeIndex}`} item={current} />

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-graphite-border bg-graphite-card text-accent shadow-sm transition-colors hover:border-accent hover:bg-accent hover:text-white sm:h-12 sm:w-12"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {items.map((item, index) => (
                <button
                  key={`${item.name}-${item.text.slice(0, 24)}`}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-accent"
                      : "w-2.5 bg-graphite-border hover:bg-accent-shine"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        ) : (
          mapsUrl && (
            <div className="mt-12 rounded-2xl border border-dashed border-graphite-border bg-graphite-card/40 px-6 py-10 text-center">
              <p className="text-base text-text-muted sm:text-lg">
                As avaliações do Google serão exibidas aqui automaticamente.
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {google.cta ?? "Ver avaliações no Google Maps"}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
}
