import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { config } from "../lib/config";

export default function Gallery() {
  const { gallery } = config;
  const [activeIndex, setActiveIndex] = useState(0);
  const total = gallery.images.length;

  const goTo = (index) => {
    setActiveIndex((index + total) % total);
  };

  const current = gallery.images[activeIndex];

  return (
    <section
      id="galeria"
      className="border-t border-graphite-border bg-graphite-light/80 py-20 sm:py-28"
      aria-labelledby="gallery-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="gallery-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            {gallery.title}{" "}
            <span className="text-accent">{gallery.titleAccent}</span>
          </h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">{gallery.subtitle}</p>
        </div>

        <div className="relative mt-14">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-graphite-border bg-graphite-card text-accent shadow-sm transition-colors hover:border-accent hover:bg-accent hover:text-white sm:h-12 sm:w-12"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>

            <figure className="flex w-full max-w-3xl flex-col items-center justify-center">
              <div className="w-[85%] overflow-hidden rounded-2xl border border-graphite-border bg-graphite-card p-2 shadow-lg shadow-accent/10 sm:p-3">
                <img
                  key={current.alt}
                  src={current.src}
                  alt={`${current.alt} - ${config.name}`}
                  className="mx-auto max-h-[min(55vh,640px)] w-full rounded-xl object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 max-w-lg text-center text-sm text-text-muted sm:text-base">
                {current.alt}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-graphite-border bg-graphite-card text-accent shadow-sm transition-colors hover:border-accent hover:bg-accent hover:text-white sm:h-12 sm:w-12"
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {gallery.images.map((image, index) => (
              <button
                key={image.alt}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-accent"
                    : "w-2.5 bg-graphite-border hover:bg-accent-shine"
                }`}
                aria-label={`Ir para foto ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
