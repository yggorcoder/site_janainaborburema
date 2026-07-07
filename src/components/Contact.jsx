import { MessageCircle, Phone } from "lucide-react";
import { config, getWhatsAppUrl } from "../lib/config";

export default function Contact() {
  const { contact } = config;

  return (
    <section
      id="contato"
      className="border-t border-graphite-border py-20 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-graphite-border">
          <div className="absolute inset-0" aria-hidden="true">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${contact.image})` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(42, 24, 20, 0.92) 0%, rgba(54, 31, 25, 0.78) 60%, rgba(42, 24, 20, 0.55) 100%)",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-shine">
                <Phone size={14} aria-hidden="true" />
                {contact.badge}
              </span>

              <h2 id="contact-title" className="mt-6 text-3xl font-bold tracking-tight text-white drop-shadow-sm sm:text-4xl">
                {contact.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/95 drop-shadow-md sm:text-lg">
                {contact.text}
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-lg shadow-whatsapp/25 transition-all hover:bg-whatsapp-hover hover:shadow-whatsapp/40 active:scale-95"
              >
                <MessageCircle size={22} aria-hidden="true" />
                {contact.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
