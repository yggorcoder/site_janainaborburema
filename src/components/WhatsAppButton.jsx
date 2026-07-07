import { MessageCircle } from "lucide-react";
import { config, getWhatsAppUrl } from "../lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse-soft fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-all hover:bg-whatsapp-hover hover:scale-110 active:scale-95 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label={`Falar com ${config.name} pelo WhatsApp`}
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
